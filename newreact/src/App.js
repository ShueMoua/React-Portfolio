import React from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";


function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Route exact path="/" component={AboutMe} />
                <Route exact path="/Portfolio" component={Portfolio} />
            </div>

        </Router>
    )
}


export default App;
