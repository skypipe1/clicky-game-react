import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./components/Wrapper"
import Card from "./components/Card"
import cards from "./cards.json"
import Header from "./components/Header"
import './App.css';


class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore){
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score})`);
    this.setState({score: 0});
    return true;
  };

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id){
        if (cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function () {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  }

  render(){
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>React Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card 
          clickCount = {this.clickCount}
          id = {card.id}
          key = {card.id}
          image= {card.image}
          />
        ))}
      </Wrapper>
    )
  }

};

export default App;


// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
