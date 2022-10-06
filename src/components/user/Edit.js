import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import "./Add.css";

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {
  const id = selectedEmployee.id;

  const [firstName, setFirstName] = useState(selectedEmployee.firstName);
  const [lastName, setLastName] = useState(selectedEmployee.lastName);
  const [email, setEmail] = useState(selectedEmployee.email);
  const [salary, setSalary] = useState(selectedEmployee.salary);
  const [date, setDate] = useState(selectedEmployee.date);

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const employee = {
      id,
      firstName,
      lastName,
      email,
      salary,
      date,
    };

    for (let i = 0; i < employees.length; i++) {
      if (employees[i].id === id) {
        employees.splice(i, 1, employee);
        break;
      }
    }

    setEmployees(employees);
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "Updated!",
      text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="container">
      <div className="row form-row">
        <div className="col-4 offset-4">
          <form className="main-form" onSubmit={handleUpdate}>
            <h1>Edit Employee</h1>
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
              <input type="submit" className="btn btn-primary" value="Update" />
              <input
                style={{ marginLeft: "12px" }}
                className="btn btn-primary"
                type="button"
                value="Cancel"
                onClick={() => setIsEditing(false)}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
