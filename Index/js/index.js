window.onload = function () {
    init();
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function init() {
    //console.log(getRandomInt(1,10));
    document.getElementById("valuea").value = getRandomInt(1, 10);
    document.getElementById("valueb").value = getRandomInt(1, 10);
}

/*function decreaseNumber() {
    var x = document.getElementById("valuea").value;
    x--;
    var y = x;
    document.getElementById("valuea").value = x;
}*/

function decreaseNumber(elementId) {
    
    var x = document.getElementById(elementId).value;
    x--;
    var y = x;    
    document.getElementById(elementId).value = x;     
}

/*function decreaseNumberB() {
    var x = document.getElementById("valueb").value;
    x--;
    var y = x;
    document.getElementById("valueb").value = x;
}*/

function increaseNumber(elementName) {
    var x = document.getElementById(elementName).value;
    x++;
    var y = x;
    document.getElementById(elementName).value = x;
}

/*function increaseNumberB() {
    var x = document.getElementById("valueb").value;
    x++;
    var y = x;
    document.getElementById("valueb").value = x;
}*/
