import React, { Component } from 'react';
import Movies from './components/movies';
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)}
  class App extends Component{
    render(){
      return (
          <main className= "container">
            <Movies />
          </main>
      )
    }
  }
  export default App;
