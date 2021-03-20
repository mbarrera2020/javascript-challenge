// Assign the data from `data.js` to a descriptive variable
var ufoData = data;

// js code here..... reference: student activity JS - day 3 - activity 9
var entry = document.getElementById("filter-btn");
entry.addEventListener("click", displayDetails);

// use this for part 2
// var row = 1001

function displayDetails() {
    var datetime = document.getElementById("datetime").nodeValue;
    var city = document.getElementById("city").nodeValue;
    var state = document.getElementById("state").nodeValue;
    var country = document.getElementById("country").nodeValue;
    var shape = document.getElementById("shape").nodeValue;
    var duration = document.getElementById("durationMinutes").nodeValue;
    var comments = document.getElementById("comments").nodeValue;

    if (!date) {
        alert ("Please enter a date.");
        return;
    }

    var display = document.getElementById("display")

    // use this for part 2
    // var newRow = display.insertRow

    // var cell1 = newRow.insertCell(0);
    // var cell1 = newRow.insertCell(1);
    // var cell1 = newRow.insertCell(2);

    cell1.innerHTML = datetime;
    cell2.innerHTML = city;
    cell3.innerHTML = state;
    cell4.innerHTML = country;
    cell5.innerHTML = shape;
    cell6.innerHTML = duration;
    cell7.innerHTML = comments;
    
    row++;   // increment the row

}
