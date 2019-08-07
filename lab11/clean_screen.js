"use strict";
$(document).ready(function () {
    let hexValues = Array('1','2','3','4','5','6','7','8','9','A','B','C','D','E','F');
    let growingCircleInterval;
    $("#content").on({
        click: function () {
            this.remove();
        },
        hover: function () {
            $(this).addClass("selectedCircle");
        },
        mouseleave: function () {
            $(this).removeClass("selectedCircle");
        }
    }, 'div.circleBase');
    $("#btnStart").click(function () {
        clearInterval(growingCircleInterval);
        $("#content").empty();
        let size = parseInt($("#txtWidth").val());
        let growthAmount = parseInt($("#txtGrowthAmount").val());
        let growRate = parseInt($("#txtGrowRate").val());
        let numberCircles = parseInt($("#txtNumberCircles").val());
        let newContent = $("<div>");
        var divsize = ((Math.random() * 100) + 50).toFixed();
        for (let i = 0; i < numberCircles; i++) {
            let posx = (Math.random() * ($(document).width() - divsize) / 2).toFixed();
            let posy = (Math.random() * ($(document).height() - divsize) / 2).toFixed();
            let color = getRandomColor();
            let newEle = $("<div>").addClass("circleBase circleShape").css({
                "top": posy + "px",
                "left": posx + "px",
                "background-color": color
            });
            newContent.append(newEle);
        }
        $("#content").append(newContent);
        growingCircleInterval = setInterval(function () {
            size += growthAmount;
            $(".circleBase").width(size + "px").height(size + "px");
        }, growRate);
    });
    function getRandomColor() {
        let color = "#";
        let item;
        for (let i = 0; i < 6; i++) {
            item = hexValues[Math.floor(Math.random()*hexValues.length)];
            color = color + item;
        }
        return color;
    }
});