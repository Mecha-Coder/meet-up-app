import React from 'react'
import Card from "../design/Card"
import $ from "../style/Collection.module.css" 

function Item({data}) {
  const {title, image , address, description} = data

  return (
    <Card>
      <img className={$.img} src={image} alt={title} />
  
      <div className={$.details}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>

      <div className={$.action}>
        <button className={$.button}>To Favourites</button>
      </div>

    </Card>
  )
}

export default Item