function duel(){

    // Change dice images
    var randomNumber1 = Math.ceil(Math.random() * 6);
    var randomNumber2 = Math.ceil(Math.random() * 6);
    
    var dice = document.querySelectorAll('img');
    dice1 = dice[0];
    dice2 = dice[1];
    
    dice1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
    dice2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');
    
    // Judgement
    var statement = document.querySelector("h1");
    
    if (randomNumber1 > randomNumber2) {
        statement.textContent = "🚩Player 1 Wins!";
        statement.style.fontSize = '6em';
    } else if (randomNumber1 < randomNumber2) {
        statement.textContent = "Player 2 Wins!🚩";
        statement.style.fontSize = '6em';
    } else {
        statement.textContent = "Draw!!"
    }
}
