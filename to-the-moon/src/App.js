import React, { Component } from 'react';
import bridge from "./bridge.png"
import statueOfLiberty from './statueofliberty.png'
import cat from './cat.png'
import raccoon from './raccoon.png'
import meerkat from './meerkat.png'
import './App.css';

import Person from './models/person.js';
import Ship from './models/ship.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Click Anywhere',
      display: '',
      scenes: [
        {
          text: "This is a story about a boy",
          boy: true,
          boyEntry: true,
        }, {
          text: "He lived a pretty normal life",
          boyEntry: false,
        }, {
          text: "But there was always something on his mind",
          darkCloud: true,
        }, {
          text: "Something he didn't fully understand"
        }, {
          text: "Something weighing him down"
        }, {
          text: "But he didn't want anyone to find out"
        }, {
          text: 'to think less of him'
        }, {
          text: 'to see him as different or wrong'
        }, {
          text: "So he buried it deep inside",
          darkCloudExit: true,
        }, {
          text: 'and he went on with his life',
          darkCloud: false,
          darkCloudExit: false,
        }, {
          text: 'things were ok'
        }, {
          text: 'no one suspected anything was wrong'
        }, {
          text: 'he thought everything was good too'
        }, {
          text: 'and he took things one step at a time'
        }, {
          text: 'Then one day, he met a girl',
          girlEntry: true,
          girl: true,
        }, {
          text: 'And they quickly became good friends!',
          girlEntry: false,
          faceForward: true,
          holdHands: true,
        }, {
          text: 'They enjoyed life together',
          holdHands: false,
          jumping: true,
        }, {
          text: 'And loved each other\'s company'
        }, {
          text: 'They traveled the world',
          jumping: false,
          statueOfLiberty: true,
          bridge: true,
        }, {
          text: 'Found furry friends',
          cat: true,
          raccoon: true,
          meerkats: true,
        }, {
          text: 'And promised they would stick together to the end',
          holdHands: true,
        }, {
          text: 'But that thing he had been hiding all his life'
        }, {
          text: 'It was still there',
          darkCloud: true,
        }, {
          text: "He still didn't know how to deal with it"
        }, {
          text: "He was afraid of failure"
        }, {
          text: "Of failing her"
        }, {
          text: "Of failing himself"
        }, {
          text: "That fear clouded over him at times",
          rain: true,
        }, {
          text: "And he didn't know how to cope"
        }, {
          text: "So everything seemed to crumble"
        }, {
          text: "The sense of control he relied upon"
        }, {
          text: "Slipped entirely from his grasp"
        }, {
          text: "Too afraid to let go --- He let her slip away",
          holdHands: false,
          girlExit: true,
          darkCloudExit: true,
        }, {
          text: "She was the only one who saw through him",
          girl: false,
          girlExit: false,
          darkCloud: false,
        }, {
          text: "And he didn't let her in"
        }, {
          text: "But the one promise he will never regret"
        }, {
          text: "To go to the moon and back for her",
          shipEntry: true,
          boyExit: true,
        }, {
          text: '',
          shipExit: true,
          boy: false,
        }, {
          text: 'The End',
          shipEntry: false,
          shipExit: false,
        }
      ]
    }


  }

  nextScene = () => {
    if (this.state.scenes.length > 0) {
      this.setState(oldState => {
        let scenes = oldState.scenes
        let next = scenes.shift()

        let newState = Object.assign({}, oldState, next, { scenes: scenes, display: '' })
        return newState
      })
    }
  }

  render() {
    if (this.state.display !== this.state.text) {
      setTimeout(() => {
        this.setState(oldState => {
          let len = oldState.display.length
          return {
            display: oldState.text.substring(0, len+1)
          }
        })
      }, Math.random() * 80 + 50)
    }


    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <div className="scene-background" onClick={e => this.nextScene()}>

          <div className="sky">
            <div className="cloud-text passby repeat speed-8"> - </div>
            <div className="cloud-text">
              {this.state.display}
            </div>
            <div className="cloud-text passby repeat delay-2000"> . </div>
          </div>

          { this.state.darkCloud && 
            <div className={"cloud-text dark" + (this.state.darkCloudExit ? " exit" : "")}>
             -
             { this.state.rain && 
                <div className="raindrops">
                  <div className="raindrop" />
                  <div className="raindrop shifty-1 delay-1" />
                  <div className="raindrop shifty-1" />
                  <div className="raindrop delay-1" />
                  <div className="raindrop shifty-1 delay-1" />
                  <div className="raindrop shifty-1" />
                  <div className="raindrop delay-2" />
                  <div className="raindrop shifty-1 delay-1" />
                  <div className="raindrop shifty-1" />
                  <div className="raindrop delay-1" />
                  <div className="raindrop shifty-1 delay-2" />
                  <div className="raindrop shifty-1" />
                  <div className="raindrop delay-1" />
                  <div className="raindrop shifty-1 delay-1" />
                  <div className="raindrop shifty-1" />
                  <div className="raindrop delay-2" />
                </div>
             }
            </div>
          }
            
          { this.state.bridge &&
            <img src={bridge} className="bridge" alt=''/>
          }

          { this.state.boy && 
            <Person 
              entry={this.state.boyEntry}
              holdingHands={this.state.holdHands}
              jumping={this.state.jumping}
              exit={this.state.boyExit}
            />
          }
          { this.state.girl && 
            <Person 
              girl={true} 
              entry={this.state.girlEntry}
              exit={this.state.girlExit}
              facing={this.state.faceForward}
              holdingHands={this.state.holdHands}
              jumping={this.state.jumping}
            />
          }

          { this.state.cat &&
            <img src={cat} className="cat" alt=''/>
          }
          { this.state.raccoon && 
            <img src={raccoon} className="raccoon" alt=''/>
          }
          { this.state.meerkats &&
            <div>
              <img src={meerkat} className="meerkat" alt=''/>
              <img src={meerkat} className="meerkat second" alt=''/>
            </div>
          }


          { this.state.statueOfLiberty && 
            <img src={statueOfLiberty} className="statue-of-liberty" alt=''/>
          }

          { this.state.shipEntry && 
            <Ship 
              entry={this.state.shipEntry}
              exit={this.state.shipExit}
            />
          }

          <div className="grass">
          </div>

        </div>
      </div>
    );
  }
}

export default App;
