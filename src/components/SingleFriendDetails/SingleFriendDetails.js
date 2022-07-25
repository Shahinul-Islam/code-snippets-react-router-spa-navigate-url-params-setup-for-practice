// import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleFriendDetails = () => {
  const [friend, setFriend] = useState([]);
  let params = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, [friend]);
  return (
    <div className="bg-indigo-400 p-5 w-1/2 text-white mx-auto text-2xl rounded shadow-indigo-300 shadow-lg mt-10">
      {/* <h2>This is single friend details: {params.friendId}</h2> */}
      <h1>Name: {friend.name}</h1>
      <h3>User Name: {friend.username}</h3>
      <h3>Email: {friend.email}</h3>
      <h3>Phone: {friend.phone}</h3>
    </div>
  );
};

export default SingleFriendDetails;
