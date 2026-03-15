import React from "react";

const Header = () => {
  return (
    <>
      <h1>Todo App</h1>
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a href="#" className="nav-link active" aria-current="page">
                Add Todo
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Todo List
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Completed
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Remaining
              </a>
            </li>
          </ul>
        </header>
      </div>
    </>
  );
};

export default Header;
