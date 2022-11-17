import './App.css';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="body">
      <div className="container">
        <div className="container__red-light"/>
        <div className="container__header-bubble"/>
        <div className="container__purple-bubble"/>
        <div className="container__small-bubble"/>
        <div className="container__medium-bubble"/>
        <div className="content">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
