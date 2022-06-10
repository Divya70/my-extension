import { useEffect, useState } from "react";
import "./App.css";
import { Homepage } from "./pages/Homepage/Homepage";
import { Viewpage } from "./pages/Viewpage/Viewpage";

function App() {
  const [isUserExist, setIsUserExist] = useState(false);
  useEffect(() => {
    const getUserName = localStorage.getItem("name");
    setIsUserExist(getUserName);
  }, [isUserExist]);

  return <div className="App">{isUserExist ? <Viewpage /> : <Homepage />}</div>;
}

export default App;
