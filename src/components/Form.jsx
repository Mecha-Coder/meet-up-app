import React, {useRef} from 'react'
import Card from "../design/Card"
import Button from "../components/Button"
import $ from "../style/Form.module.css"

function Form({callBack}) {
  const getTitle = useRef();
  const getImage = useRef();
  const getAddress = useRef();
  const getDescription = useRef();

  function handleSubmit(e){
    e.preventDefault()

    const data = {
      title       : getTitle.current.value,
      image       : getImage.current.value,
      address     : getAddress.current.value,
      description : getDescription.current.value,
    }

    callBack(data)
  }

  return (
    <Card>
      <form className={$.form} onSubmit={handleSubmit}>

        <div className={$.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input ref={getTitle} className={$.input} type="text" required id="title"/>
        </div>

        <div className={$.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input ref={getImage} className={$.input} type="url" required id="image"/>
        </div>

        <div className={$.control}>
          <label htmlFor='address'>Address</label>
          <input ref={getAddress} className={$.input} type="text" required id="address"/>
        </div>

        <div className={$.control}>
          <label htmlFor='description'>Description</label>
          <textarea ref={getDescription} className={$.input} type="text" required rows="5" id="description"></textarea>
        </div>
    
        <Button name="Add Meetup" />
  
      </form>
    </Card>
  )
}

export default Form