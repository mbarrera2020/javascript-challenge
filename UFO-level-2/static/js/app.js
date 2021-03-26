// java-script challenge -- Level 2: Multiple Search Categories 

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

  // Select the input elements: datetime, city, state, country & shape
  // and get the raw HTML node
  var inputElement1 = d3.select("#datetime");
  var inputElement2 = d3.select("#city");
  var inputElement3 = d3.select("#state");
  var inputElement4 = d3.select("#country");
  var inputElement5 = d3.select("#shape");
  
  // Get the value property of the input element
  var inputValue1 = inputElement1.property("value");
  var inputValue2 = inputElement2.property("value");
  var inputValue3 = inputElement3.property("value");
  var inputValue4 = inputElement4.property("value");
  var inputValue5 = inputElement5.property("value");

  // Display & check input value variable
  console.log(inputValue1);
  console.log(inputValue2);
  console.log(inputValue3);
  console.log(inputValue4);
  console.log(inputValue5);

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Check if user entered search filters; if empty, notify user to enter filters.
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // if (!inputValue1 && !inputValue2 && !inputValue3 && !inputValue4 && !inputValue5) {
  //   alert ("Please enter values in search filters.");
  //   return;
  // };

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Get the filtered data -- using the OR selection
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  var filteredData = ufoData.filter(ufoData => ufoData.datetime == inputValue1 ||
        ufoData.city == inputValue2 ||
        ufoData.state == inputValue3 ||
        ufoData.country == inputValue4 ||
        ufoData.shape == inputValue5 
  );
  
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // Get the filtered data -- using the AND selection
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  //  var filteredData = ufoData.filter(ufoData => ufoData.datetime == inputValue1 &&
  //       ufoData.city == inputValue2 &&
  //       ufoData.state == inputValue3 &&
  //       ufoData.country == inputValue4 &&
  //       ufoData.shape == inputValue5 
  //   );

  // Clear the display for the next selection
  tbody.html("");

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
    
};

//---------------------------------------------------------------------------
// Display the UFO table data
//---------------------------------------------------------------------------
displayUfoData();