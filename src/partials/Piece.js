import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import Masonry from 'react-masonry-component';

import { Noun } from './Noun';

export const Caption = (props) =>{
//    props = { set : "null"};
    return <span className="caption">{props.children}</span>;
} 

const pieces = {
    'noof' : <article>
    </article>,
    
    'honeit' : <article></article>
    
}