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
import Form2 from "./scenes/MainMenu/Form";
import TickTacTao from "./scenes/Game/TickTacTao";
import { useEffect, useState } from "react";

import BooksContext from './BooksContext'

function App() {


  const [booksData,setBooksData] = useState([])
  useEffect(()=>{
    if (localStorage.getItem("booksData") ){
        setBooksData( prev =>{
          return JSON.parse(localStorage.getItem("booksData"));
        })
    }
    }
    ,[]);

  return (
<BooksContext.Provider value={{booksData,setBooksData}}>
        <div className="appp">
            <BrowserRouter>
                  <div>
                    <Navbar />
                  </div>
                  <div className="app ">
                    
                      <Routes>
                        <Route exact path="/" element={<Form2 />} />
                        <Route exact path="/choix" element={<Choix/>} />
                        <Route exact path="/SignIn" element={<SignIn/>}/>
                        <Route exact path="/GetStarted" element={<Home/>}/>
                        <Route exact path="/Search" element={<BookSearch/>}></Route>
                        <Route exact path="/journey" element={<Journey/>}></Route>
                        <Route exact path="/details/:slug" element={<BookDetails/>}></Route>
                        <Route exact path="/BookSummary/:slug" element={<BookSummary/>}></Route>
                        <Route exact path="/home" element={<MainPage/>}></Route>
                        <Route exact path="/Tictactoe" element={<Tictactoe/>}></Route>
                        <Route exact path="/Form" element={<Form/>}></Route>
                        <Route exact path="/Form_after" element={<FormAfter/>}></Route>
                        <Route exact path="/Game" element={<TickTacTao/>}></Route>

                      </Routes>
                  </div>
            </BrowserRouter>
        </div>
  </BooksContext.Provider>

  );
}

export default App;
