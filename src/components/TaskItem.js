import React from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../js/action/taskAction";
import EditTask from "./EditTask";

const TaskItem = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="task" style={{ textDecoration: todo.isDone ? "line-through" : null }}>
        {todo.description}
      </div>
      <div>
        <button onClick={() => dispatch(completeTask(todo.id))}>
          {todo.isDone ? "Undo": "Complete"}{" "}
        </button>
        <EditTask todo={todo} />
        <button onClick={() => dispatch(deleteTask(todo.id))}>DELETE</button>
      </div>
    </div>
  );
};

export default TaskItem;
