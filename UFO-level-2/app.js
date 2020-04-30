// from data.js
let tableData = data;

// YOUR CODE HERE!
// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// Select body of the table
let tbody = d3.select("tbody");

function runEnter() {
    d3.event.preventDefault();
    let inputElement = d3.select('#datetime');
    let input = inputElement.property('value');
    // console.log(input);
    // console.log(tableData);
    var filterDate = tableData.filter(tableData => tableData.datetime === input);
    console.log(filterDate);
    filterDate.forEach((date) => {
        var row = tbody.append("tr");
        Object.entries(date).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
};

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);