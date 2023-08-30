import React, { useContext } from 'react'
import ComponentB from './ComponentB'
import { UserContext } from '../App'

const ComponentA = () => {
  
  return (
    <div>
        <h1></h1>
        <ComponentB />
    </div>
  )
}

export default ComponentA