import React from "react";
import "./viewpage.css";
import { DisplayTimeCom } from "../../components/DisplayTimeCom";
import { Goal } from "../../components/Goal";
import { Google } from "../../components/Google";
import { Weather } from "../../components/Weather";
import { Quotes } from "../../components/Quotes";

const Viewpage = () => {
  return (
    <>
      <div className="viewpage-image">
        <DisplayTimeCom />
        <Goal />
        <Google />
        <Weather />
        <Quotes />
      </div>
    </>
  );
};

export { Viewpage };
