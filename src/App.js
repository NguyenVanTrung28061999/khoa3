import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./components/UserProfile";
import DemoJss from "./JSS_StyledComponents/DemoJSS/DemoJss";
import ToDoList from "./JSS_StyledComponents/BaiTapToDoList/ToDoList";
import DemoHooks from "./Hooks/DemoHooks";
import ToDoAppHook from "./Hooks/ToDoAppHook";

function App() {
  return (
    <div className="App">
      {/* <DemoJss /> */}
      {/* <ToDoList /> */}
      {/* <DemoHooks /> */}
      <ToDoAppHook />
    </div>
  );
}

export default App;
