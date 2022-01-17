import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';
import Alert from './components/Alert';

export default class App extends Component {
  pageSize = 15;

  state = {
    progress: 0,
    alert: null
  }

  setAlert = (alert) => {
    this.setState({alert: alert})
    setTimeout(() => {
      this.setState({alert: null})
    }, 3000);
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  
  render() {
    return (
      <>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          height={4}
        />  
        <Navbar />
        <Alert alert={this.state.alert} />
        <News setProgress={this.setProgress} pageSize={this.pageSize} setAlert={this.setAlert} />
        <Footer />
      </>
    )
  }
}
