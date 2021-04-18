import React from "react";
import "../App.css";

function Results() {
  return (
    <div className="UserReview">
      <div className="review">
        <p className="reviewText">
          Does exactly what you'd expect, and I mean that in a good way. It
          gives you only the most important features, and uses simpler layouts
          and functionality. In exchange, the app loads insanely fast, and
          barely even touches your battery in the process. Perfect for those who
          wants to keep track of their
        </p>
        <div className="star">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
        <div className="scoreLable">
          Score:<span className="score"> 5/5</span>
        </div>
      </div>

      <div className="review">
        <p className="reviewText">
          Does exactly what you'd expect, and I mean that in a good way. It
          gives you only the most important features, and uses simpler layouts
          and functionality. In exchange, the app loads insanely fast, and
          barely even touches your battery in the process. Perfect for those who
          wants to keep track of their
        </p>
        <div className="star">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <div className="scoreLable">
          Score:<span className="score"> 3/5</span>
        </div>
      </div>
      <div className="review">
        <p className="reviewText">
          Does exactly what you'd expect, and I mean that in a good way. It
          gives you only the most important features, and uses simpler layouts
          and functionality. In exchange, the app loads insanely fast, and
          barely even touches your battery in the process. Perfect for those who
          wants to keep track of their
        </p>
        <div className="star">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
        <div className="scoreLable">
          Score :<span className="score"> 2/5</span>
        </div>
      </div>

      <div className="totalScore">
        Total Score : <span className="score"> 80 </span>
      </div>
    </div>
  );
}

export default Results;
