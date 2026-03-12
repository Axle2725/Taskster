import { useState } from "react";

export default function TaskModal({ closeModal, addTask }) {
  const today = new Date().toISOString().split("T")[0];

  const [taskData, setTaskData] = useState({
    task: "",
    employee: "",
    date: today,
    priority: "Low",
    category: "General",
  });

  const handleChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Task</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Task"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="employee"
            placeholder="Employee"
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={taskData.date}
            onChange={handleChange}
          />

          <select name="priority" onChange={handleChange}>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select name="category" onChange={handleChange}>
            <option>General</option>
            <option>Work</option>
            <option>Personal</option>
          </select>

          <div className="modal-buttons">
            <button type="button" onClick={closeModal}>
              Cancel
            </button>
            <button type="submit">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
