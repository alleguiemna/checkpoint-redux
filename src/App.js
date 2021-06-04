import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  const taskList = useSelector((state) => state.taskReducer.taskList);
  const [filter, setFilter] = useState("all");
  const handleClickAll = (e) => {
    setFilter("all");
  };
  const handleClickDone = (e) => {
    setFilter("done");
  };
  const handleClickNotDone = (e) => {
    setFilter("notDone");
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask
        filter={filter}
        handleClickAll={handleClickAll}
        handleClickDone={handleClickDone}
        handleClickNotDone={handleClickNotDone}
      />
      <TaskList taskList={taskList} />
    </div>
  );
}

export default App;
