import React from 'react'
import "./journey.css"
import Search from '../../componant/Search'
import PersonalInfo from './../../componant/PersonalInfo';
import ContReading from "../images/icons8-shift-up-96 1.png"

export default function Journey_() {
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

      <div className="btn-cont">
        <a>continue reading</a>
        <img src={ContReading} alt="" />
      </div>

      <div className="contantSearch">
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
      </div>
    </div>
  )
}

