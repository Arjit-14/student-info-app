const showDetailsButton = document.getElementById("show-details-btn");
const studentInfo = document.getElementById("student-info");

showDetailsButton.addEventListener("click", () => {
	const detailsAreVisible = studentInfo.style.display !== "none";
	studentInfo.style.display = detailsAreVisible ? "none" : "block";
	showDetailsButton.textContent = detailsAreVisible ? "Show Details" : "Hide Details";
});
