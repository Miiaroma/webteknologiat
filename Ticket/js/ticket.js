$(function () {
    init();
}
);

function init() {
$("#prices").hide();
/*$("#dialogbox").dialog({
    autoOpen: false
});*/
}

function ticketType() {
    this.firstName = $("#firstName").val();   
    this.lastName = $("#lastName").val();
    this.age = $("#age").val();
    this.soldier = document.getElementById("soldier").checked;
    this.student = document.getElementById("student").checked;
    this.mtkMember = document.getElementById("mtkMember").checked;
    
}

/*$("#dialog").click(function () {
    let value = this.firstName
    console.log(value);
    if (value = undefined) {
        $("#dialogbox").dialog("open");
    }
});*/

function calculatePrice() {

    var amount = discounts[0].amount;
    var discount = 0.00;

    var group1 = discounts[1].percent;
    var group2 = discounts[2].percent;
    var group3 = discounts[3].percent;
    var group4 = discounts[4].percent;
    var group5 = discounts[5].percent;
    var group6 = discounts[6].percent;
    var group7 = group5 + group6;

    if (this.age != null && this.age != "") {
        if (this.age < 7) {
            discount = group1;
        }
        if (this.age <= 15 && group2 > discount) {
            discount = group2;
        }
        if (this.age >= 65 && group3 > discount) {
            discount = group3;
        }
        if (this.soldier && this.age >= 18 && group4 > discount) {
            discount = group4;
        }
        if (this.student && group5 > discount) {
            discount = group5;
        }
        if (this.mtkMember && group6 > discount) {
            discount = group6;
        }
        if (this.student && this.mtkMember && group7 >= discount) {
            discount = group7;
        }
    }

    amount = amount - (amount * discount);
    document.getElementById("finalPrice").innerHTML = amount.toFixed(2) + " €";
}

function showPrices() {

    var priceList = "";
    priceList = priceList + "<li>" + discounts[0].category + " " + discounts[0].amount.toFixed(2) + " €</li>";

    for (var i = 1; i < discounts.length; i++) {

        var discountInfo = discounts[i].percent * 100 + " %:n alennus";
        var percent = discounts[i].percent;

        if (percent == 1.00) {
            discountInfo = "ilmainen";
        }
        priceList = priceList + "<li>" + discounts[i].category + " " + discountInfo + " </li>";
    }

    priceList = priceList + "</ul>";
    document.getElementById("priceList").innerHTML = priceList;

    $("#prices").show();

    /*var content = $("#prices");

    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }*/

}

var discounts = [
    {
        "category": "Normaalihinta",
        "amount": 16.00
    },
    {
        "category": "Lapset alle 7 v.",
        "percent": 1.00
    },
    {
        "category": "Lapset 7 - 15 v.",
        "percent": 0.50
    },
    {
        "category": "Eläkeläiset",
        "percent": 0.50
    },
    {
        "category": "Varusmiehet",
        "percent": 0.50
    },
    {
        "category": "Opiskelijat",
        "percent": 0.45
    },
    {
        "category": "Mtk:n jäsenet",
        "percent": 0.15
    },
];