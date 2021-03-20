// Assign the data from `data.js` to a descriptive variable
var ufoData = data;

// js code here..... reference: student activity JS - day 3 - activity 9

// -------------------------------------------------
// VARIABLES
// -------------------------------------------------
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Select the table body
var tbody = d3.select("#tbody");

// -------------------------------------------------
// Create event handlers 
// -------------------------------------------------
button.on("click", displayUFOData);
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

  // Get the filtered data
  var filteredData = ufoData.filter(ufoData => ufoData.datetime === inputValue);

  // Display -- variables 
  // console.log(inputValue);
  // console.log(ufoData);
  // console.log(filteredData)

  // Clear display for next selection
  tbody.html("");

  // Use the form input to filter the data by date
  // function dateTime(inputValue){
  //   return inputValue.dateTime
  // }

filteredData.forEach((rowData) => 
{
  let row =tbody.append("tr");
  Object.values(rowData).forEach((vlaue) => 
  {
    let cell = row.append("td");
    cell.text(value);
  })
})


  //---------------------------------------------------------------------------
  // Function: Display the table data
  //---------------------------------------------------------------------------
  function displayUfoData() 
  {
    ufoData.forEach((rowData) => {
      let row = tbody.append("tr");
        Object.values(rowData).forEach((value) => {
          let cell = row.append("td");
          cell.text(value);
        })
    })
    // Check if user entered a 'Date; if empty notify user to enter a date.
    if (!datetime) {
        alert ("Please enter a date.");
        return;
  };

  
};

displayUfoData();

