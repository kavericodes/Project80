
function getParagraph1() {
    var inputs = [];
    for (var i = 1; i <= 6; i++) {
        inputs.push(document.getElementById("para1_input_box_" + i).value);
    }
    inputs.join(". ");
    document.getElementById("showParagraph1").innerHTML = inputs.join(". ");
}

function getParagraph2 () {
    var input = [];
    for (var j = 1; j <= 6; j++) {
        input.push(document.getElementById("para2_input_box_" + j).value);
    }
    input.join(". ");
    document.getElementById("showParagraph2").innerHTML = input.join(". ");
}

