import React from 'react';
import Image from './components/Image';
import Container from './components/Container';
import images from './images.json';
import './App.css';



class App extends React.Component {
    state = {
        images,
        clickedArr: [],
        highScore: 0,
        currentScore: 0,
        message: ""
    };

    componentDidMount() {
        console.log(this.state.images)
    }

    clickImage = id => {
        const shuffleArr = this.shuffleImages(images);
        this.setState({ images: shuffleArr });
        if (this.state.clickedArr.includes(id)) {
            this.setState({
                currentScore: 0,
                clickedArr: [],
                message: "D'oh! You already clicked that one...try again!"
            });

        } else {
            // this happens normally
            if (this.state.currentScore < 11) {
                this.setState({
                    clickedArr: this.state.clickedArr.concat([id]),
                    currentScore: this.state.currentScore + 1,
                    message: "Woohoo!"
                })
            } else {
                this.setState({
                    message: "Excellent...you won the game!",
                    currentScore: 0,
                    clickedArr: []
                });

            }
            if (this.state.currentScore >= this.state.highScore) {
                this.setState({ highScore: this.state.currentScore + 1 });
            }
        }
    }
    shuffleImages = (imageArr) => {
        for (let i = imageArr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [imageArr[i], imageArr[j]] = [imageArr[j], imageArr[i]];
        }
        return imageArr;
    }

    render() {
        return (
            <div className="App">
                <header className="container mt-2">
                    <img className="title-image img-fluid" src='./images/sign2.png' alt="klik-e-mart" />
                </header>
                <h3 className="container text-center mt-4">
                    <strong>Click on an image to earn points, but don't click on any image more than once!</strong>
                    <p className="Current-score">
                        <strong>Score: {this.state.currentScore} | High Score: {this.state.highScore}</strong>
                    </p>
                    <p className="Message">
                        <strong>{this.state.message}</strong>
                    </p>
                </h3>
                <Container>
                    {this.state.images.map(image => (
                        <Image
                            clickImage={this.clickImage}
                            id={image.id}
                            key={image.id}
                            name={image.name}
                            image={image.image}
                        />
                    )
                    )}
                </Container>

            </div>
        );
    };
}


export default App;