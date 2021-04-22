
function getParagraph1() {
    var input = [];
    for (var i = 1; i <= 6; i++) {
        input.push(document.getElementById("para1_input_box_" + i).value);
    }
    document.getElementById("showParagraph1").innerHTML = input.join(". ");
}

function getParagraph2 () {
    var input = [];
    for (var j = 1; j <= 6; j++) {
        input.push(document.getElementById("para2_input_box_" + j).value);
    }
    document.getElementById("showParagraph2").innerHTML = input.join(". ");
}







