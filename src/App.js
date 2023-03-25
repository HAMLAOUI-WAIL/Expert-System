import Home from "./scenes/homePage/Home"
import "./App.css"
import {BrowserRouter ,Routes,Route} from"react-router-dom"
import Team from './scenes/content/team'
import Navbar from "./scenes/navbar/Navbar";
import Choix from "./componant/Choix";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <div className="container">
        <div className="left-side">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/choix" element={<Choix/>} />
          </Routes>
        </div>
        <div className="right-side">
          <Team/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
