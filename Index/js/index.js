var pictures_array = ['images/AMK.jpg', 'images/LUT.jpg', 'images/SAIMAA.jpg'];
var text_array = ['AMK', 'LUT', 'SAIMAA'];
var index;
var intervalId;
/*var LocalStorageKey = 'picId';*/

/*window.onload = function () {
    //init();
    
}*/

$(function () {
    init();
})

function getNextImg() {
    console.log(index);
    index++;
    if (index > 2) index = 0
    $("#picture-carousel").attr('src', pictures_array[index]);
    $("#imgtxt").html(text_array[index]);
}

function getPreviousImg() {
    index--;
    if (index < 0) index = 2;
    $("#picture-carousel").attr('src', pictures_array[index]);
    $("#imgtxt").html(text_array[index]);
}

function start() {
    console.log("start");
    intervalId = setInterval(getNextImg, 2000);
}

function stop() {
    console.log("stop");
    if (intervalId) 
    {
        console.log("clear")
        clearInterval(intervalId);
        intervalId = null;
    }
    else 
    {
        start();
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

$(function () {
    init();
    console.log("ready!");
    let randNr = getRandomInt(1, 10);

    $("#valuea").val(randNr);
    console.log(randNr);

    $("#dialogbox").dialog({
        autoOpen: false
    });
});


$("#minus").click(function () {
    let value = $("#valuea").val();
    console.log(value);
    if (value = undefined || value > 10 || value < 1) {
        $("#dialogbox").dialog("open");
    }
});

$("#btnminus").click(function () {
    let value = $("#valueb").val();
    console.log(value);
    if (value = undefined || value > 10 || value < 1) {
        $("#dialogbox").dialog("open");
    }
});

$("#plus").click(function () {
    let value = $("#valuea").val();
    console.log(value);
    if (value = undefined || value > 10 || value < 1) {
        $("#dialogbox").dialog("open");
    }
});

$("#btnplus").click(function () {
    let value = $("#valueb").val();
    console.log(value);
    if (value = undefined || value > 10 || value < 1) {
        $("#dialogbox").dialog("open");
    }
});

function init() {
    //console.log(getRandomInt(1,10));
    document.getElementById("valuea").value = getRandomInt(1, 10);
    document.getElementById("valueb").value = getRandomInt(1, 10);
    index = 0;
    start();
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

    var x = parseInt(document.getElementById("valuea").value);
    var y = parseInt(document.getElementById("valueb").value);
    var select = document.getElementById('select').value;
    document.getElementById("result").value = operate(x, y, select);
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