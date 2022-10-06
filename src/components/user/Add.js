import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import "./Add.css";

function Add({ employees, setEmployees, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = employees.length + 1;
    const newEmployee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    employees.push(newEmployee);
    setEmployees(employees);
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container">
      <div className="row form-row">
        <div className="col-4 offset-4">
          <form className="main-form" onSubmit={handleAdd}>
            <h1>Add Employee</h1>
            <label htmlFor="firstName" className="htmlForm-label">
              First Name
            </label>
            <input
              id="firstName"
              className="form-control"
              type="text"
              ref={textInput}
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="lastName" className="htmlForm-label">
              Last Name
            </label>
            <input
              id="lastName"
              className="form-control"
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="email" className="htmlForm-label">
              Email
            </label>
            <input
              id="email"
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="salary" className="htmlForm-label">
              Salary ($)
            </label>
            <input
              id="salary"
              className="form-control"
              type="number"
              name="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <label htmlFor="date" className="htmlForm-label">
              Date
            </label>
            <input
              id="date"
              className="form-control"
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <div style={{ marginTop: "30px" }}>
              <input type="submit" className="btn btn-primary" value="Add" />
              <input
                style={{ marginLeft: "12px" }}
                className="btn btn-primary"
                type="button"
                value="Cancel"
                onClick={() => setIsAdding(false)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add;
