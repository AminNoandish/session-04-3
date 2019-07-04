var user = prompt('pleas select ROCK or PAPER or SCISSORS:');
var computer = ['ROCK', 'PAPER', 'SCISSORS'];
var randomcomputer = Math.floor(Math.random() * 3);
var computerplayer = computer[randomcomputer];
var output = document.getElementById('output');
console.log(computerplayer);
switch (user) {
    case 'ROCK':
        if (computerplayer == 'ROCK') {
            console.log('Equals');
            output.innerHTML = 'You Equals! <br>';
            output.innerHTML += 'computer player :' + computerplayer + '<br>';
            output.innerHTML += 'user player :' + user + '<br>';
        };
        if (computerplayer == 'PAPER') {
            console.log('Looooose');
            output.innerHTML = 'You Looooose! <br>';
            output.innerHTML += 'computer player :' + computerplayer + '<br>';
            output.innerHTML += 'user player :' + user + '<br>';
        };
        if (computerplayer == 'SCISSORS') {
            console.log('Win');
            output.innerHTML = 'You Win! <br>';
            output.innerHTML += 'computer player :' + computerplayer + '<br>';
            output.innerHTML += 'user player :' + user + '<br>';
        };
        break;
    case 'PAPER':
        if (computerplayer == 'PAPER') {
            console.log('Equals');
            output.innerHTML = 'You Equals! <br>';
            output.innerHTML += 'computer player :' + computerplayer + '<br>';
            output.innerHTML += 'user player :' + user + '<br>';
        };
        if (computerplayer == 'SCISSORS') {
            console.log('Looooose');
            output.innerHTML = 'You Looooose! <br>';
            output.innerHTML += 'computer player :' + computerplayer + '<br>';
            output.innerHTML += 'user player :' + user + '<br>';
        };
        if (computerplayer == 'ROCK') {
            console.log('Win');
            output.innerHTML = 'You Win! <br>';
            output.innerHTML += 'computer player :' + computerplayer + '<br>';
            output.innerHTML += 'user player :' + user + '<br>';
        };
        break;
    case 'SCISSORS':
        if (computerplayer == 'SCISSORS') {
            console.log('Equals');
            output.innerHTML = 'You Equals! <br>';
            output.innerHTML += 'computer player :' + computerplayer + '<br>';
            output.innerHTML += 'user player :' + user + '<br>';
        };
        if (computerplayer == 'ROCK') {
            console.log('Looooose');
            output.innerHTML = 'You Looooose! <br>';
            output.innerHTML += 'computer player :' + computerplayer + '<br>';
            output.innerHTML += 'user player :' + user + '<br>';
        };
        if (computerplayer == 'PAPER') {
            console.log('Win');
            output.innerHTML = 'You Win! <br>';
            output.innerHTML += 'computer player :' + computerplayer + '<br>';
            output.innerHTML += 'user player :' + user + '<br>';
        };
        break;
}