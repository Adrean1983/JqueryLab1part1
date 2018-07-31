"use strict";
$(document).ready(() => {
    let table;
    $(".available").on("click", (e) => {
        table = $(e.target);
        $("form").show();

    });

    $("button").click(function() {
        $("form").hide();
        table.removeClass("available").addClass("reserved");
    });

    $(".exit").click(function(){
        $("form").hide();
    });


});










