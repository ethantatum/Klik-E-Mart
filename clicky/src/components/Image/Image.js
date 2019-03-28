import React from 'react';
import './Image.css';

const Image = props => (
    <div className="pictureBox m-2">
        <img 
            className="img-fluid img-thumbnail" 
            alt={props.name} 
            src={props.image}
            onClick={() => props.clickImage(props.id)} 
        />
    </div>
)

export default Image;