const form = document.getElementById("userForm");
const tableBody = document.querySelector("#userTable tbody");
document.getElementById("emailerror")
form.addEventListener("submit", submitForm);

function submitForm(event){
     event.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const age = document.getElementById("age").value;
//create a new row
const newRow = document.createElement("tr");
newRow.innerHTML = `<td>${name}</td> <td>${email}</td> <td>${age}</td>`
//attaching the row to the table
tableBody.appendChild(newRow)
form.reset();     //clears the same to go back to normal
}
//form.addEventListener("submit", submitForm());














































































