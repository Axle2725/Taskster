export default function ProgressBar({ tasks }) {
  const completed = tasks.filter((t) => t.completed).length;
  const total = tasks.length;

  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="progress-container">
      <div className="progress-info">
        <span>Progress</span>
        <span>{percent}%</span>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}
