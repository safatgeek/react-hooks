import axios from "axios"
import React, { useEffect, useState } from "react"

const IndividualDataFetching = () => {
  const [post, setPost] = useState(null)

  const [id, setId] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const individualUrl = `https://jsonplaceholder.typicode.com/posts/${id}`

  useEffect(() => {
    axios
      .get(individualUrl)
      .then((res) => {
        setPost(res.data)
        setErrorMessage("")
      })
      .catch((err) => {
        console.log(err.message)
        setErrorMessage(err.message)
      })
  }, [id])

  if (!post) {
    return <h1>No Data</h1>
  }

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      {errorMessage ? (
        <h1>{errorMessage}</h1>
      ) : (
        <div>
          <h1>{post.title}</h1>
          {post.body}
        </div>
      )}
    </div>
  );
};

export default IndividualDataFetching;
