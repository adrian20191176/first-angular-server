import React, { useState } from "react";
import { callAppLink } from "../Service/EndPoints";
import "../App.css";
import { Link } from "react-router-dom";
import Confirmation from "./Confirmation";

function Home() {
  const [link, setLink] = useState([]);

  const testing = async () => {
    let sampleTest;
    sampleTest = link;
    sampleTest = sampleTest.split("?id=")[1];
    const dataa = await callAppLink(sampleTest);
    if (dataa) {
      console.log(dataa);
      setTitle(dataa.data);
    }
  };
  const handleSubmit = (e) => {
    try {
      e.preventDefault();

      testing();
    } catch (error) {
      console.log("Paste The Link");
    }
  };

  const [rating, setRating] = useState([]);

  const [appTitle, setTitle] = useState([]);
  const [pichar, setPichar] = useState([]);

  //   downloadable or not  (1 or 0)
  // predictable rating and playStore rating

  return (
    <div>
      <form>
        <p>
          <input
            type="text"
            placeholder="Paste the link.."
            onChange={(e) => setLink(e.target.value)}
          />

          <Link to={{ pathname: "/Confirmation", state: { ai: link } }}>
            <button className="get">
              {/* <button className="get" onClick={handleSubmit}> */}
              Submit
            </button>
          </Link>
        </p>
      </form>
      <div className="help">Help{rating.ratings} </div>
    </div>
  );
}

export default Home;
