import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
    apiKey: 'c0d0db8413f0430bbdc52256560eb761'
});

const particlesOptions = {
    particles: {
        number: {
            value: 20,
            density: {
                enable: true,
                value_area: 800
            }
        },
        opacity: {
            value: 0.4,
            random: false,
            anim:{
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        }
    }
}

class App extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
        }
    }

    onInputChange = (event) => {
        console.log(event.target.value);
    }

    onButtonSubmit = () =>{
        console.log('click');
        app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
            function(response) {
                // do something with response
            },
            function(err) {
                // there was an error
            }
        );
    }
    render() {
        return (
          <div className="App">
              <Particles className='particles'
                  params={particlesOptions}
              />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange={this.onInputChange}
                           onButtonSubmit={this.onButtonSubmit()}/>
          {/*

          <FaceRecognition /> */}

          </div>
        );
    }
}

export default App;
