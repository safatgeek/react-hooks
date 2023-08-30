import React, { useState } from 'react'
import UseEffectTestingChild from './UseEffectTestingChild'

const UseEffectTesting = () => {

    const [showChild, setShowChild] = useState(true)
    const clickHandler = () => {
        setShowChild(!showChild)
    }
    
  return (
    <div>
        <button onClick={clickHandler}>Toggle Child</button>
        {showChild && <UseEffectTestingChild />}
    </div>
  )
}

export default UseEffectTesting