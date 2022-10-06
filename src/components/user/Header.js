import React, { useRef, useState } from "react";
import "./UserList.css";
import "./Header.css";

function Header({ setIsAdding, employees }) {
  const searchInput = useRef("");
  const [searchList, setSearchList] = useState([]);

  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchInput.current.value);
    const srchQuery = searchInput.current.value.toLowerCase();
    if (srchQuery) {
      console.log(srchQuery);
      let srchResult = employees.filter((list) => {
        return list["firstName"].toLowerCase().includes(srchQuery);
      });

      if (srchResult) {
        console.log(srchResult);
        setSearchList(srchResult);
      } else {
        setSearchList({});
      }
    } else {
      setSearchList([]);
    }
  };

  return (
    <header className="container">
      <h1>Employee Management System</h1>
      <div className="row" style={{ marginTop: "30px", marginBottom: "18px" }}>
        <div className="col">
          <input
            ref={searchInput}
            type="text"
            class="form-control "
            placeholder="Search"
            onChange={searchHandler}
          />
          {searchList && (
            <div className="search-result">
              {searchList.map((item) => (
                <div className="item-container" key={item.id}>
                  {item.firstName} {item.lastName}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="col d-flex justify-content-end me-5">
          <button onClick={() => setIsAdding(true)} className="btn btn-primary">
            Add Employee
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
