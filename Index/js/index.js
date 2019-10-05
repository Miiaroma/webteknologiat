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

function calculator() {
    
    var x = document.getElementById("valuea").value;
    var y = document.getElementById("valueb").value;
    var select = document.getElementById('select').value;
    document.getElementById("result").value = operate(x, y,select);
}

function operate(x, y, select) {
    if (select == 'addition') {
        return x + y;
    }

    else if (select == 'subtraction') {
        return x - y;
    }

    else if (select == 'multiplication') {
        return x * y;
    }
    else if (select == 'division') {
        return x / y;
    }
}

/*function validate(value) 
{
    if (value == null || value == "") {
        alert("Pakollinen kenttä");
        return 0;
    } else if (isNaN(value)) {
        alert("Syötteen pitää olla numero");
        return 0;
    } else return value;
}*/