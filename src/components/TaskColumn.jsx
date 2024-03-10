import Todo from "../assets/direct-hit.png";
import TaskCard from "./TaskCard";
import "./TaskColumn.css";

function TaskColumn({ title, icon, tasks, status, handleDelete }) {
  //const{title, icon} = props;

  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon}></img>
        {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
}

export default TaskColumn;
