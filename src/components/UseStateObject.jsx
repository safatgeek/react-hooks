import React, { useState } from 'react'

const UseStateObject = () => {
    const [name, setName] = useState({firstname: "", lastname: ""})

    const handleFirstName = (e) => {
        setName({
            
                ...name, 
                firstname: e.target.value
            
        })
    }

    const handleLastName = (e) => {
        setName({
            
                ...name, 
                lastname: e.target.value
            
        })
    }
  return (
    <div>
        <input type="text" onChange={handleFirstName}/>
        <input type="text" onChange={handleLastName}/>

        <h1>{name.firstname}</h1>
        <h1>{name.lastname}</h1>

    </div>
  )
}

export default UseStateObject