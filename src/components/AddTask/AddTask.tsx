import { useState, type FormEvent } from "react";
import Card from "../Card/Card";
import Checkbox from "../Checkbox/Checkbox";

import style from "./AddTask.module.css";
import type { Task } from "../../types/task";

interface AddTaskProps {
  onAddTask: (task: Task) => void;
}

const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const currentDateInMilliseconds = new Date();
    const id = `${title}${currentDateInMilliseconds.getMilliseconds()}`;

    onAddTask({
      id,
      title,
      completed: false,
    });

    setTitle("");
  };

  return (
    <Card>
      <form className={style.container} onSubmit={(e: FormEvent) => handleSubmit(e)}>
        <Checkbox />
        <input
          className={`${style.input} text-preset-1`}
          id="input"
          type="text"
          placeholder="Create a new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </Card>
  );
};

export default AddTask;
