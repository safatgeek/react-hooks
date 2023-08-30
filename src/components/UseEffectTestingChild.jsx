import React, { useEffect, useState } from "react";

const UseEffectTestingChild = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("useEffect called");

    return () => {
        console.log("component unmounted");
      }

  }, [])
  
  return <div>
    I am child component
  </div>
};

//https://jsonplaceholder.typicode.com/posts

export default UseEffectTestingChild;
