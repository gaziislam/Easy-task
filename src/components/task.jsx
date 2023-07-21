import React, { useState } from "react";
import "./style.css";

const Task = () => {
  const [inputdata, setinputdata] = useState("");
  const [task, setTask] = useState([]);

  const handleInpitChange = (e) => {
    setinputdata(e.target.value);
  };

  const addTask = () => {
    if (!inputdata) {
      alert("please add your task");
    } else {
      setTask([...task, inputdata]);
      setinputdata("");
    }
  };
  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src="./images/task-list-svgrepo-com.svg" alt="todologo" />
          <h2 style={{ color: "rgb(47, 214, 122)" }}></h2>
          <figcaption>Add Your Task Here 👌</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            name=""
            id=""
            placeholder="✍️ Add Your Task"
            className="form-control"
            value={inputdata}
            onChange={handleInpitChange}
          />
          <i className="fa fa-plus add-btn" onClick={addTask}></i>
        </div>

        {/* Show task list */}
        <div className="showItems">
          {task.map((val, index) => {
            return (
              <div className="eachItem" key={index}>
                <h3>{val}</h3>
                <div className="todo-btn"></div>
                <i className="far fa-edit add-btn"></i>
                <i className="far fa-trash-alt add-btn"></i>
              </div>
            );
          })}
        </div>
        {/* Remove All  Button */}
        <div className="showItems">
          <button className="btn effect04" data-sm-link-text="Remove All">
            <span>CHECK LIST</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
