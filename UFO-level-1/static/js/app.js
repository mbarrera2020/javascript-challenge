// java-script challenge -- Level 1: Automatic Table and Date Search 

// Assign the data from `data.js` to a descriptive variable
var ufoData = data;

// -------------------------------------------------
// VARIABLES
// -------------------------------------------------
// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Select the table body
var tbody = d3.select("tbody");

// -------------------------------------------------
// Create event handlers 
// -------------------------------------------------
button.on("click", runEnter);
form.on("submit", runEnter);

// -------------------------------------------------
// Complete the event handler function for the form
// -------------------------------------------------
function runEnter() 
{
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  // Display & check input value variable
  console.log(inputValue);

  // Get the filtered data
  var filteredData = ufoData.filter(ufoData => ufoData.datetime == inputValue);

  // Clear the display for the next selection
  tbody.html("");

  // Use the form input to filter the data by date
  // function dateTime(inputValue){
  //   return inputValue.dateTime
  // }

  // Display & check the length to see if there is data
  console.log(filteredData.length)

filteredData.forEach((rowData) => {
  let row =tbody.append("tr");
  Object.values(rowData).forEach((value) =>   {
    let cell = row.append("td");
    cell.text(value);
  })
})
}
  //---------------------------------------------------------------------------
  // Function: Display the UFO table data
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
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Check if user entered a 'Date'; if empty notify user to enter a date.
    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    if (!datetime) {
        alert ("Please enter a date.");
        return;
    };
  
};

//---------------------------------------------------------------------------
// Display the UFO table data
//---------------------------------------------------------------------------
displayUfoData();