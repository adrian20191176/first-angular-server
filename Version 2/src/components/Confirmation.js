import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { callAppLink } from "../Service/EndPoints";

function Confirmation(props) {
  const [app, setTitle] = useState([]);

  const testing = async () => {
    let sampleTest;
    sampleTest = ai;
    sampleTest = sampleTest.split("?id=")[1];
    const dataa = await callAppLink(sampleTest);
    if (dataa) {
      console.log(dataa);
      setTitle(dataa.data);
    }
  };
  const { ai } = props.location.state;
  testing(); //replace

  console.log(props.mairu);

  return (
    <div className="appimage">
      <img src={app.icon} alt="AppIcon" width="150" height="150"></img>

      <h4 className="appName">{app.title}</h4>
      <span className="confirm">
        <p> Is this Your app looking for ? </p>
        {
          <Link to={"/Results"}>
            <button className="yes">Yes</button>
          </Link>
        }
        {
          <Link to={"/"}>
            <button className="no">No</button>
          </Link>
        }
      </span>
    </div>
  );
}

export default Confirmation;
