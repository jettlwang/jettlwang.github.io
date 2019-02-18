import React, { Component } from 'react';

import Lightbox from 'react-image-lightbox';

export class Img extends Component {
    constructor(props) {
        super(props);
  }
    
    render(){
        return (
            <div>
            <a href={this.props.src}>
                <img  className={ "img img-"+this.props.size  } src={this.props.src} alt="article image"/>
            </a></div>
            
            );
    }
}
Img.defaultProps = {
            size : "lg",
        };