import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import "./List.css";

function List({ employees, handleEdit, handleDelete, setEmployees }) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: null,
  });

  let [fcounter, setFcounter] = useState(0);
  let [lcounter, setLcounter] = useState(0);
  let [ecounter, setEcounter] = useState(0);
  const [fsortFlag, setFsortFlag] = useState(false);
  const [lsortFlag, setLsortFlag] = useState(false);
  const [esortFlag, setEsortFlag] = useState(false);

  //FOR FIRST NAME COLUMN
  useEffect(() => {
    if (fsortFlag) {
      fsortHandler();
    }
    setFsortFlag(false);
  }, [fsortFlag]);

  const fsortHandler = () => {
    let fcounterChecker = fcounter % 2;

    setEmployees(
      employees.sort(function (a, b) {
        var nameA = a.firstName.toLowerCase(),
          nameB = b.firstName.toLowerCase();
        if (fcounterChecker === 0 ? nameA < nameB : nameA > nameB) return -1;
      })
    );

    console.log(employees);

    setFcounter(fcounter + 1);
    console.log("FIRST NAME COUNTER" + fcounter);
  };

  //FOR LAST NAME COLUMN
  useEffect(() => {
    if (lsortFlag) {
      lsortHandler();
    }
    setLsortFlag(false);
  }, [lsortFlag]);

  const lsortHandler = () => {
    let lcounterChecker = lcounter % 2;

    setEmployees(
      employees.sort(function (a, b) {
        var nameA = a.lastName.toLowerCase(),
          nameB = b.lastName.toLowerCase();
        if (lcounterChecker === 0 ? nameA < nameB : nameA > nameB) return -1;
      })
    );

    console.log(employees);

    setLcounter(lcounter + 1);
    console.log("LAST NAME COUNTER" + lcounter);
  };

  //FOR EMAIL COLUMN
  useEffect(() => {
    if (esortFlag) {
      esortHandler();
    }
    setEsortFlag(false);
  }, [esortFlag]);

  const esortHandler = () => {
    let ecounterChecker = ecounter % 2;

    setEmployees(
      employees.sort(function (a, b) {
        var nameA = a.email.toLowerCase(),
          nameB = b.email.toLowerCase();
        if (ecounterChecker === 0 ? nameA < nameB : nameA > nameB) return -1;
      })
    );

    console.log(employees);

    setEcounter(ecounter + 1);
    console.log("EMAIL COUNTER" + ecounter);
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-end"></div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>No.</th>
            <th onClick={() => setFsortFlag(true)} scope="col">
              First Name
            </th>
            <th onClick={() => setLsortFlag(true)} scope="col">
              Last Name
            </th>
            <th onClick={() => setEsortFlag(true)} scope="col">
              Email
            </th>
            <th>Salary</th>
            <th scope="col">Date</th>

            <th scope="col" colSpan={2}>
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date} </td>
                <td>
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="btn btn-primary"
                  >
                    <FiEdit size={18} className="me-2" />
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="btn btn-primary "
                  >
                    <AiOutlineDelete size={18} className="me-2" />
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default List;
