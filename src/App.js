import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;
