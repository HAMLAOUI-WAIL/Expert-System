import React,{ useState }   from 'react'
import image from "../images/icons8-hourglass-64 1.png"
import image1 from "../images/icons8-cash-80 1.png"
import "./Form.css"
import imageH from "../images/icons8-person-64 1.png"
import imageF from "../images/icons8-person-female-64 1.png"
import "./Form.css"


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

export default function Form() {

    const [checkboxes, setCheckboxes] = useState({
        checkbox1: false,
        checkbox2: false,
        checkbox3: false,
        checkbox4: false,
      });
    
      const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes({
          ...checkboxes,
          [name]: checked,
        });
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

            <div className="Goals">
                <div className="container">
                <div className="list">

                   <div className="form-element">
                        <input type="checkbox" name="platForm" value="" id="i" />
                        <label htmlFor="i">
                        
                            <div className="title">
                                Win at work
                            </div>
                            <div className="icon">
                                <img src={image} alt="" />
                            </div>
                        </label>
                    </div>    

                    <div className="form-element">
                    <input type="checkbox" name="platForm" value="instagram" id="instagram" />
                    <label htmlFor="instagram">
                        
                        <div className="title">
                         Have More Money
                        </div>
                        <div className="icon">
                            <img src={image1} alt="" />
                        </div>
                    </label>
                    </div>

                    <div className="form-element">
                        <input type="checkbox" name="platForm" value="" id="i22" />
                        <label htmlFor="i22">
                        
                            <div className="title">
                                Be Productive
                            </div>
                            <div className="icon">
                                <img src={image} alt="" />
                            </div>
                        </label>
                    </div>                    

                    <div className="form-element">
                    <input type="checkbox" name="platForm" value="slack" id="slack"/>
                    <label htmlFor="slack">
                       
                        <div className="title">
                        Build strong family
                        </div>
                        <div className="icon">
                            <img src={image} alt="" />
                        </div>
                    </label>
                    </div>
                    <div className="form-element">
                    <input type="checkbox" name="platForm" value="pinterest" id="pinterest"/>
                    <label htmlFor="pinterest">
                       
                        <div className="title">
                        have a healthy body
                        </div>
                        <div className="icon">
                            <img src={image} alt="" />
                        </div>
                    </label>
                    </div>
                    <div className="form-element">
                    <input type="checkbox" name="platForm" value="dribbble" id="dribbble"/>
                    <label htmlFor="dribbble">
                       
                        <div className="title">
                         Improve Discipline
                        </div>
                        <div className="icon">
                            <img src={image} alt="" />
                        </div>
                    </label>
                    </div>
                    <div className="form-element">
                        <input type="checkbox" name="platForm" value="" id="i3" />
                        <label htmlFor="i3">
                        
                            <div className="title">
                                Be Happy
                            </div>
                            <div className="icon">
                                <img src={image} alt="" />
                            </div>
                        </label>
                    </div>    

                    <div className="form-element">
                        <input type="checkbox" name="platForm" value="" id="i1" />
                        <label htmlFor="i1">
                        
                            <div className="title">
                                Improve social life
                            </div>
                            <div className="icon">
                                <img src={image} alt="" />
                            </div>
                        </label>
                    </div>    


                    <div className="form-element">
                        <input type="checkbox" name="platForm" value="" id="i2" />
                        <label htmlFor="i2">
                        
                            <div className="title">
                                Learn programming
                            </div>
                            <div className="icon">
                                <img src={image} alt="" />
                            </div>
                        </label>
                    </div>    

                </div>
               </div>
            </div>

            <button className='btn-next mt-6'>
                <a href='/Journey'>Continue</a>
            </button>
        </div>
    </div>
  )
}