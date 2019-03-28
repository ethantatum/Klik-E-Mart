import React from 'react';
import Image from './components/Image';
import Container from './components/Container';
import images from './images.json';



class App extends React.Component {
    state = {
        images,
        clickedArr: [],
        highScore: 0,
        currentScore: 0
    };

    clickImage = id => {
        const shuffleArr = this.shuffleImages(images);
        this.setState({ images: shuffleArr });
        if(this.state.clickedArr.includes(id)) {
            this.setState({ currentScore: 0, clickedArr: [] });
        } else {
            this.setState({
                clickedArr: this.state.clickedArr.concat([id]),
                currentScore: this.state.currentScore + 1
            });
        }
        if(this.state.currentScore > this.state.highScore) {
            this.setState({ highScore: this.state.currentScore });
        }
    }

    shuffleImages = (imageArr) => {
        for(let i = imageArr.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [imageArr[i], imageArr[j]] = [imageArr[j], imageArr[i]];
        }
        return imageArr;
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Who Needs the Klik-E-Mart? You dooooooo!</h1>
                </header>
                <h3 className="App-intro">
                    <strong>Click on an image to earn points, but don't click on any image more than once!</strong>
                    <p className="Current-score">
                        <strong>Score: {this.state.currentScore} | High Score: {this.state.highScore}</strong>
                    </p>
                </h3>
                <Container  
                    imageGrid={this.state.images.map(image => (
                        <Image
                            clickImage={this.clickImage}
                            id={image.id}
                            key={image.id}
                            name={image.name}
                            image={image.image}
                        />
                    ))}
                />
                
            </div>
        );
    }
}

export default App;