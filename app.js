// Import data
var tableData = data;

// Obtain table references
var tbody = d3.select("tbody");

// Build table
function buildTable(data) {
  // Clear previous table
  tbody.html("");

  // Loop through each object in the data and append rows and cells for each value in the data
  data.forEach((dataRow) => {
    var row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      var cell = row.append("td");
      cell.text(val);
    });
  });
}

// Object to keep filters
var filters = {};

// Filter table
function updateFilters() {
  // Save the element, value, and id of the filter that was changed
  var changedElement = d3.select(this).select("input");
  var elementValue = changedElement.property("value");
  var filterId = changedElement.attr("id");

  // If a filter was entered then add that filterId and value, otherwise clear that filter
  if (elementValue) {
    filters[filterId] = elementValue;
  }
  else {
    delete filters[filterId];
  }

  // Call function to apply all filters and rebuild the table
  filterTable();
}

function filterTable() {
  // Set the filtered data
  let filteredData = tableData;

  // Loop through all of the filters and keep values that matches
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // Rebuild the table
  buildTable(filteredData);
}

// Attach an event so it runs when the data is entered into the filters
d3.selectAll(".filter").on("change", updateFilters);

// Build the initial table when the page loads
buildTable(tableData);