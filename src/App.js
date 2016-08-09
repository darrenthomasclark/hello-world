import React, { Component } from 'react'
import Body from './Body'
import Footer from './Footer'
import './App.css'

class App extends Component {

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>all things darren.</h2>
          <h3>Portfolio Music Blog</h3>
        </div>
        <Body />
        <Footer />
      </div>
    )
  }
}
export default App
