import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((data) => setPosts(data.data));
  }, []);
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <Link className="bg-indigo-500 p-5 rounded-md text-white font-semibold mx-3" key={post.id} to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        ))}
      </div>
      <div className="m-4">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Posts;
