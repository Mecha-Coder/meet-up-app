import React from 'react'
import { DATA } from "../asset/data"
import Collection from "../components/Collection"


function All() {
  return (
    <>
      {DATA.map(item=><Collection key={item.id} data={item}/>)}
    </>
  )
}

export default All