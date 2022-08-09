var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var dice = document.querySelectorAll('img');
dice1 = dice[0];
dice2 = dice[1];

dice1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
dice2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');
