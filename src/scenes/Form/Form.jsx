import React,{ useState }   from 'react'
import image from "../images/icons8-hourglass-64 1.png"
import image1 from "../images/icons8-cash-80 1.png"
import "./Form.css"
import imageH from "../images/icons8-person-64 1.png"
import imageF from "../images/icons8-person-female-64 1.png"
import "./Form.css"
import {useBooksContext} from '../../BooksContext'
import { useNavigate } from 'react-router-dom'
export  function Form_after() {
    return (
        <div className='formI'>
            
            <div className='form' style={{width:"60rem"}}>
                <h1>
                Let’s Start Customizing Your Journey 
                </h1>
                <p>Help Us customize your journey by answering few consize questions</p>

                <div className='flex mt-10 mb-10' style={{justifyContent:"space-between"}}>
                <div className="left mb-8 mr-12">
                    <h1 className="Qst2">
                     What is your age group ?
                    </h1>
                    
                    <div className="form-element mt-4">
                        <input type="checkbox" name="platForm" value="1" id="1"/>
                        <label htmlFor="1">
                            <div className="title">
                            18 - 24
                            </div>
                        </label>
                    </div>
                    <div className="form-element mt-4">
                        <input type="checkbox" name="platForm" value="2" id="2"/>
                        <label htmlFor="2">
                        <div className="title">
                        25 - 31
                        </div>
                        </label>
                    </div>
                    <div className="form-element mt-4">
                        <input type="checkbox" name="platForm" value="3" id="3"/>
                        <label htmlFor="3">
                        <div className="title">
                        32 - 38
                        </div>
                        </label>
                    </div>
                </div>

                <div className="right ml-22">
                    <div className="">
                        <h1 className="Qst2">What is your gender ?</h1>
                        <div className="">
                            <div className="flex">
                                <div className="mr-10">
                                    <input type="checkbox" name="platForm" value="Male" id="Male"/>
                                    <label htmlFor="Male">
                                    <div className="">
                                            <img src={imageH} alt="" />
                                        </div>
                                        <div className="">
                                          Male
                                        </div>
                                    </label>
                                </div>
                                <div className="">
                                <input type="checkbox" name="platForm" value="famme" id="famme"/>
                                <label htmlFor="famme">
                                    <div className="">
                                        <img src={imageF} alt="" />
                                    </div>
                                    <div className="">
                                        Female
                                    </div>
                                </label>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                </div>
    
                
    
                <button className='btn-next'>
                    <a href='/Form'>Next</a>
                </button>
            </div>
        </div>
      )
}
const goals = [
    "Career(User)",
    "MakeMoney(User)",
    "Productivity(User)",
    "Leadership(User)",
    "Articulate(User)",
    "Healthy(User)",
    "Social(User)",
    "Technology(User)"
]

