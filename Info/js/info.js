var index;
var url = "http://api.icndb.com/jokes/random/1";
var listUrl = "http://localhost:8080/tasks";
var data;
var success;

//$(document).ready(function () {
$(function () {
    $("#gif").hide();

});

$("#btn").click(function () {
    let newJokesArray = [];

    $("#gif").show();

    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (response) {
            $("#gif").hide();
            //$("#btn").attr("disabled", "true");
            //console.log(response.value);            

            $.each(response.value, function (index, jokeObject) {
                //console.log(jokeObject.joke)
                $("#jokeInfo").append(jokeObject.joke);
            });

            index++
            $("#gif").hide();
            //console.log(index);
            $("aside").html('Counter:' + index);

        },
        error: function (errorResponse) {
            $("#gif").hide();
            Console.log("Error msg")
        },
    });


    /* $.getJSON(urlNorris,
         function (result) {
             $.each(result.value, function (i, field) {
                 $("#jokesDiv").append(field.joke + "<br>");
             });            
         });
 
    $(document).ajaxStart(function () {
         });
 
     $(document).ajaxStop(function () {
     });*/

});

$("#td").click(function () {
    console.log("xxx");
    $("#gif").show();

    $.ajax({
        type: "GET",
        url: listUrl,
        dataType: "json",
        success: function (response) {
            $("#gif").hide();
            //$("#btn").attr("disabled", "true");
            console.log(response);

            $.each(response, function (index, value) {
                console.log(value);
                $("#todo").append(value.id + ' ' + value.title);
                $('<input type="button" id="tdBtn" onClick="moreInfo(' + index + ')"/>').appendTo("#todo");
                $("#todo").append("<br>");
            });

            /*index++
            $("#gif").hide();
            //console.log(index);
            $("aside").html('Counter:' + index);*/

        },
        error: function (errorResponse) {
            $("#gif").hide();
            console.log("Error msg")
        },
    });
});

function moreInfo(id) {
    console.log(id);
    id++;
    var itemUrl = "http://localhost:8080/task/" + id;    

    console.log(itemUrl);
    $.ajax({
        type: "GET",
        url: itemUrl,
        dataType: "json",
        success: function (response) {

            console.log(response);
            $("#todo").append(response.id +""+response.title+""+response.description+""+response.complete+""+response.cancelled);
            $("#todo").append("<br>");

        },
        error: function (errorResponse) {
            console.log("Error msg")
        },
    });
}


window.onload = function () {
    var address = "Yliopistonkatu 36";
    var city = "Lappeenranta";
    document.getElementById("map").src = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
    index = 0;
}

function setAddress() {
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    document.getElementById("map").src = 'https://www.google.com/maps?q=' + address + city + '&output=embed';
}

$("#grid").click(function () {
    console.log("")
    $("#gridview").removeClass("list-container").addClass("grid-container");
});

$("#list").click(function () {
    console.log("listanäkymä");
    $("#gridview").removeClass("grid-container").addClass("list-container");
});