import React from "react";

const AddTodo = () => {
  return (
    <>
      <div className="mb-3 taskForm">
        <label for="exampleFormControlInput1" className="form-label ">
          Task Titile
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label ">
          Task Description
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Describe your task"
        ></textarea>
      </div>
    </>
  );
};

export default AddTodo;
