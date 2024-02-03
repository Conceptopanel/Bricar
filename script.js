// Click events for buttons
const portfolio = document.getElementById("portfolio");
const portfolioBtn = document.getElementById("portfolio-btn");
const skills = document.getElementById("skills");
const skillsBtn = document.getElementById("skills-btn");

portfolioBtn.addEventListener("click", (event) => {
  skills.style.display = "none";
  portfolio.style.display = "";
  skillsBtn.classList.remove("");
  portfolioBtn.classList.add("");
});

skillsBtn.addEventListener("click", (event) => {
  skills.style.display = "";
  portfolio.style.display = "none";
  portfolioBtn.classList.remove("");
  skillsBtn.classList.add("");
});
