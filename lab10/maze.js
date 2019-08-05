"use strict";
$(document).ready(function () {
    let isStarted = false;
    let isLost = false;
    $("#start").click(function () {
        showMessage('Game is started!');
        isStarted = true;
        isLost = false;
        $(".boundary").removeClass("youlose");
    });
    $("#end").mouseover(function () {
        if (isStarted && isLost === false) {
            showMessage("Congratulation! You win!");
            isStarted = false;
        }
    });
    $(".boundary").mouseover(function () {
        checkGame();
    });

    $("#maze").mouseleave(function () {
        checkGame();
    });

    function checkGame() {
        if (isStarted) {
            isLost = true;
            showMessage("You lose!");
            $(".boundary").addClass("youlose");
        }
    }

    function showMessage(text) {
        $("#status").text(text);
    }
});