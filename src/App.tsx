import { Outlet } from "react-router";
import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";

import style from "./App.module.css";

function App() {
  const htmlEle = document.documentElement;

  return (
    <>
      <Banner />

      <div className={style.container}>
        <Header changeTheme={() => htmlEle.classList.toggle("dark")} />

        <Outlet />
      </div>
    </>
  );
}

export default App;
