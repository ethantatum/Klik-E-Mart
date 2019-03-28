import React from 'react';
import images from './images.json';



class App extends React.Component {
    state = {
        images,
        clickedArr: [],
        highScore: 0,
        currentScore: 0
    };

    render() {
        return (
            <img src={this.state.pictures[0]} className='img-fluid' alt='apu1' />
        )
    }
}

export default App;