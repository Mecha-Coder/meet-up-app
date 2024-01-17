import React from 'react'
import { useNavigate } from 'react-router-dom'
import { enqueueSnackbar } from 'notistack'
import Form from "../components/Form"

function New() {
  const navigate = useNavigate()

  function submitData(data){
    fetch(
      "https://meetup-app-be493-default-rtdb.firebaseio.com/meetup.json",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers:{
          'Content-Type' : "application/json"
        }
      }
    ).then(()=>{
      navigate("/")
      enqueueSnackbar("New meetup was successfully created", {
        variant:"success",
        anchorOrigin:{
          vertical: "bottom",
          horizontal: "right",
        }
      })
    })
  }

  return (
    <>
      <h1>Add New Meetup</h1>
      <Form callBack={submitData}/>
    </>
  )
}

export default New