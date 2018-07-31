"use strict";
$(document).ready(() => {
    let table;
    //For loop to add 9 table divs with a number of 1++
    for (let i = 0; i < 9; i++) {
        $(".container").append(`<div>${(i+1)}</div>`);
    }
    //This gives class of 'table avilable' to the divs just added inside the container class.
    $(".container div").attr("class", "table available");
    //This targets the available class and on click will display the form which is display:none.
    $(".available").on("click", (e) => {
        table = $(e.target);
        $("form").show();
    });
    //This adds the reserved class to the class 'table' when the saved button is clicked.
    $("button").click(function() {
        $("form").hide();
        table.removeClass("available").addClass("reserved");
    });
    //this hides the form once the close button is pressed inside the form.
    $(".exit").click(function(){
        $("form").hide();
    });
    //This changes the color and the fade in of an available table once it is hovered over.
    $("body").on("mouseenter mouseleave", ".container .available", (e) => {
        $(e.target).toggleClass("hover");
    });
});










