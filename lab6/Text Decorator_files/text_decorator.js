window.onload = function () {
    "use strict";

    btnBigger.onclick = function () {
        var biggerTimer = setInterval(function () {
            // alert("Bigger Decorations!");
            let currentFontSize = document.getElementById("txtContent").style.fontSize;
            if (currentFontSize == "") {
                currentFontSize = 12;
            }
            currentFontSize = parseInt(currentFontSize) + 2;
            document.getElementById("txtContent").style.fontSize = currentFontSize + "pt";
            if (currentFontSize === 60) {
                clearInterval(biggerTimer);
            }
        }, 500);
    }


    chkBling.onchange = function () {
        if (document.getElementById("chkBling").checked) {
            alert("Bling!");
            document.getElementById("txtContent").style.fontWeight = "bold";
            document.getElementById("txtContent").style.color = "green";
            document.getElementById("txtContent").style.textDecoration = "underline";
            document.body.style.backgroundImage = "url('./Text Decorator_files/hundred-dollar-bill.jpg')";
        } else {
            alert("No Bling!");
            document.getElementById("txtContent").style.fontWeight = "normal";
            document.getElementById("txtContent").style.color = "black";
            document.getElementById("txtContent").style.textDecoration = "none";
            document.body.style.backgroundImage = "";
        }
    }

    btnPigLatin.onclick = function () {
        let str = document.getElementById("txtContent").value;
        str = str.toLowerCase();
        let words = str.split(" ");
        for (let i = 0; i < words.length; i++) {
            let vowelIndex = -1;
            vowelIndex = words[i].split("").findIndex(function (elem) {
                    return ['a', 'e', 'o', 'u', 'i'].includes(elem);
                }
            )
            console.log(vowelIndex);
            if (vowelIndex > 0) {
                words[i] = words[i].slice(vowelIndex) + words[i].slice(0, vowelIndex) + "ay";
            } else if(vowelIndex === 0){
                words[i] = words[i] + "way";
            }
        }
        document.getElementById("txtContent").value = words.join(" ");
    }

    btnMalkovitch.onclick = function () {
        let words = document.getElementById("txtContent").value.split(" ");
        let newWords = words.map(function (elem, i, array) {
            return elem.length >= 5 ? "Malkovich" : elem;
        })
        document.getElementById("txtContent").value = newWords.join(" ");
        console.log(document.getElementById("txtContent").value);
    }

}