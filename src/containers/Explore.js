import React, { Component } from 'react';
import { api } from "../services/api";
import ImageCard from '../fragments/ImageCard';

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
      return (
        <div className="ui four column grid">
          <div className="row">
            {this.state.pics.map((pic) => {
          return <ImageCard key={pic.id} pic={pic} /*handleClick={this.props.handleClick}*/ />
          })
          }
            Collection of all random pics 
          </div>
        </div>
      );
    }
}

export default Explore;
