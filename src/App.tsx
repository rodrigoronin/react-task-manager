import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import style from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={style.container}>
        <div>
          <Input />
        </div>
      </div>
    </>
  );
}

export default App;
