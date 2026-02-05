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
          <fieldset className={style["login-container-form-fields"]}>
            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              value={formData.email}
              onChange={(e) => setFormaData((prev) => ({ ...prev, email: e.target.value }))}
            />
          </fieldset>

          <fieldset className={style["login-container-form-fields"]}>
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormaData((prev) => ({ ...prev, password: e.target.value }))}
            />
          </fieldset>

          <button className={style["login-container-form-button"]} type="submit">
            LOGIN
          </button>
        </form>

        <Link to="/dashboard" className={style["login-container-guest-link"]}>
          <button className={style["login-container-guest-button"]}>Enter as guest</button>
        </Link>
      </div>
    </Card>
  );
};

export default LoginPage;
