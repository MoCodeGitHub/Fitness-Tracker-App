import React, { Component } from 'react';
import axios from 'axios';
import link from 'react-router-dom';

export default class ExercisesList extends Component {
    constructor(props){
    super(props); 

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = {exercises: []};

}

componentDidMount() {
    axios.get('http://localhost:5000/exercises/')
    .then(response => {
        this.setState({exercises : response.data})
    })
    .catch((error) => {
        console.log(error);
    })
}

    render (){
        return (
           <div>
               <p>Exercises List</p>
           </div> 
         )
    }
}