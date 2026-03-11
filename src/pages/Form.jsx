import TaskForm from "../components/TaskForm";

export default function Form({ setTasks, tasks }) {
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };
  return (
    <div className="App">
      <header>
        <h1 className="title">Taskster</h1>
        <p className="tagline">Your Friendly Task Manager</p>
      </header>
      <TaskForm addTask={addTask} />
    </div>
  );
}
