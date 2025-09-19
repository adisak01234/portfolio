document.addEventListener("DOMContentLoaded", function() {
  const startDate = new Date(2017, 6, 1);
  const today = new Date();

  let years = today.getFullYear() - startDate.getFullYear();
  let months = today.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("experience").textContent = `${years} years ${months} months`;
});