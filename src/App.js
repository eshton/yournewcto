import React, { Component } from "react"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Agoston Fung - Experience startup CTO
        </h1>
        <p>
            15 years of software engineer experience. Tech-stack: Java, Javascript
        </p>
        <h2>Reach out to me</h2>
        <p>
          agoston [dot] fung [at] gmail [dot] com
          +36203387096
        </p>        
        <h2>Startups I managed</h2>
        <p>
          <a target="_blank" rel="noopener noreferrer" href="http://bonomi.io/"><img alt="bonomi" src="/bonomi.svg" width="250"/></a>
          <a target="_blank" rel="noopener noreferrer" href="http://mietwise.com/"><img alt="mietwise" src="/mietwise.png"/></a>
        </p>
        <h2>Companies I worked for</h2>
        <p>
          <img alt="skyscanner" src="/skyscanner.png"/><img alt="transferwise" src="/transferwise.png"/>
          <img alt="tesco" src="/tesco.png"/><img alt="morganstanley" src="/morganstanley.png"/>
        </p>
      </div>
    )
  }
}

export default App
