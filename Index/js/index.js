window.onload = function()
{
    function getRandomInt();
}

function getRandomInt()
{
    document.getElementById("number").value =
    Math.floor(Math.random() * 11);
}

function dereaseNumber(){
    var number = document.getElementById("number").value;
    var secondNumber = document.getElementById("secondNumber").value;
    document.getElementById("number").value= number-1;
    document.getElementById("secondNumber").value= secondNumber-1;
}

function increaseNumber(){
    var number = document.getElementById("number").value + 1;
    var secondNumber = document.getElementById("secondNumber").value + 1;
}