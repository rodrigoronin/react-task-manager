import style from "./Input.module.css";

interface IInput {
  inputValue: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ inputValue, onChange }: IInput) => {
  return (
    <input
      className={`${style.input} text-preset-1`}
      id="input"
      type="text"
      placeholder="Create a new todo..."
      value={inputValue}
      onChange={onChange}
    />
  );
};

export default Input;
