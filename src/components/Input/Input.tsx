import style from "./Input.module.css";

const Input = () => {
  return (
    <div className={style.container}>
      <span className={style.checkbox}></span>
      <input
        className={`${style.input} text-preset-1`}
        id="input"
        type="text"
        placeholder="Create a new todo..."
      />
    </div>
  );
};

export default Input;
