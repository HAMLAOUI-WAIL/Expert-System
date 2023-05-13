import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import PersonalInfo from '../../componant/PersonalInfo'
import Search from '../../componant/Search'
import Button from '../../componant/Button'
import downloading from "../images/icons8-downloading-updates-100 1.png"
import connect from "../images/icons8-connect-128 1.png"
import save from '../images/icons8-bookmark-100 2.png'
import "./BookDetails.css"
import { useParams } from 'react-router-dom';
export default function BookDetails(props) {
    // const content = props.location.state.content;
    const {slug} = useParams()
    console.log(slug);
    // let title = "The Effective Executive".replace(" ","-")
    const [book , setBook ] = useState({
      title:"",
      author:"",
      description:"",
      summary:"",
      url:""
      })

    useEffect(()=>{
      let url = `http://localhost:8080/${slug}`
      let opts = {
        method : "GET",
        headers :{
          "Content-Type":"application/json",
        },

      }

      
      fetch(url,opts).then(res=>res.json()).then(res=>{
        console.log(res)
        setBook(res.data)
      }).then(()=>{
        console.log("asdasd asd sad as d")
        console.log(book);
      })


    },[])

  return (
    <div className='DetailsContent'>
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
            <h2>{book.author}</h2>
            <p>
              {book.description.slice(0,150)}...
            </p>
        </div>
      </div>
      <div className="Details">
        <div className="btn-">
            <Link to={`/BookSummary/${slug}`}>
             <Button text={"Read The Summary"}/>
            </Link>
            <div className='lgg'>
                <img src={save} alt="" />
                <img src={connect} alt="" />
                <img src={downloading} alt="" />
            </div>
        </div>

       <div className='' style={{margin:'3rem 1rem 2rem 4rem'}}>
        <div className="DetailsBook">
              <div className="Description">
                  <h1>Description</h1>
                  <p>
              {book.description}

                  </p>
              </div>
              <div className='MoreDetails'>
                  <div className="Editors">
                      <h1>Editors</h1>
                      <p>{book.author},{book.author}</p>
                  </div>
                  <div className="Language">
                      <h1>Languages</h1>
                      <p>English , Arabic , French</p>
                  </div>
              </div>
          </div>
          <hr className='line' />
          <div className="Comments">
              <h1>Comments</h1>
          </div>        
       </div>
      </div>

    </div>
  )
}
