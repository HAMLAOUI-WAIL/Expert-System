import React, { useState } from 'react'
import PersonalInfo from '../../componant/PersonalInfo'
import Search from '../../componant/Search'
import "./BookSummary.css"
import { useEffect, } from 'react'

export default function BookSummary() {

  let title = "The Effective Executive".replace(" ","-")
  const [book,setBook] = useState({
    title:"",
    author:"",
    description:"",
    summary:"",
    url:""
  })
  useEffect(()=>{
      
      let url = `http://localhost:8080/${title}`
      let opts = {
        method : "GET",
        headers :{
          "Content-Type":"application/json",
        },

      }

      
      fetch(url,opts).then(res=>res.json()).then(res=>{
        setBook(res.data)
        console.log(res.data) 
      })




    },[])
  return (
    <div className='BookSummary'>
      <div className='Nav-Conta'>
        <Search/>
        <div className="Inf">
         <PersonalInfo/>
        </div>
      </div>

      <div className="pageElement">
        <div className="imageCO">
        <img src={book.url} />
        </div>
        <div className="EContent">
            <h1>{book.title}</h1>
            <h2>{book.Author}</h2>
            <p>
             {book.description} 
            </p>
        </div>
      </div>
        <div className='KeyPoints'>
            <div className='KeyPoints_'>
                <h1>Key Points</h1>
                <hr className='line2'/>
                <div>
                    <span >1.</span><p>Keep Yourself Inline jonga shis</p> <br />
                    <span >2.</span><p>Practice till you piss blood</p><br />
                    <span >3.</span><p>Wake up everyday thankfull and ready to destroy yourself</p><br />
                    <span >4.</span><p>Kill all your cats and chickens</p><br />
                    <span >5.</span><p>Don’t forget to make sha5shou5a when you hunt a deer</p> <br />
                </div>
            </div>

            <br /><br />
            <h1>Summary</h1>
            <hr className='line2'/>

            <div className='Summary'>
                <div>
                    <span >1.</span><h2>Keep Yourself Inline jonga shis</h2> 
                    <div>
                        <p className='textS'>
                          {
                            book.summary
                          }
                        </p>
                    </div>
                </div>

                <div>
                    <span >2.</span><h2>Practice till you piss blood</h2> 
                    <div>
                        <p className='textS'>
                        {
                            book.summary
                          }
                        </p>
                    </div>
                </div>
            </div>
        
            <hr className='line___' />

        </div>

    </div>
  )
}
