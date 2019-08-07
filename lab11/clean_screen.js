"use strict";
$(document).ready(function () {
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
            let color = '#' + Math.round(0xffffff * Math.random()).toString(16);
            let newEle = $("<div>").addClass("circleBase circleShape").css({
                "top": posy + "px",
                "left": posx + "px",
                "background-color": color
            });
            newContent.append(newEle);
        }
        $("#content").append(newContent);
        // $(".circleBase").on({
        //     click: function () {
        //         this.remove();
        //     },
        //     hover: function () {
        //         $(this).addClass("selectedCircle");
        //     },
        //     mouseleave: function () {
        //         $(this).removeClass("selectedCircle");
        //     }
        // });
        growingCircleInterval = setInterval(function () {
            size += growthAmount;
            $(".circleBase").width(size + "px").height(size + "px");
        }, growRate);
    });
});