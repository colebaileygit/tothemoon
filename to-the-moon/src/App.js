import React, { Component } from 'react';

import './App.css';

import Person from './models/person.js';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: '',
      display: '',
      scenes: [
        {
        //   text: "This is a story about a boy"
        // }, {
        //   text: "He lived a pretty normal life"
        // }, {
        //   text: "But there was always something on his mind"
        // }, {
        //   text: "Something he didn't fully understand"
        // }, {
        //   text: "But he didn't want anyone to find out"
        // }, {
        //   text: 'to think less of him'
        // }, {
        //   text: 'to see him as different or wrong'
        // }, {
        //   text: "So he buried it deep inside"
        // }, {
        //   text: 'and he went on with his life'
        // }, {
        //   text: 'things were ok'
        // }, {
        //   text: 'no one suspected anything was wrong'
        // }, {
        //   text: 'he thought everything was good too'
        // }, {
        //   text: 'and he took things one step at a time'
        // }, {
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
          text: '',
          jumping: false,
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
            <div className="cloud-text passby repeat speed-8"> . </div>
            <div className="cloud-text">
              {this.state.display}
            </div>
            <div className="cloud-text passby repeat delay-2000"> . </div>
          </div>

          <Person 
            holdingHands={this.state.holdHands}
            jumping={this.state.jumping}
          />
          { this.state.girl && 
            <Person 
              girl={true} 
              entry={this.state.girlEntry}
              facing={this.state.faceForward}
              holdingHands={this.state.holdHands}
              jumping={this.state.jumping}
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
