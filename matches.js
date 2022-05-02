// write js code here corresponding to matches.html
// console.log("hi");

const scheduleData = JSON.parse(localStorage.getItem("schedule"));

// console.log(scheduleData);

const tbody = document.getElementsByTagName("tbody")[0];

const favouritesData = JSON.parse(localStorage.getItem("favourites")) || [];

scheduleData.forEach((el, index, arr) => {
  const row = document.createElement("tr");

  const matchNum = document.createElement("td");
  matchNum.innerText = el.matchNum;
  const teamA = document.createElement("td");
  teamA.innerText = el.teamA;
  const teamB = document.createElement("td");
  teamB.innerText = el.teamB;
  const date = document.createElement("td");
  date.innerText = el.date;
  const venue = document.createElement("td");
  venue.innerText = el.venue;
  const btn = document.createElement("button");
  btn.innerText = "Favourite";
  btn.style.backgroundColor = "yellow";
  btn.style.border = "none";
  btn.style.padding = "5px";
  btn.style.borderRadius = "7px";
  btn.style.cursor = "pointer";

  btn.addEventListener("click", () => {
    favouritesData.push(arr[index]);
    localStorage.setItem("favourites", JSON.stringify(favouritesData));
  });

  row.append(matchNum, teamA, teamB, date, venue, btn);
  tbody.append(row);
});
