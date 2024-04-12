// For Entering Names
var player1 = "Player 1";
var player2 = "Player 2";
var num1 = 0, num2 = 0;
enterNames = () =>// Arrow Function
{
    player1 = prompt("Enter player 1 name : ");
    $(".player1").text(player1);
    player2 = prompt("Enter player 2 name : ");
    $(".player2").text(player2);
}

rollDice = () => {
    // For getting random image 1 of dice 
    var number1 = Math.floor(Math.random() * 6 + 1);
    var img1 = "images/dice" + number1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", img1);

    // For getting random image 2 of dice
    var number2 = Math.floor(Math.random() * 6 + 1);
    var img2 = "images/dice" + number2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", img2);

    // Result
    if (number1 > number2) {
        num1 += 1;
        $("h1").html("🎊! " + player1 + " Wins !🎊");
    }
    else if (number1 < number2) {
        num2 += 1;
        $("h1").html("🎉! " + player2 + " Wins !🎉");
    }
    else
        $("h1").html("✨! Draw !✨");
}

finalScores = () => {
    if (num1 > num2)
        alert(player1 + " = " + num1 + "\n" + player2 + " = " + num2 + "\n\n" + "🎊 The Winner is " + player1 + " 🎊");
    else if (num1 < num2)
        alert(player1 + " = " + num1 + "\n" + player2 + " = " + num2 + "\n\n" + "🎉 The Winner is " + player2 + " 🎉");
    else
        alert(player1 + " = " + num1 + "\n" + player2 + " = " + num2 + "\n\n" + "😐 Match is Tied 😐");

}

restart = () =>
{
    window.location.reload(true);
}