export default function Form() {

    const navigate = useNavigate()
    const [goals, setGoals] = useState([]);
    const [error,setError] = useState(false);
    const {booksData,setBooksData} = useBooksContext()
    const handleSubmit = (e)=>{
        if(goals.length<3){
            setError(true);
            return;
        }
        else{
            let opts = {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({goals})
            }
            fetch("http://localhost:8080/",opts).then(res=>res.json()).then(res=>{
               setBooksData(prev=>(JSON.parse(res.data)))
               localStorage.setItem("booksData",res.data)
               
            }).then(()=>navigate('/journey'))
        }

    }


    const handleClick = (e) => {
        
        if(goals.length >=3 && !goals.includes(e.target.value)){
            setError(true)
            return;
        }
        else{
            if(goals.includes(e.target.value)){
                setError(false);
                setGoals(
                    prev=>{
                        let temp = []
                        temp = prev.filter(item=>item!=e.target.value)
                        return temp
                }
                )
            }
            else{
            setError(false);
            setGoals([...goals,e.target.value])
        }
    }
    console.log(goals)
      };

  return (
    <div className='formI'>
        
        <div className='form'>
            <h1>
            Let’s Start Customizing Your Journey 
            </h1>
            <p>Help Us customize your journey by answering few consize questions</p>
            <h1 className="Qst">
              What are your Goals ? 
            </h1>
            {error && <span style={{color:"red"}}>You can Insert Three (3) and only Three Goals</span>}

            <div className="Goals">
                <div className="container">
                <div className="list">

                   <div className="form-element">
                        <input type="checkbox" name="platForm" onChange={handleClick} value="Career(User)" id="Career" checked={goals.includes("Career(User)")} />
                        <label htmlFor="Career">
                        
                            <div className="title">
                                Have A Better Career
                            </div>
                            <div className="icon">
                                <img src={image} alt="" />
                            </div>
                        </label>
                    </div>    

                    <div className="form-element">
                    <input type="checkbox" name="platForm" onChange={handleClick} value="MakeMoney(User)" id="MakeMoney" checked={goals.includes("MakeMoney(User)")} />
                    <label htmlFor="MakeMoney">
                        
                        <div className="title">
                         Make More Money
                        </div>
                        <div className="icon">
                            <img src={image1} alt="" />
                        </div>
                    </label>
                    </div>

                    <div className="form-element">
                        <input type="checkbox" name="platForm" onChange={handleClick} value="Productivity(User)" id="Productivity" checked={goals.includes("Productivity(User)")} />
                        <label htmlFor="Productivity">
                        
                            <div className="title">
                            Improve Discipline and productivity
                            </div>
                            <div className="icon">
                                <img src={image} alt="" />
                            </div>
                        </label>
                    </div>                    

                    <div className="form-element">
                    <input type="checkbox" name="platForm" onChange={handleClick} value="Leadership(User)" id="Leadership" checked={goals.includes("Leadership(User)")}/>
                    <label htmlFor="Leadership">
                       
                        <div className="title">
                        Become a Better Leader
                        </div>
                        <div className="icon">
                            <img src={image} alt="" />
                        </div>
                    </label>
                    </div>
                    <div className="form-element">
                    <input type="checkbox" name="platForm" onChange={handleClick} value="Articulate(User)" id="Articulate" checked={goals.includes("Articulate(User)")}/>
                    <label htmlFor="Articulate">
                       
                        <div className="title">
                        Acquire more knowldge and become articulate
                        </div>
                        <div className="icon">
                            <img src={image} alt="" />
                        </div>
                    </label>
                    </div>
                    <div className="form-element">
                    <input type="checkbox" name="platForm" onChange={handleClick} value="Healthy(User)" id="Healthy" checked={goals.includes("Healthy(User)")}/>
                    <label htmlFor="Healthy">
                       
                        <div className="title">
                        Improve Your Health
                        </div>
                        <div className="icon">
                            <img src={image} alt="" />
                        </div>
                    </label>
                    </div>
                    <div className="form-element">
                        <input type="checkbox" name="platForm" onChange={handleClick} value="Social(User)" id="Social" checked={goals.includes("Social(User)")} />
                        <label htmlFor="Social">
                        
                            <div className="title">
                            Strengthen Your Social Life
                            </div>
                            <div className="icon">
                                <img src={image} alt="" />
                            </div>
                        </label>
                    </div>    

                    <div className="form-element">
                        <input type="checkbox" name="platForm" onChange={handleClick} value="Technology(User)" id="Technology" checked={goals.includes("Technology(User)")} />
                        <label htmlFor="Technology">
                        
                            <div className="title">
                            Learn Programming
                            </div>
                            <div className="icon">
                                <img src={image} alt="" />
                            </div>
                        </label>
                    </div>    


                </div>
               </div>
            </div>

            <button className='btn-next mt-6' onClick={handleSubmit}>
                <a >Continue</a>
            </button>
        </div>
    </div>
  )
}