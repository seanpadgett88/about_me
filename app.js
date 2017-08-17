'usestrict';

var answers = ['yes', 'y', 'no', 'n'];
var questions = ['Is my favorite animal a cat?', 'Did I work at Stewart Lumber before coming to Code Fellows?', 'Is my favorite actor Leonardo DiCaprio?', 'Do I love woodworking?', 'Am I from Washington??'];
var gameScore = 0;

function favAnimal(){
  var animal = prompt(questions[0]);
  if (animal.toLowerCase() === answers[0] || animal.toLowerCase() === answers[1]) {
    alert('That is incorrect. It\'s a dog!');
  } else if (animal.toLowerCase() === answers[2] || animal.toLowerCase() === answers[3]) {
    alert('You are correct!');
    gameScore++;
  } else {
    alert('Please answer yes or no :)');
  }
  console.log('Is my favorite animal a cat?');
  console.log(animal.toLowerCase());
}
favAnimal();

function lastJob(){
  var lumber = prompt(questions[1]);
  if (lumber.toLowerCase() === answers[0] || lumber.toLowerCase() === answers[1]) {
    alert('That is incorrect, I worked for their rival store, Dunn Lumber');
  } else if (lumber.toLowerCase() === answers[2] || lumber.toLowerCase() === answers[3]) {
    alert('You are correct!');
    gameScore++;
  } else {
    alert('Please answer yes or no :)');
  }
  console.log('Did I work at Stewart Lumber before coming to Code Fellows?');
  console.log(lumber.toLowerCase());
}
lastJob();

function favActor(){
  var actor = prompt(questions[2]);
  if (actor.toLowerCase() === answers[0] || actor.toLowerCase() === answers[1]) {
    alert('That is incorrect. He\'s a close second though!');
  } else if (actor.toLowerCase() === answers[2] || actor.toLowerCase() === answers[3]) {
    alert('You are correct!');
    gameScore++;
  } else {
    alert('Please answer yes or no :)');
  }
  console.log('Is my favorite actor Leonardo DiCaprio?');
  console.log(actor.toLowerCase());
}
favActor();

function favHobby(){
  var woodWork = prompt(questions[3]);
  if (woodWork.toLowerCase() === answers[0] || woodWork.toLowerCase() === answers[1]) {
    alert('You\'re damn right!');
    gameScore++;
  } else if (woodWork.toLowerCase() === answers[2] || woodWork.toLowerCase() === answers[3]) {
    alert('You must not know me');
  } else {
    alert('Please answer yes or no :)');
  }
  console.log('Do I love woodworking?');
  console.log(woodWork.toLowerCase());
}
favHobby();

function stateQuestion(){
  var home = prompt(questions[4]);
  if (home.toLowerCase() === answers[0] || home.toLowerCase() === answers[1]) {
    alert('Nope. I wish I was though, it\'s a great state!');
  } else if (home.toLowerCase() === answers[2] || home.toLowerCase() === answers[3]) {
    alert('You are correct! I\'m from California');
    gameScore++;
  } else {
    alert('Please answer yes or no :)');
  }
  console.log('Am I from Washington?');
  console.log(home.toLowerCase());
}
stateQuestion();

function numQuestion(){
  var guessesSoFar = 0;
  var seansFavNumber = 1;

  while (guessesSoFar < 4) {
    var userInputNumber = prompt('What is my favorite number? It\'s between 1 and 10. Good luck!');
    if (parseInt(userInputNumber) === seansFavNumber) {
      alert('Right-o!');
      gameScore++;
      break;
    } else if (parseInt(userInputNumber) > seansFavNumber && parseInt(userInputNumber) < 11) {
      alert('That\'s a little too high!');
    } else if (parseInt(userInputNumber) < seansFavNumber) {
      alert('That\'s a little too low!');
      guessesSoFar++;
    } else {
      alert('Invalid input');
    }
  }
}
numQuestion();

function otherStateQuestion(){
  var statesIveLivedIn = ['california', 'florida', 'virginia'];
  var userGuesses = 6;

  while (userGuesses > 0) {
    var state = prompt ('Can you guess 1 of the 3 states I\'ve lived in BESIDES Washington? You\'ve got 6 tries. Good luck!');
    if (statesIveLivedIn.includes(state.toLowerCase())) {
      alert ('That\'s one of them!');
      gameScore++;
      break;
    } else {
      alert ('Almost! You have ' + userGuesses + ' guesses before you\'re out!');
      userGuesses--;
      console.log('Can you guess 1 of the 3 states I\'ve lived in BESIDES Washington? You\'ve got 6 tries. Good luck!');
      console.log(state);
    }
  }
}
otherStateQuestion();

if (gameScore < 5) {
  alert ('Man, oh, man. You got ' + gameScore + ' right. INSERT MORE CREDITS');
} else if (gameScore >= 5) {
  alert ('Very well done! Welcome to my page.');
}
