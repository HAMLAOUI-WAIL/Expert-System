import React from 'react'
import ContReading from "../scenes/images/icons8-shift-up-96 1.png"
import "./button.css"

export default function Button(props) {

  return (
    <div className="btn-cont">
        <a>{props.text}</a>
        <img src={ContReading} alt="" />
    </div>
  )
}
