// Assign the data from `data.js` to a descriptive variable
var ufoData = data;

// js code here..... reference: student activity JS - day 3 - activity 9

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// -------------------------------------------------
// Complete the event handler function for the form
// -------------------------------------------------
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufoData);

  // Get the filtered data
  var filteredData = ufoData.filter(ufo => ufo.datetime === inputValue);

  // Display -- console.log(filteredData);
  console.log(filteredData)


  // Display -- console.log(filteredData);

  // Use the form input to filter the data by date
  // function dateTime(inputValue){
  //   return inputValue.dateTime
  // }

  
};
 