function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function addData() {
    // Get input values from the user.
    let name =
        document.getElementById("nameInput").value;
    let Employee =
        document.getElementById("EmployeeInput").value;
    let mobile =
        document.getElementById("numberInput").value;
    let address =
        document.getElementById("addressInput").value;
    
    // This lines is to add a row after the user gives the answers of above inputs and takes that value to this row. 
    let table = document.getElementById("outputTable");
    let newRow = table.insertRow(table.rows.length);
    
    // Insert data into cells of the new row
    newRow.insertCell(0).innerHTML = name;
    newRow.insertCell(1).innerHTML = Employee;
    newRow.insertCell(2).innerHTML = mobile;
    newRow.insertCell(3).innerHTML = address;
    newRow.insertCell(4).innerHTML =
        '<button onclick="editData(this)">Edit</button>'+
        '<button onclick="deleteData(this)">Delete</button>';
    
    // Clear input fields it clear the input fields after the button add is clicked.
    clearInputs();
}

function editData(button) {
    
    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;
    
    // Get the cells within the row
    let nameCell = row.cells[0];
    let EmployeeCell = row.cells[1];
    let mobileCell = row.cells[2];
    let addressCell = row.cells[3];
    
    // Prompt the user to enter updated values
    let nameInput =
        prompt("Enter the updated name:",
            nameCell.innerHTML);
    let EmployeeInput =
        prompt("Enter the updated Employee:",
            EmployeeCell.innerHTML);
    let numberInput =
        prompt("Enter the updated mobile details:",
            mobileCell.innerHTML
        );
    let addressInput =
        prompt("Enter the updated address:",
            addressCell.innerHTML
        );
    
    // Update the cell contents with the new values
    nameCell.innerHTML = nameInput;
    EmployeeCell.innerHTML = EmployeeInput;
    mobileCell.innerHTML = numberInput;
    addressCell.innerHTML = addressInput;
}
function deleteData(button) {
    
    // Get the parent row of the clicked button
    let row = button.parentNode.parentNode;

    // Remove the row from the table
    row.parentNode.removeChild(row);
}
function clearInputs() {
    
    // Clear input fields
    document.getElementById("nameInput").value = "";
    document.getElementById("EmployeeInput").value = "";
    document.getElementById("numberInput").value = "";
    document.getElementById("addressInput").value = "";
}
