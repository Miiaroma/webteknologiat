window.onload = function()
{
var address = "Yliopistonkatu 36";
var city= "Lappeenranta";
document.getElementById("map").src='https://www.google.com/maps?q=' + address + city + '&output=embed';
}

function setAddress()
 {
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    document.getElementById("map").src='https://www.google.com/maps?q=' + address + city + '&output=embed';
}

$("#grid").click(function () {    
    $("grid-container").removeClass("grid-container noClass").addClass("grid");
});

$("#list").click(function () {
    $("grid-container").removeClass("display grid").addClass("block");
});