import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../js/action/taskAction";

const AddTask = ({filter,handleClickAll,handleClickDone,handleClickNotDone }) => {
  const taskList = useSelector((state) => state.taskReducer.taskList)
  const [text, setText] = useState("");
 
  const dispatch = useDispatch();
  const add = () => {
    if (text) {
      dispatch(
        addTask({ id: Math.random(), description: text.trim(), isDone: false })
      );
      setText("");
    } else alert("enter your task");
  };

  return (
    <div>
      <div className="add">
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button onClick={add}>Add Task</button>
      </div>
      <div>
        {
        (filter === "all" ) ? taskList
        (<button onClick={handleClickAll}>All</button>) :
        
        (filter === "done") ? ( taskList.filter((todo) => todo.isDone))
        (<button onClick={handleClickDone}>Done</button>) :
        
        (filter === "notDone") ? ( taskList.filter((todo) => !todo.isDone)) 
        (<button onClick={handleClickNotDone}>Not Done</button>)
        : null
        }
      </div>
    </div>
  );
};

export default AddTask;
