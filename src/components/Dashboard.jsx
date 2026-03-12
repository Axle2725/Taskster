import TaskCard from "./TaskCard";
import ProgressBar from "./ProgressBar";

export default function Dashboard({ tasks, openModal, toggleComplete, deleteTask }) {
  return (
    <div className="dashboard">
      <h1>Task Manager Dashboard</h1>

      <ProgressBar tasks={tasks} />

      <div className="task-grid">
        {tasks.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            toggleComplete={() => toggleComplete(index)}
            deleteTask={() => deleteTask(index)}
          />
        ))}
      </div>

      <button className="add-btn" onClick={openModal}>
        +
      </button>
    </div>
  );
}


