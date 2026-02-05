import { useState, type FormEvent } from "react";
import { Link } from "react-router";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";

import style from "./LoginPage.module.css";

interface IFormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [formData, setFormaData] = useState<IFormData>({
    email: "",
    password: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log("login in...");
  }

  return (
    <Card>
      <div className={style["login-container"]}>
        <h1 className={style["login-container-title"]}>Login</h1>

        <form className={style["login-container-form"]} action="submit" onSubmit={handleSubmit}>
          <Input
            value={formData.email}
            placeholderText="e-mail"
            onChange={(e) => setFormaData((prev) => ({ ...prev, email: e.target.value }))}
          />

          <Input
            type="password"
            placeholderText="password"
            value={formData.password}
            onChange={(e) => setFormaData((prev) => ({ ...prev, password: e.target.value }))}
          />

          <button className={style["login-container-form-button"]} type="submit">
            LOGIN
          </button>
        </form>

        <Link to="/dashboard">
          <button className={style["login-container-guest"]}>Enter as guest</button>
        </Link>
      </div>
    </Card>
  );
};

export default LoginPage;
