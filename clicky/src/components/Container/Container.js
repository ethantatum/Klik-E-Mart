import React from 'react';
import './Container.css';

const Container = props => <div className="container bg-primary my-5 p-2 flex-container">{props.children}</div>;

export default Container;