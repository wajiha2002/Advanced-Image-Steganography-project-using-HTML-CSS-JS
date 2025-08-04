const themeBtn = document.getElementById("modeSwitcher");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("themeMode", "dark");
  } else {
    localStorage.setItem("themeMode", "light");
  }
});


window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("themeMode") === "dark") {
    document.body.classList.add("dark-theme");
  }
});

const gitHubBtn = document.getElementById("gitHubBtn");
gitHubBtn.addEventListener("click", () => {
  window.open("https://github.com/wajiha2002?tab=repositories", "_blank");
});

const messageBox = document.querySelector(".message-box");
const charCount = document.querySelector(".char-count");

if (messageBox && charCount) {
  messageBox.addEventListener("input", () => {
    charCount.textContent = `${messageBox.value.length} characters`;
  });
}

function switchPanel(clickedBtn) {
  const panels = {
    encodeTab: "encodingPanel",
    decodeTab: "decodingPanel",
    infoTab: "infoPanel"
  };
  
  for (let key in panels) {
    document.getElementById(panels[key]).style.display =
      clickedBtn.id === key ? "block" : "none";
  }


  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  clickedBtn.classList.add("active");
}

window.onload = () => {
  document.getElementById("encodingPanel").style.display = "block";
  document.getElementById("decodingPanel").style.display = "none";
  document.getElementById("infoPanel").style.display = "none";
};
