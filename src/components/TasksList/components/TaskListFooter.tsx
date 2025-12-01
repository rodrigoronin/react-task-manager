import Card from "../../Card/Card";

import style from "./TaskListFooter.module.css";

interface FooterProps {
  tasksRemaining: number;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  clearCompleted: () => void;
}

const TaskListFooter = ({ tasksRemaining, setFilter, clearCompleted }: FooterProps) => {
  return (
    <Card>
      <div className={style.container}>
        <span
          className={`${style["remaining-tasks"]} text-preset-2`}
        >{`${tasksRemaining} items left`}</span>
        <div className={style.filter}>
          <button
            type="button"
            className={`${style.button} text-preset-3`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={`${style.button} text-preset-3`}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            type="button"
            className={`${style.button} text-preset-3`}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </div>
        <button
          type="button"
          className={`${style["clear-tasks"]} ${style.button} text-preset-2`}
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </Card>
  );
};

export default TaskListFooter;
