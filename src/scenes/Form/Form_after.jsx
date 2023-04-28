import React from 'react'
import imageH from "../images/icons8-person-64 1.png"
import imageF from "../images/icons8-person-female-64 1.png"
import "./Form.css"

export default function Form_after() {
    return (
        <div className='formI'>
            
            <div className='form'>
                <h1>
                Let’s Start Customizing Your Journey 
                </h1>
                <p>Help Us customize your journey by answering few consize questions</p>

                <div className='CoNTA'>
                <div className="left">
                    <h1 className="Qst2">
                    What is your age group ?
                    </h1>
                    <div className="form-element">
                        <input type="checkbox" name="platForm" value="1" id="1"/>
                        <label htmlFor="1">
                            <div className="title">
                            18 - 24
                            </div>
                        </label>
                    </div>
                    <div className="form-element">
                        <input type="checkbox" name="platForm" value="2" id="2"/>
                        <label htmlFor="2">
                        <div className="title">
                        25 - 31
                        </div>
                        </label>
                    </div>
                    <div className="form-element">
                        <input type="checkbox" name="platForm" value="3" id="3"/>
                        <label htmlFor="3">
                        <div className="title">
                        32 - 38
                        </div>
                        </label>
                    </div>
                </div>

                <div className="right">
                    <div className="Goals">
                        <h1 className="Qst2">What is your gender ?</h1>
                        <div className="container">
                        <div className="list">
                            <div className="form-element">
                            <input type="checkbox" name="platForm" value="homme" id="homme"/>
                            <label htmlFor="homme">
                            <div className="icon">
                                    <img src={imageH} alt="" />
                                </div>
                                <div className="title">
                                Male
                                </div>
                            </label>
                            </div>
                            <div className="form-element">
                            <input type="checkbox" name="platForm" value="famme" id="famme"/>
                            <label htmlFor="famme">
                            <div className="icon">
                                    <img src={imageF} alt="" />
                                </div>
                                <div className="title">
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
                    <a href='/'>Next</a>
                </button>
            </div>
        </div>
      )
}
