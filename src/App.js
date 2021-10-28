import "./App.css";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <Header></Header>

      <div className="content">
        <Menu></Menu>
      </div>
    </>
  );
}

export default App;
