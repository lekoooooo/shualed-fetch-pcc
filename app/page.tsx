"use client";
import React, { useEffect, useState } from "react";

type User = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
    postcode: string | number;
  };
  login: {
    username: string;
  };
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setUsers(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-wrap justify-center gap-6">
      {users.map((user, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-md w-[300px] h-[340px]"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-orange-200 overflow-hidden">
              <img
                src={user.picture.thumbnail}
                alt="avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg text-[#000000] font-bold">
                {user.name.first} {user.name.last}
              </h2>
              <p className="text-[#909090] text-sm">
                {user.dob.age} /{" "}
                {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
              </p>
            </div>
          </div>

          <div className="text-sm text-[#505050] space-y-1">
            <div className="flex justify-between font-semibold">
              <span>Age:</span>
              <span className="font-normal">{user.dob.age} Y.O.</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Name:</span>
              <span className="font-normal">
                {user.name.first} {user.name.last}
              </span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>username:</span>
              <span className="font-normal">{user.login.username}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>city:</span>
              <span className="font-normal">{user.location.city}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>country:</span>
              <span className="font-normal">{user.location.country}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>postcode:</span>
              <span className="font-normal">{user.location.postcode}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
