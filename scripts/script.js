"use strict";
$(document).ready(() => {
    // This code with Adam in clas --------------------------------------------------------------------------------------
    $(".guest-details").hide();
    let table;
    //For loop to add 9 table divs with a number of 1++
    for (let i = 0; i < 9; i++) {
        $(".container").append(`<div>${(i+1)}</div>`);
    }
    //This gives class of 'table avilable' to the divs just added inside the container class.
    $(".container div").attr("class", "table available");
    //This targets the available class and on click will display the form which is display:none.
    $(".available").on("click", (e) => {
        $("form #tablenumber").text(`Table Number: ${$(e.target).text()}`);
        table = $(e.target);
        $("form").show(500);
    });
    //This adds the reserved class to the class 'table' when the saved button is clicked.
    $("button").click(function() {
        $("form").hide(500);
        table.removeClass("available")
        .addClass("reserved")
        .data("guest-name", $("input").eq(0).val())
        .data("guest-phone", $("input").eq(1).val())
        .data("guest-p-size", $("input").eq(2).val());
        $("input").val("");
    });
    //this hides the form once the close button is pressed inside the form.
    $(".exit").click(function(){
        $("form").hide(500);
    });
    //This changes the color and the fade in of an available table once it is hovered over.
    $("body").on("mouseenter mouseleave", ".container .available", (e) => {
        $(e.target).toggleClass("hover");
    });

    $("body").on("mouseenter", ".container .reserved", (e) => {
        $(".guest-details").appendTo(e.target);
        $(".guest-details").show();
        $(".guest-details p").eq(0).text($(e.target).data("guest-name"));
        $(".guest-details p").eq(1).text($(e.target).data("guest-phone"));
        $(".guest-details p").eq(2).text($(e.target).data("guest-p-size"));
    });
    $("body").on("mouseleave", ".container .reserved", (e) => {

        $(".guest-details").hide();
        $(".guest-details p").eq(0).text("");
        $(".guest-details p").eq(1).text("");
        $(".guest-details p").eq(2).text("");
    });

});









