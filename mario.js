var brickElem = document.getElementById("brick");
var heightElem = document.getElementById("height");

brickElem.addEventListener("change", drawPyramid);
heightElem.addEventListener("input", drawPyramid);


function changeType() {
    var brick = brickElem.value;
    return brick;
}

function changeHeight() {
    var heightStr = heightElem.value;
    var height = parseInt(heightStr);
    return height;
}

function drawPyramid() {
    brick = changeType();
    height = changeHeight();

    document.getElementById("pyramid").innerHTML = "";

    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            var spaceChar = "&nbsp"; // this is the HTML encoding for a space " "
            rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += brick;
        }

        // make a <p> element for this row, and insert it into the #pyramid container
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
