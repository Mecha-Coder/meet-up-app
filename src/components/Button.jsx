import React from 'react'
import $ from "../style/Button.module.css"

function Button({name, onClick}) {
  return (
    <div className={$.action}>
      <button onClick={onClick} className={$.button}>{name}</button>
    </div>
  )
}

export default Button