const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const bgColor = document.getElementById("bgColor");
const fontStyle = document.getElementById("fontStyle");
const fontSize = document.getElementById("fontSize");
const toggleMode = document.getElementById("toggleMode");

// Add Task
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark as completed
  li.addEventListener("click", () => li.classList.toggle("completed"));

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});

// Change background color
bgColor.addEventListener("change", () => {
  document.body.style.background = bgColor.value;
});

// Change font style
fontStyle.addEventListener("change", () => {
  document.body.style.fontFamily = fontStyle.value;
});

// Change font size
fontSize.addEventListener("input", () => {
  document.body.style.fontSize = fontSize.value + "px";
});

// Dark mode
toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleMode.textContent = 
    document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode";
});
