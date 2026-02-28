console.log("index.js is loaded");

const toggleBtn = document.getElementById("dark-toggle");
const icon = toggleBtn.querySelector("i");

// Load saved mode when page loads
if(localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark");
    icon.textContent = "toggle_on";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")) {
        icon.textContent = "toggle_on";
        localStorage.setItem("darkMode", "enabled");
    } else {
        icon.textContent = "toggle_off";
        localStorage.setItem("darkMode", "disabled");
    }
});