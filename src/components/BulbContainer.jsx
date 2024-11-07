import React, { useState } from 'react'
import bulbon from '../images/bulb_on.png'
import bulboff from '../images/bulb_off.png'
import './BulbContainer.css'

const BulbContainer = () => {
    let [imageSrc,setImageSrc] = useState(bulboff);
    let [bulbState, setBulbState] = useState(false)

    let bulbHandler = () => {
        
        if(!bulbState)
        {
            setImageSrc(bulbon)
            setBulbState(true)
        }
        else {
            setImageSrc(bulboff)
            setBulbState(false)
        }
    }

  return (
    <div className='bulb-container'>
        <img src={imageSrc} alt="bulb" />
        <div>
            <button onClick={bulbHandler}>On</button>
            <button onClick={bulbHandler}>Off</button>
        </div>
    </div>
  )
}

export default BulbContainer