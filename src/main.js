import './styles.css';
import { NewGame } from './simon.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  var newGame = new NewGame();


  newGame.addToSequence();
  newGame.addToUserSequence("blue");
  console.log(newGame);
});
