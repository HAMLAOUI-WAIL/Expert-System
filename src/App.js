import Home from "./scenes/homePage/Home"
import "./App.css"
import {BrowserRouter ,Routes,Route} from"react-router-dom"
import Navbar from "./scenes/navbar/Navbar1";
import Choix from "./componant/Choix";
import SignIn from "./scenes/signIn/SignIn";
import GetStarted from "./scenes/GetStarted/GetStarted";
import BookSearch from "./scenes/bookSearch/BookSearch";
import Journey from "./scenes/journey/Journey_";

function App() {
  return (
<div className="appp">
<BrowserRouter>
      <div>
        <Navbar />
      </div>
      <div className="app">
        
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/choix" element={<Choix/>} />
            <Route exact path="/SignIn" element={<SignIn/>}/>
            <Route exact path="/GetStarted" element={<GetStarted/>}/>
            <Route exact path="/Search" element={<BookSearch/>}></Route>
            <Route exact path="/Journey" element={<Journey/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
</div>
  
  );
}

export default App;
