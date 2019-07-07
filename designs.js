
var submit = document.getElementById("submitButton");
var table = document.getElementById("pixelCanvas");
var height = document.getElementById("inputHeight").Value;
var width = document.getElementById("inputWidth").Value;

// When size is submitted by the user, call makeGrid()

function makeGrid(event) {
    // Your code goes here!
    event.preventDefault();
    table.innerHTML= '';
    // Select size input
    for (var i=0; i<height; i++){
        var tr = document.createElement("tr");
        for (var j=0; j<width; j++){
            var td = document.createElement("td");
            td.addEventListener('click', function(event2){
                // Select color input
                var color = document.getElementById("colorPicker").Value;
                event2.target.style.backgroundColor=color;
            });
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
submit.addEventListener('click', makeGrid);