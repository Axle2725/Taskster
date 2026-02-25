import ProgressTracker from "../components/ProgressTracker";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";

export default function Form() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i != index));
  };

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <header>
        <h1 className="title">Taskster</h1>
        <p className="tagline">Your Friendly Task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
      <TaskList
        className=""
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      <ProgressTracker tasks={tasks} />

      {tasks.length > 0 && (
        <button className="clear-btn" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
}
