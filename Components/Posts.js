import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithbhagyalakshmi",
      userImg: "./images/DBVL7306.JPG",
      Img: "https://images.unsplash.com/photo-1661793192014-e687ddd04bce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      caption: "Nice Picture",
    },
    {
      id: "2",
      username: "codewithlakshmi",
      userImg: "./images/DBVL7306.JPG",
      Img: "https://images.unsplash.com/photo-1628193826226-a7c781daa6c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      caption: "New Picture",
    }
  ]
  return (
    <div>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.Img}
          caption={post.caption}
        />
))}
    </div>
  )
}
