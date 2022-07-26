import { data } from "autoprefixer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((data) => setPost(data.data));
  }, [postId]);
  return (
    <div className="bg-slate-500 p-5 font-semibold text-white rounded">
      <h2 className="mb-3">Title: {post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetails;
