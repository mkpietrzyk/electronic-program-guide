import React, {Component} from 'react';
import logo from '../../logo.svg';
import {testFetch} from './testFetch'
import './App.css';
let data

class App extends Component {

  componentWillMount() {
    testFetch()
    data = testFetch()
  }


  render() {
    if(data === undefined) {
      return (
      <h1>loading</h1>
      )
    }
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <div>
            <ul>
            {data.channels.map(
                (channel) => {

                return <li> {channel.id}</li>
            }
            )}
            </ul>
          </div>
        </div>
    );
  }
}

export default App;
