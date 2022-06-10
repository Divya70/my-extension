import React, { useEffect, useState } from "react";

const DisplayTimeCom = () => {
  let time = new Date().toLocaleTimeString();
  const [userName, setUserName] = useState("");
  const [currentTime, setCurrentTime] = useState(time);
  const updatedTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updatedTime, 1000);
  useEffect(() => {
    const getUser = localStorage.getItem("name");
    setUserName(getUser);
  }, []);
  return (
    <div className="display-current-time">
      <div className="curr-time">{currentTime}</div>
      <h1 className="welcome-user">Welcome , {userName}</h1>
    </div>
  );
};

export { DisplayTimeCom };
