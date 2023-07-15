const mainContent = document.getElementById("main-content");
const input = document.getElementById("input");
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", function () {
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("col-lg-12", "text-dark", "bg-white");

  let ul = document.createElement("ul");
  ul.classList.add("list-unstyled");

  taskDiv.appendChild(ul);

  let li = document.createElement("li");
  li.classList.add(
    "fs-3",
    "border-3",
    "border-bottom",
    "p-3",
    "d-flex",
    "justify-content-between"
  );

  li.innerText = `${input.value}`;

  ul.appendChild(li);

  let btnDiv = document.createElement("div");

  li.appendChild(btnDiv);

  let completeButton = document.createElement("button");
  completeButton.classList.add("btn", "btn-warning", "btn-lg", "mx-3");
  completeButton.innerHTML = '<i class="bi bi-check-circle-fill"></i>';

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("btn", "btn-danger", "btn-lg");
  deleteButton.innerHTML = '<i class="bi bi-trash3-fill"></i>';

  btnDiv.appendChild(completeButton);
  btnDiv.appendChild(deleteButton);

  if (input.value === "" || input.value === " ") {
    alert("Please Enter Task");
  } else {
    mainContent.appendChild(taskDiv);
  }

  input.value = "";

  completeButton.addEventListener("click", function () {
    li.classList.toggle("text-decoration-line-through");
  });

  deleteButton.addEventListener("click", function () {
    ul.remove();
  });
});
