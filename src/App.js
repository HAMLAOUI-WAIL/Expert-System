import Home from "./scenes/homePage/Home"
import "./App.css"
import {BrowserRouter ,Routes,Route} from"react-router-dom"
import Navbar from "./scenes/navbar/Navbar1";
import Choix from "./componant/Choix";
import SignIn from "./scenes/signIn/SignIn";
import GetStarted from "./scenes/GetStarted/GetStarted";

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/choix" element={<Choix/>} />
          <Route exact path="/SignIn" element={<SignIn/>}/>
          <Route exact path="/GetStarted" element={<GetStarted/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
