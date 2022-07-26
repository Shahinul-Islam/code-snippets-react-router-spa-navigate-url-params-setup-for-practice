import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Friend = ({ friend }) => {
  const { name, email, id } = friend;
  let path = `/friends/${id}`;
  const navigate = useNavigate();

  const showFriendDetail = () => {
    navigate(`/friends/${id}`);
  };

  return (
    <div className=" p-3 rounded-md text-center border">
      <Link to={path} className="">
        <h3>Name: {name}</h3>
        <p>Email: {email}</p>
      </Link>
      <div className="mt-4">
        <button onClick={showFriendDetail} className="bg-indigo-800 px-3 py-2 rounded text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default Friend;
