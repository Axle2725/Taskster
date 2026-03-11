// import TaskList from "../components/TaskList";
// import ProgressTracker from "../components/ProgressTracker";
// import { useEffect, useState } from "react";

// export default function Dashboard() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   });

//   const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i != index));
//   };

//   const updateTask = (updatedTask, index) => {
//     const newtask = [...tasks];
//     newtask[index] = updatedTask;
//     setTasks(newtask);
//   };

//   const clearTasks = () => {
//     setTasks([]);
//   };
//   return (
//     <div>
//       <TaskList
//         className=""
//         tasks={tasks}
//         updateTask={updateTask}
//         deleteTask={deleteTask}
//       />
//       <ProgressTracker tasks={tasks} />

//       {tasks.length > 0 && (
//         <button className="clear-btn" onClick={clearTasks}>
//           Clear All Tasks
//         </button>
//       )}
//     </div>
//   );
// }
