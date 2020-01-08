import React, { Component } from 'react';

export default class CreateExercise extends Component {
    constructor(props) {
        super(props):

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []

        } 
    }

componentDidMount(){
    this.setState({
        users: ['test users'],
        username: 'test user'
    })
}
    

onChangeusername(e){
    this.setState {
        username: e.target.value
     });
     
onChangedescription(e){
    this.setState {
        description: e.target.value
     });

onChangeduration(e){
    this.setState {
        duration: e.target.value
     });

onChangedate(date){
    this.setState {
        date: date
     });

onsubmit(e){
    e.preventDefault();

    const exercise = {
        username: this.state.username,
        description: this.state.description,
        duration: this.state.duration,
        date: this.state.date

        console.log(excercise)

        window.location = '/';
    }
}

    render (){
        return (
           <div>
               <p>Create Exercise</p>
           </div> 
         )
    }
}
