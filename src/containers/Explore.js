import React, { Component } from 'react';
import '../css/explore.css';

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
            console.log(result[0])
            console.log(result[0].attribute.table.urls.thumb)
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
        <div refs='gallery-container' className='container-fluid gallery-container'>
        <div className='row'>
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
