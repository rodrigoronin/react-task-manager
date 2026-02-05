import style from "./Input.module.css";

interface IInput {
  type?: string;
  placeholderText?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type = "text", placeholderText, value, onChange }: IInput) => {
  return (
    <input
      className={`${style.input} text-preset-1`}
      id="input"
      type={type}
      placeholder={placeholderText}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
