import React from "react";
import "./Portfolio.css";
import budgetTracker from "../pics/budget_tracker.JPG";
import easyShopper from "../pics/easy_shopper.JPG";
import passwordGenerator from "../pics/password_generator.JPG";
import weatherDashboard from "../pics/weather_dashboard.JPG";
import NoteTaker from "../pics/note_taker.JPG";
import MathQuiz from "../pics/math-quiz.JPG";
import Footer from "../components/Footer";

function Portfolio() {
  return (
    <div className="bg-secondary">
      <br />
      <h2 className="text-center text-white">My Projects</h2>
      <br />
      <div className="card">
        <div className="img-container">
          <img alt="budget tracker" src={budgetTracker} />
        </div>
        <div className="content">
          <p>This Budget Tracker app will help you keep track of your income and expenses.</p>
          <a href="https://github.com/ShueMoua/Budget_Tracker"> Budget Tracker</a>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img alt="easy shopper" src={easyShopper} />
        </div>
        <div className="content">
          <p>The Easy Shopper app will assist you with comparing prices for an item between Target and Amazon.</p>
          <a href="https://github.com/ShueMoua/Price-Comparison-App">Easy Shopper</a>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img alt="password generator" src={passwordGenerator} />
        </div>
        <div className="content">
          <p>If you're having trouble thinking of a password, look no further. The Password Generator app could generate a password for up to 128 characters.</p>
          <a href="https://github.com/ShueMoua/Password-Generator">Password Generator</a>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img alt="weather dashboard" src={weatherDashboard} />
        </div>
        <div className="content">
          <p>The Weather Dashboard will assist you with getting the weather reports for any city you're in.</p>
          <a href="https://github.com/ShueMoua/Weather-Dashboard">Weather Dashboard</a>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img alt="Note Taker" src={NoteTaker} />
        </div>
        <div className="content">
          <p>This Note Taker app will assist you with keeping track of your daily goals/planning.</p>
          <a href="https://github.com/ShueMoua/Note-Taker.git">Note Taker</a>
        </div>
      </div>
      <div className="card">
        <div className="img-container">
          <img alt="Math Quiz" src={MathQuiz} />
        </div>
        <div className="content">
          <p>This quiz will test your mathematics skills.</p>
          <a href="https://github.com/ShueMoua/Math-Quiz.git">Math Quiz</a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Portfolio;
