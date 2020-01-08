import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar"
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUsers from "./components/CreateUsers";


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/users" component={CreateUsers} />
      </div>
    </Router>
  );
}

export default App;
