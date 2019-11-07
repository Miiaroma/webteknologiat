var pictures_array = ['images/AMK.jpg', 'images/LUT.jpg', 'images/SAIMAA.jpg'];
var text_array = ['AMK', 'LUT', 'SAIMAA'];
var index;
var intervalId;
var localStorageKey = 'image';
var alarmHour;
var alarmMin;

function clock() {
    var now = new Date();
    var ctx = document.getElementById('canvas').getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 150, 150);
    ctx.translate(75, 75);
    ctx.scale(0.4, 0.4);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';

    // Hour marks
    ctx.save();
    for (var i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.rotate(Math.PI / 6);
        ctx.moveTo(100, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
    }
    ctx.restore();

    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (i = 0; i < 60; i++) {
        if (i % 5 != 0) {
            ctx.beginPath();
            ctx.moveTo(117, 0);
            ctx.lineTo(120, 0);
            ctx.stroke();
        }
        ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hr = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    ctx.fillStyle = 'black';

    // write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();

    // Write seconds
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = '#D40000';
    ctx.fillStyle = '#D40000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.restore();
    time();
    window.requestAnimationFrame(clock);
}

window.onload = function () {
    init();
}

/*$(function(){
    init();
}    
);*/

function init() {
    //console.log(getRandomInt(1,10));
    document.getElementById("valuea").value = getRandomInt(1, 10);
    document.getElementById("valueb").value = getRandomInt(1, 10);
    intervalId = null;
    if (localStorage.hasOwnProperty(localStorageKey)) {
        index = localStorage.getItem(localStorageKey);
    }
    else {
        index = 0;
    }
    console.log(index);
    intervalId = setInterval(getNextImg, 2000);
    /*start(); 
    /*fadeTo();*/
    let randNr = getRandomInt(1, 10);
    $("#valuea").val(randNr);
    $("#dialogbox").dialog({
        autoOpen: false
    });
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
   window.requestAnimationFrame(clock);  
}

/*function fadeTo() {
    $("#picture-carousel").fadeTo('src', 0.6);
}*/

function getNextImg() {
    //console.log(index);

    if (index > 2) index = 0
    console.log("näytetään kuvaa " + index);
    $("#picture-carousel").attr('src', pictures_array[index]);
    $("#imgtxt").html(text_array[index]);
    $("#picture-carousel").fadeTo('src', 0.6);
    index++;
    localStorage.setItem(localStorageKey, index);
}

function getPreviousImg() {
    index--;
    if (index < 0) index = 2;
    $("#picture-carousel").attr('src', pictures_array[index]);
    $("#imgtxt").html(text_array[index]);
    $("#picture-carousel").fadeTo('src', 0.6);
    localStorage.setItem(localStorageKey, index);
}

function start() {
    intervalId = setInterval(getNextImg, 2000);
}

function stop() {
    clearInterval(intervalId);
    /*if (intervalId != null) {
        console.log("clear")
        
        intervalId = null;
    }
    else {
        /*start();*/
    /*intervalId = setInterval(getNextImg, 2000);
    console.log("start");
}*/
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

/*$(function () {
    init();
    let randNr = getRandomInt(1, 10);
    $("#valuea").val(randNr);
    $("#dialogbox").dialog({
        autoOpen: false
    });
});*/


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


function time() {
    var date = new Date();
    var time = date.toLocaleTimeString("fi-FI");
    document.getElementById("currentTime").innerHTML = time;


    /*$("#inner").append("timestring")*/    
}

function setAlarm(){
    var alarm = document.getElementById("alarmTime").value;
    alarmHour = alarm.substring(0,2);
    alarmMin = alarm.substring(3,5);
}