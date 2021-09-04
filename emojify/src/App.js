import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

var emojies = {
  '🐒' : "monkey",
  '🦍' : "gorilla",
  '🐕' : "dog",
  '🐺' : 'wolf',
  '🦊' : "fox",
  '🦝' : "raccoon",
  '🐈' : "cat"

}

var knownEmoji = Object.keys(emojies);

function App() {
  const [animal, setAnimal] = useState("");

  function emojiInputHandler(event){
    var userInput = event.target.value;
    var animal = emojies[userInput];

    if (animal === undefined){
      animal = "We don't know this animal";
    }
    setAnimal(animal);
  }

  function emojiClickHandler(emoji){
    var animal = emojies[emoji];
    setAnimal(animal);
  }

  return (
    <div className="App">
      <h1>inside outtt</h1>

      <input id="inputText" onChange={emojiInputHandler} />

      <h2>{animal}</h2>

      <h3>Animals we are aware of:</h3>

      {knownEmoji.map(function (emoji){
        return(
          <div id="displayEmoji" onClick = {()=>emojiClickHandler(emoji)}>{emoji}</div>
        )
      })
      }
    </div>
  );
}

export default App;
