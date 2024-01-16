import React from 'react'
import $ from "../style/Card.module.css"

function Card({children}) {
  return (
    <div className={$.card}>{children}</div>
  )
}

export default Card