import React, { Component } from 'react';
import axios from 'axios';

import './Home.css';


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imageOne: '',
            imageTwo: '',
            planetOneName: '',
            planetTwoName: ''
        }
    }

    componentDidMount() {
        axios.get('http://swapi.co/api/planets/')
        .then( (response)=> {
            console.log(response.data.results)
            let planetsArray = response.data.results;
            this.setState({
                imageOne: '',
                imageTwo: '',
                planetOneName: planetsArray[3].name,
                planetTwoName: planetsArray[7].name
            })
        } )
    }

  render() {
    return (
      <div className="home">

        <header className="header">
            Explore the Galaxy!
        </header>
        <div className="main">
            <div className="planetContainer">
                <div className="planet">

                </div>
                <h1>
                    this.state.planetOneName
                </h1>
            </div>
            <div className="planetContainer">
                <div className="planet">

                </div>
                <h1>
                    this.state.planetTwoName
                </h1>
            </div>
        </div> 

      </div>
    );
  }
}


export default Home;


