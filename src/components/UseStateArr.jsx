import React, { useState } from 'react'

const UseStateArr = () => {
    const [items, setItems] = useState( [] )

    const handleClick = (e) => {
        const randomNumber = Math.floor(Math.random() * 10 + 1)
        setItems([...items, {id: items.length, value: randomNumber}])
    }

  return (
    <div>
        <button onClick={handleClick}>Add item</button>
        {items.map(item => (
            <h1 key={items.id}> {item.value }</h1>
        ))}

    </div>
  )
}

export default UseStateArr