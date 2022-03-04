window.onload = init;

function init() {
    var button = document.getElementById("addButton");
    button.onclick = createSticky;

    for (var i = 0; i < localStorage.length; i++){
        var key = localStorage.key(i);
        if (key.substring(0, 6) == "sticky") {
            var value = localStorage.getItem(key);
            addStickyToDOM(value);
        }
    }
}

function addStickyToDOM(value) {
    var stickies = document.getElementById("stickies");
    var sticky = document.createElement("li");
    var span = document.createElement("span");
    span.setAttribute("class", "sticky");
    span.innerHTML = value;
    sticky.appendChild(span);
    stickies.appendChild(sticky);
}

function createSticky() {
    var value = document.getElementById("noteText").value;
    var key = "sticky_" + localStorage.length;
    localStorage.setItem(key, value);

    addStickyToDOM(value);
}

localStorage.setItem("sticky_0", "Take Shower");
localStorage.setItem("sticky_1", "Get Dressed");

var sticky = localStorage.getItem("sticky_0");

alert(sticky);