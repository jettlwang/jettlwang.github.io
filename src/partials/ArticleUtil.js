import React, { Component } from 'react';

import Lightbox from 'react-image-lightbox';

export const TopLink = (props) => {
    return <p>
        <b><a onClick={()=> document.documentElement.scrollTop = 0}>Thanks for reading! Go back to top.</a></b>
    </p>;
}

export class Img extends Component {
    constructor(props) {
        super(props);
        this.toggleLightbox = this.toggleLightbox.bind(this);
        
        props = {
            size : "lg",
            src : "",
        };

        this.state = { isOpen : false, };
  }
    
    toggleLightbox(){
        this.setState({ isOpen : !this.state.isOpen });
    }

    render(){
        return (<span>
                <div className={"img img-"+this.props.size }><img onClick={this.toggleLightbox} src={this.props.src} alt="article image"/></div>

                {this.state.isOpen && (
                  <Lightbox
                    wrapperClassName="lightbox"
                    mainSrc={this.props.src}
                    onCloseRequest={this.toggleLightbox}
                  />
                )}
            </span>);
    }
}