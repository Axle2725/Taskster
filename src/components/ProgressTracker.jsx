export default function ProgressTracker({ tasks }) {
  const completedTasks = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const percent = totalTasks == 0 ? 0 : (completedTasks / totalTasks) * 100;
  return (
    <div className="progress-tracker">
      <p>
        {completedTasks} out of {totalTasks} tasks Completed
      </p>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}
