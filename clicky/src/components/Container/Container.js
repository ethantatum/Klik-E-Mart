import React from 'react';
import './Container.css';

const Container = props => <div className="container rounded bg-primary my-3 p-2 flex-container">{props.children}</div>;

export default Container;