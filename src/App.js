import Home from "./scenes/homePage/Home"
import "./App.css"
import {BrowserRouter ,Routes,Route} from"react-router-dom"
import Navbar from "./scenes/navbar/Navbar1";
import Choix from "./componant/Choix";
import SignIn from "./scenes/signIn/SignIn";
import GetStarted from "./scenes/GetStarted/GetStarted";
import BookSearch from "./scenes/bookSearch/BookSearch";
import Journey from "./scenes/journey/Journey_";
import BookDetails from "./scenes/BookDetails/BookDetails";
import BookSummary from "./scenes/BookSummary/BookSummary";
import MainPage from "./scenes/Main_Page/Main_Page";
import Tictactoe from "./scenes/Game/TickTacTao"
import Form from "./scenes/Form/Form";
import FormAfter from "./scenes/Form/Form_after";


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
            <Route exact path="/details" element={<BookDetails/>}></Route>
            <Route exact path="/BookSummary" element={<BookSummary/>}></Route>
            <Route exact path="/Main" element={<MainPage/>}></Route>
            <Route exact path="/Tictactoe" element={<Tictactoe/>}></Route>
            <Route exact path="/Form" element={<Form/>}></Route>
            <Route exact path="/Form_after" element={<FormAfter/>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
</div>
  
  );
}

export default App;
