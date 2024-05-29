let form = document.getElementById("formSubmission");

let table = document.getElementById("data");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  submit();
});

// Submit Button Function
const submit = () => {

    // Name
  let name = document.getElementById("name").value;
//   age
  let age = document.getElementById("age").value;
//   Gender
  let gender = document.querySelector('input[name="gender"]:checked').value;

  var gender_value;
  if (gender == "Male") {
    gender_value = document.getElementById("male").value;
  } else if (gender == "Female") {
    gender_value = document.getElementById("female").value;
  }

//   course
var course = document.getElementById("courses");
var value = course.value;
var course_value = course.options[course.selectedIndex].text;

// Email
let email = document.getElementById("email").value;

// Delete Button
var delButton = document.createElement("button");
delButton.textContent = "DELETE";
delButton.classList.add("delete-it");
delButton.setAttribute("onclick", "del(event)");



    var tr = document.createElement("tr");
    tr.setAttribute("id", "newItems");

  let newArray = [name, age, gender_value, course_value, email];
  newArray.forEach((item) => {
    var td = document.createElement("td");
    var text = document.createTextNode(item);
   
    td.appendChild(text);
    tr.appendChild(td);
  });
  var td = document.createElement("td");
  td.appendChild(delButton);
  tr.appendChild(td);
  table.appendChild(tr);
  form.reset();
};


// Delete Button Function
function del(event) {
    event.target.parentElement.parentElement.remove();
}