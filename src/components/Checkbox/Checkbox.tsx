import style from "./Checkbox.module.css";

interface CheckboxProps {
  completed: boolean;
  taskId: string;
  onToggle: (id: string) => void;
}

const Checkbox = ({ completed = false, taskId, onToggle }: CheckboxProps) => {
  return (
    <span
      className={`${style.checkbox} ${completed && style.completed}`}
      onClick={() => onToggle(taskId)}
    ></span>
  );
};

export default Checkbox;
