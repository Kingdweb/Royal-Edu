document.getElementById("showMoreBtn").addEventListener("click", function () {
  const moreTips = document.getElementById("moreTips");
  if (moreTips.style.display === "none") {
    moreTips.style.display = "block";
    this.innerText = "Show Less Tips";
  } else {
    moreTips.style.display = "none";
    this.innerText = "Show More Tips";
  }
});
