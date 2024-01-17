import React from 'react'
import $ from "../style/Layout.module.css"

function Layout({children}) {
  return (
    <div className={$.layout}>{children}</div>
  )
}

export default Layout