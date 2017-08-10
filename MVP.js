'usestrict;'

var animal = prompt('Is my favorite animal a cat?');
if (animal.toLowerCase() === 'yes' || animal.toLowerCase() === 'y') {
  alert('That is incorrect. It\'s a dog!');
} else if (animal.toLowerCase() === 'no' || animal.toLowerCase() === 'n') {
  alert('You are correct!');
}  else {
    alert('Please answer yes or no :)')
}
console.log('Is my favorite animal a cat?');
console.log(animal.toLowerCase());

var lumber = prompt('Did I work at Stewart Lumber before coming to Code Fellows?');
if (lumber.toLowerCase() === 'yes' || lumber.toLowerCase() === 'y') {
  alert('That is incorrect, I worked for their rival store, Dunn Lumber');
} else if (lumber.toLowerCase() === 'no' || lumber.toLowerCase() === 'n') {
  alert('You are correct!');
}  else {
    alert('Please answer yes or no :)')
}
console.log('Did I work at Stewart Lumber before coming to Code Fellows?');
console.log(lumber.toLowerCase());

var actor = prompt('Is my favorite actor Leonardo DiCaprio?');
if (actor.toLowerCase() === 'yes' || actor.toLowerCase() === 'y') {
  alert('That is incorrect. He\'s a close second though!');
} else if (actor.toLowerCase() === 'no' || actor.toLowerCase() === 'n') {
  alert('You are correct!');
}  else {
    alert('Please answer yes or no :)')
}
console.log('Is my favorite actor Leonardo DiCaprio?');
console.log(actor.toLowerCase());

var woodWork = prompt('Do I love woodworking?');
if (woodWork.toLowerCase() === 'yes' || woodWork.toLowerCase() === 'y') {
  alert('You\'re damn right!');
} else if (woodWork.toLowerCase() === 'no' || woodWork.toLowerCase() === 'n') {
  alert('You must not know me');
}  else {
    alert('Please answer yes or no :)')
}
console.log('Do I love woodworking?');
console.log(woodWork.toLowerCase());

var home = prompt('Am I from Washington?');
if (home.toLowerCase() === 'yes' || home.toLowerCase() === 'y') {
  alert('Nope. I wish I was though, it\'s a great state!');
} else if (home.toLowerCase() === 'no' || home.toLowerCase() === 'n') {
  alert('You are correct! I\'m from California');
}  else {
    alert('Please answer yes or no :)')
}
console.log('Am I from Washington?');
console.log(home.toLowerCase());

var guessesSoFar = 0;
var seansFavNumber = 1;

while (guessesSoFar < 4) {
  var userInputNumber = prompt('What is my favorite number? It\'s between 1 and 10. Good luck!');
 if (parseInt(userInputNumber) === seansFavNumber) {
   alert('Right-o!');
   break;
 } else if (parseInt(userInputNumber) > seansFavNumber && parseInt(userInputNumber) < 11) {
   alert('That\'s a little too high!');
 } else if (parseInt(userInputNumber) < seansFavNumber) {
   alert('That\'s a little too low!');
   guessesSoFar++
 } else {
      alert('Invalid input');
    }
}
