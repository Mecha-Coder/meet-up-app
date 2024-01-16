import React from 'react'
import $ from "../style/List.module.css"

function List({children}) {
  return (
    <div className={$.list}>{children}</div>
  )
}

export default List