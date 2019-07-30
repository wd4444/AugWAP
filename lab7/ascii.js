window.onload = function () {
    "use strict";

    let frames = [
        BLANK,
        EXERCISE,
        JUGGLER,
        BIKE,
        DIVE
    ];

    let fontSizeClasses = [
        "text-area-font-tiny",
        "text-area-font-small",
        "text-area-font-medium",
        "text-area-font-large",
        "text-area-font-extraLarge",
        "text-area-font-xxl"
    ]
    let animationInterval = null;
    let speed = 250;
    let currentFrameIndex = 0;
    let currentPictureIndex = 0;
    btnStart.onclick = function () {
        let frame = frames[currentFrameIndex];
        let pictures = frame.split("=====\n");
        animationInterval = setInterval(function () {
            document.getElementById("text-area").value = pictures[currentPictureIndex];
            currentPictureIndex++;
            if (currentPictureIndex >= pictures.length) {
                currentPictureIndex = 0;
            }
        }, speed);
        document.getElementById("btnStart").disabled = true;
        document.getElementById("btnStop").disabled = false;
    };

    btnStop.onclick = function () {
        clearInterval(animationInterval);
        document.getElementById("text-area").value = frames[currentFrameIndex];

        document.getElementById("btnStart").disabled = false;
        document.getElementById("btnStop").disabled = true;
    };

    ddlAnimation.onchange = function () {
        currentFrameIndex = this.selectedIndex;
        currentPictureIndex = 0;
        if (document.getElementById("btnStart").disabled) {
            restartInterval();
        } else {
            document.getElementById("text-area").value = frames[currentFrameIndex];
        }
    }

    chkTurbo.onchange = function () {
        if (chkTurbo.checked) {
            speed = 50;
        } else {
            speed = 250;
        }

        if (document.getElementById("btnStart").disabled) {
            restartInterval();
        }
    }

    ddlFontsize.onchange = function () {
        document.getElementById("text-area").classList.forEach((value) => {
            if(value.indexOf("text-area-font") != -1) {
                document.getElementById("text-area").classList.remove(value);
            }
        });
        document.getElementById("text-area").classList.add(fontSizeClasses[this.selectedIndex]);
    }

    function restartInterval() {
        clearInterval(animationInterval);
        btnStart.onclick();
    }
}