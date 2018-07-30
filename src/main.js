import './styles.css';
import { NewGame } from './simon.js';

$(document).ready(function() {
  var newGame = new NewGame();

  
  newGame.addToSequence();
  newGame.addToUserSequence("blue");
  console.log(newGame);
});
