import React, {useContext} from 'react'
import { dataContext } from "./App"
import Collection from "../components/Collection"
import List from "../design/List"

function All() {
  const {data} = useContext(dataContext)

  return (
    <>
      <h1>All Meetup Location</h1>
      <List>
        {data.map(item=><Collection key={item.id} data={item}/>)}
      </List>
    </>
  )
}

export default All