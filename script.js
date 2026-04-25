let grades = JSON.parse(localStorage.getItem("grades")) || [];

function saveData() {
  localStorage.setItem("grades", JSON.stringify(grades));
}

function addGrade() {
  const name = document.getElementById("name").value;
  const grade = document.getElementById("grade").value;

  const date = new Date().toLocaleString();

  grades.push({ name, grade: Number(grade), date });
  saveData();
  displayGrades();
}

function displayGrades() {
  const list = document.getElementById("gradeList");
  if (!list) return;

  list.innerHTML = "";

  grades.forEach(g => {
    const li = document.createElement("li");
    li.textContent = `${g.name} - ${g.grade} (modifié: ${g.date})`;
    list.appendChild(li);
  });
}

function sortGrades(order) {
  if (order === "asc") {
    grades.sort((a, b) => a.grade - b.grade);
  } else {
    grades.sort((a, b) => b.grade - a.grade);
  }
  displayGrades();
}

function searchStudent() {
  const name = document.getElementById("searchName").value;
  const list = document.getElementById("studentGrades");

  list.innerHTML = "";

  const results = grades.filter(g => g.name === name);

  results.forEach(g => {
    const li = document.createElement("li");
    li.textContent = `${g.grade} (modifié: ${g.date})`;
    list.appendChild(li);
  });
}

window.onload = displayGrades;