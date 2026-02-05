import style from "./Input.module.css";

interface IInput {
  type?: string;
  id?: string;
  placeholderText?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type = "text", id = "", placeholderText, value, onChange }: IInput) => {
  return (
    <input
      className={`${style.input} text-preset-1`}
      id={id}
      type={type}
      placeholder={placeholderText}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
