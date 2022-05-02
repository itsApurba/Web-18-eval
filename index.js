// write js code here corresponding to index.html
// You should add submit event on the form

const scheduleData = JSON.parse(localStorage.getItem("schedule")) || [];

masaiForm.addEventListener("submit", () => {
  event.preventDefault();

  const matchNum = document.getElementById("matchNum");
  matchNum.setAttribute("required", true);
  const teamA = document.getElementById("teamA");

  const teamB = document.getElementById("teamB");

  const date = document.getElementById("date");

  const venue = document.getElementById("venue");

  if (
    matchNum.value == "" ||
    teamA.value == "none" ||
    teamB.value == "none" ||
    date.value == "" ||
    venue.value == "none"
  ) {
    alert("Plese enter valid details");
  } else {
    const obj = {
      matchNum: matchNum.value,
      teamA: teamA.value,
      teamB: teamB.value,
      date: date.value,
      venue: venue.value,
    };

    scheduleData.push(obj);

    localStorage.setItem("schedule", JSON.stringify(scheduleData));
  }
});
