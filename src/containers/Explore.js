import React, { Component } from 'react';
import { api } from "../services/api";
// for testing 
const API = 'http://localhost:3000/search_terms/random';
class Explore extends Component {


    state = {
        pics: []
    }


    componentDidMount() {
        fetch(API)
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result)
            this.setState({
                pics: result
            });

          },
  
          (error) => {
            console.log(error)
          }
        )

    }

    render() {
        return(
            <div>
                
            </div>
        )
    }
}

export default Explore;
