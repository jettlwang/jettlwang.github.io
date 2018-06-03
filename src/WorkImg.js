import React, { Component } from 'react';
import ModalImage from 'react-modal-image';

export class WorkImg extends Component{
    
    render(){
        let alt = this.props.alt;
        const imgs = (this.props.src).map(function(e){
            return <div className="workImg" key={e}><ModalImage small={"/src/assets/work/"+e} medium={"/src/assets/work/"+ e} alt={alt} srcSet={alt}/></div>;
        })

        return <div className="tdImg">{imgs}</div>;
    }
}