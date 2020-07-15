// from data.js
let tableData = data;

// YOUR CODE HERE!
// Select the button
let button = d3.select("#filter-btn");

// Select the form
let form = d3.select("#form");

// Select body of the table
let tbody = d3.select("tbody");


// let tr = d3.select('tr');
// let td = d3.select('td');

function runEnter() {
    d3.event.preventDefault();
    tbody.html('');
    let inputElement = d3.select('#datetime');
    let input = inputElement.property('value');
    // console.log(input);
    // console.log(tableData);
    let filterDate = tableData.filter(tableData => tableData.datetime === input);
    console.log(filterDate);
    filterDate.forEach((date) => {
        let row = tbody.append("tr");
        Object.entries(date).forEach(([key, value]) => {
            let cell = row.append("td");
            cell.text(value);
        });
    });
};

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);