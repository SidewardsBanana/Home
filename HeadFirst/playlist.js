window.onload = init;
function init() {
var button = document.getElementById("addButton")
button.onclick = handleButtonClick;
}

function handleButtonClick() {
    let textInput = document.getElementById("songTextInput");
    let songName = textInput.value;
    if (songName == ""){
        alert("Please Enter Song First");
    }  else {
    alert("Adding " + songName);
    }
}