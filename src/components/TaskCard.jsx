export default function TaskCard({ task, toggleComplete, deleteTask }) {
  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <h3>{task.task}</h3>

      <p>
        <b>Employee:</b> {task.employee}
      </p>
      <p>
        <b>Due:</b> {task.date}
      </p>
      <p>
        <b>Priority:</b> {task.priority}
      </p>
      <p>
        <b>Category:</b> {task.category}
      </p>

      <div className="task-buttons">
        <button className="complete-btn" onClick={toggleComplete}>
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button className="delete-btn" onClick={deleteTask}>
          Delete
        </button>
      </div>
    </div>
  );
}
