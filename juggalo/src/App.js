import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Container from "./components/Container";
import Title from "./components/Title";
import Score from "./components/Score";
import cards from "./juggalos.json";
import "./App.css";

class App extends Component {
  state = {
    cards: cards,
    guessed: cards,
    score: 0,
    high: 0,
    correct: "Try not to click the same Juggalo/ette twice!"
  };

  checkGuess = id => {
    if (this.state.guessed.find(card => card.id === id)) {
      this.rightGuess();
    }
    else {
      this.wrongGuess();
    }
    this.shuffleCards(cards);
  };

  rightGuess = id => {
    this.setState({ score: this.state.score + 1 });
  };

  wrongGuess = id => {
  
  };

  shuffleCards = cards => {
      let random = cards.length, temp, index;
      while (random > 0) {
        index = Math.floor(Math.random() * random);
        random--;
        temp = cards[random];
        cards[random] = cards[index];
        cards[index] = temp;
      }
      return cards;
  };

  render() {
    return (
      <Wrapper>
        <Container>
          <Title><img className ="hatchet" alt="hatchet-man" src="https://officialpsds.com/imageview/r1/6p/r16p8y_large.png?1521316512" />  Juggalo Memory</Title>
          <Score 
            score={this.state.score}
            high={this.state.high}
            correct={this.state.correct}
          />
        </Container>
        <Container>
          {this.state.cards.map(card => (
            <Card
              checkGuess={this.checkGuess}
              key={card.id}
              id={card.id}
              image={card.image}
            />
          ))}
        </Container>
      </Wrapper>
    );
  }
}

export default App;