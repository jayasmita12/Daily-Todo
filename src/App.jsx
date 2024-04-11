import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import InputBox from "./components/InputBox";
import TabOptions from "./components/TabOptions";
import EmptyPage from "./components/EmptyPage";

function App() {
  return (
    <div className=" max-w-screen-lg mx-auto my-4 px-2 ">
      <InputBox />
      <TabOptions/>
    </div>
  );
}

export default App;
