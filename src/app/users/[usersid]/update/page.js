// Make sure to import React, useEffect, and useState
"use client"
import React, { useEffect, useState } from "react";
import "../../../adduser/styles.css";

function Update({ params }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await fetch(`http://localhost:3000/api/data/${params.usersid}`);
      if (!res.ok) {
        throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
      }
      res = await res.json();
      console.log(res);
      setName(res.name);
      setAge(res.age);
      setEmail(res.email);
    } catch (error) {
      console.error("Error fetching data:", error);
      // You can set some state to indicate an error or handle it accordingly
    }
  };
  

  const handleData = async () => {
    try {
      // Assuming you have an API endpoint to update user data
      const res = await fetch(`http://localhost:3000/api/data/${params.usersid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          age,
          email,
        }),
      });

      // Assuming you handle the API response accordingly
      if (res.ok) {
        console.log("User data updated successfully!");
        // You may want to display a success message or redirect the user
      } else {
        console.error("Failed to update user data:", res.status);
        // Handle the error, display an error message, etc.
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <h1>Update User Input</h1>
      <div className="main-box">
        <input
          placeholder="Enter user Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inp-box"
        />
        <input
          placeholder="Enter Age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="inp-box"
        />
        <input
          placeholder="Enter Email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="inp-box"
        />
        <button onClick={handleData} className="btn">
          Update User
        </button>
      </div>
    </div>
  );
}

export default Update;
