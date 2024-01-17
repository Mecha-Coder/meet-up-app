import React, {useState, useEffect, createContext} from "react"
import { Routes, Route } from "react-router-dom"
import All from "./All"
import Favourite from "./Favourite"
import New from "./New"
import Error from "./Error"
import Header from "../layout/Header"
import Layout from "../design/Layout"
import "../style/Main.css"

export const dataContext = createContext()

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch(
      "https://meetup-app-be493-default-rtdb.firebaseio.com/meetup.json"
    ).then(res=>res.json()
    ).then(data=>{

      const keys   = Object.keys(data)
      const values = Object.values(data)
      const array  = values.map((item,index) =>({id:keys[index],...item,favourite: false}))
      
      setData(array)
    })
  },[])

  return (
    <>
      <dataContext.Provider value={{data,setData}}>
      <Header />
      <Layout>
      <Routes>
        <Route path="/" element={<All/>} />
        <Route path="/favourite" element={<Favourite/>} />
        <Route path="/new" element={<New/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </Layout>
      </dataContext.Provider>
    </>
  );
}

export default App;
