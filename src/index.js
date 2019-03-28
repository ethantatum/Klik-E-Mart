import React from 'react';
import ReactDOM from 'react-dom';
import App from '/App';
import 'bootstrap/dist/css/bootstrap.css';

class Image extends React.Component {
    state = {       
     pictures: ['../public/images/apu1.jpg', '../public/images/apu2.jpg', '../public/images/moe1.JPG', '../public/images/moe2.jpg']
    };

    render() {
        return (
            <React.Fragment>
            {this.state.pictures.map( () => <img src={this.state.pictures} className='img-fluid' alt='simpsons-image' />)  }
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Image />, document.getElementById('container'));