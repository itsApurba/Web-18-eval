// write js code here corresponding to favourites.html

// console.log("hi");

const favouritesData = JSON.parse(localStorage.getItem("favourites"));

// console.log(favouritesData);

const tbody = document.getElementsByTagName("tbody")[0];
favouritesData.forEach((el) => {
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
  btn.innerText = "Remove";
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
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

  //   console.log(el.matchNum);
});
