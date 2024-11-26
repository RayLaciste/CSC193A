
function alertFunc() {
    document.getElementById("user-input").style.fontSize = "24px";;
}

function fancyShmancy() {
    if (document.getElementById("fancy-shmancy").checked) {
        document.getElementById("user-input").style.fontWeight = "bold";
        document.getElementById("user-input").style.color = "blue";
        document.getElementById("user-input").style.textDecoration = "underline";
        document.getElementById("boring-betty").checked = false;
    }
}

function boringBetty() {
    if (document.getElementById("boring-betty").checked) {
        document.getElementById("user-input").style.color = "black";
        document.getElementById("user-input").style.textDecoration = "";
        document.getElementById("fancy-shmancy").checked = false;
    }
}

function moo() {
    var string = document.getElementById("user-input").value;
    var splitString = string.split(".");
    var modifiedString = splitString.join("-Moo.")
    
    document.getElementById("user-input").value = modifiedString;
}