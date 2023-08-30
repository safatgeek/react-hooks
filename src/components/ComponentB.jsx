import React, { useContext } from 'react'
import { UserContext } from '../App'

const ComponentB = () => {
    const name = useContext(UserContext)
  return (
    <div>ComponentB
        <h1>{name}</h1>
    </div>

  )
}

export default ComponentB