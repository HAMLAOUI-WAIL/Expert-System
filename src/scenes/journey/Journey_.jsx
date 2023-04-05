import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./journey.css"
import Search from '../../componant/Search'
import PersonalInfo from './../../componant/PersonalInfo';
import Button from '../../componant/Button';

const BookList = [
  {
  image:'',
  title:'Fire and Shitty crap in asd teq'
},  {
  image:'',
  title:'Fire and Shitty crap in asd teq'
},  {
  image:'',
  title:'Fire and Shitty crap in asd teq'
},  {
  image:'',
  title:'Fire and Shitty crap in asd teq'
},{
  image:'',
  title:'Fire and Shitty crap in asd teq'
},  {
  image:'',
  title:'Fire and Shitty crap in asd teq'
}
]

export default function Journey_() {

  const handleClick = () => {
    navigate( '/details',{state:{content:BookList}});
  };

  const navigate = useNavigate()


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
      <Button props={"Read The Summary"}/>

      <div className="contantSearch">
        {
          BookList.map((item,index)=>(
            <div className="BookSResultat" key={index} >
              <div className="imageC" onClick={handleClick}></div>
              <div className="title">{item.title}</div>
            </div>
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

