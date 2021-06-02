import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";


function App() {
  const taskList = useSelector( state => state.taskReducer.taskList);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTask />
      <TaskList taskList={taskList.filter((todo) =>
          todo.isDone ? todo.isDone : !todo.isDone === false
        )}/>
    </div>
  );
}

export default App;
