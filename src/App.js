import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';


class Image extends React.Component {
    state = {       
     pictures: ['../public/images/apu1.jpg', '../public/images/apu2.jpg', '../public/images/moe1.JPG', '../public/images/moe2.jpg']
    };

    render() {
        return (
            <img src={this.state.pictures[0]} className='img-fluid' alt='apu1' />
        )
    }
}

// ReactDOM.render(<Image />, document.getElementById('container'));