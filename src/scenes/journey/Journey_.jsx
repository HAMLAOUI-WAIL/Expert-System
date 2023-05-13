import React, { useState,useEffect } from 'react'
import "./journey.css"
import Search from '../../componant/Search'
import PersonalInfo from './../../componant/PersonalInfo';
import Button from '../../componant/Button';
import { useBooksContext } from '../../BooksContext';
import { Link, useNavigate } from 'react-router-dom';


export default function Journey_() {
  const {booksData,setBooksData} = useBooksContext()
  const navigate = useNavigate()

  useEffect(()=>{
    let temp = localStorage.getItem("booksData")
    if(temp == null || temp == ""){
      navigate('/Form')
    }

    else{
      setBooksData(JSON.parse(temp))
    }
    console.log(booksData)
  },[])

 

  const handleClick = () => {

  };  
  const handleChange = () => {
    
  };

  return (
    <div className='JorneyContant'>
      <div className='Nav-Conta'>
        <Search/>
        <div className="Inf">
         <PersonalInfo/>
        </div>
      </div>
      <div className='Jorney'>
        <h1>Keep the journey going..</h1>
        <p>Keep moving forward, and Eren
           got his head shot by Gabi ; 
           a 13 year old marleyan warrior
            trained really hard , however Zeke managed to catch his head and activate it. </p>
      </div>
     
      <Button text={"continue reading"}/>
      <h1 className='mt-6' >Does this book seem interesting to you?</h1>

      <div className="contantSearch">
        {
          booksData.map((item,index)=>(
            <Link to={`/details/${item.title.replace("/ /g","-")}`}>
            <div className="BookSResultat" key={index} >
              <div className="imageC" onClick={handleClick}>
                <img src={item.url}/>
              </div>
              <div className="title">{item.title}</div>
            </div>
            </Link>
          ))  
        }
      </div>



      {/* <div className="contantSearch">
        <div className='BookSResultat'>
          <div className="imageC">

          </div>
          <div className="title">
            Fire and Shitty crap in
            asd teq
          </div>
        </div>

        <div className='BookSResultat'>
          <div className="imageC">

          </div>
          <div className="title">
            Fire and Shitty crap in
            asd teq
          </div>
        </div>

        <div className='BookSResultat'>
          <div className="imageC">

          </div>
          <div className="title">
            Fire and Shitty crap in
            asd teq
          </div>
        </div>
        
        <div className='BookSResultat'>
          <div className="imageC">

          </div>
          <div className="title">
            Fire and Shitty crap in
            asd teq
          </div>
        </div>
      </div> */}
    </div>
  )
}

