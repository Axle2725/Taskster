import { useState } from "react";
import Dashboard from "../components/Dashboard";
import TaskModal from "../components/TaskModal";
import "./Home.css";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, completed: false }]);
  };

  const toggleComplete = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div>
      <Dashboard
        tasks={tasks}
        openModal={() => setOpenModal(true)}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />

      {openModal && (
        <TaskModal closeModal={() => setOpenModal(false)} addTask={addTask} />
      )}
    </div>
  );
}
