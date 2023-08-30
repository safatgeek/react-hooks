import axios from "axios";
import React, { useEffect, useState } from "react";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        setMessage(err.message);
      });
  }, []);

  if (message) {
    return <div>{message}</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default DataFetching;
