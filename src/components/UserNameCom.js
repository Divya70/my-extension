import React, { useState } from "react";
import "./css/usernamecom.css";
const UserNameCom = () => {
  const [userName, setUserName] = useState("");
  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const nameKeyPressHandler = (e) => {
    if (e.key === "Enter") {
      localStorage.setItem("name", userName);
      window.location.reload(false);
    }
  };
  return (
    <div className="username-input-cont">
      <div className="input-wrapper">
        <h1 className="name-heading">
          Hello, May I Know Your Beautiful Name?{" "}
        </h1>
        <input
          type="text"
          placeholder="Enter Your Beautiful Name"
          onChange={userNameHandler}
          onKeyPress={nameKeyPressHandler}
        />
        <button
          className="next-button"
          onClick={() => {
            localStorage.setItem("name", userName);
            window.location.reload(false);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export { UserNameCom };
