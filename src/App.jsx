import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <>
      <div>
        <Header></Header>
        <div className="mainComponent-container">
          <Sidebar></Sidebar>
          <Main></Main>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
