import Header from "./components/Header/Header";
import TasksList from "./components/TasksList/TasksList";
import AddTask from "./components/AddTask/AddTask";

import style from "./App.module.css";

function App() {
  return (
    <>
      <Header />

      <div className={style.container}>
        <TasksList />
      </div>
    </>
  );
}

export default App;
