import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';


class Home extends Component {


    render(){
        return(
            <Jumbotron className="bg-transparent text-warning">
                <h1 className="display-3 text-center">Welcome to Superhero Portal</h1>
                <h3 className="text-center">All SuperHeroes And Villains From All Universes</h3>
                <p className="lead text-center"><em>Powered by <a href="https://superheroapi.com/index.html">https://superheroapi.com/index.html</a></em></p>
            </Jumbotron>
        )
    }
}

export default Home