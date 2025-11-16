let team = [
  {
    name: "Chennai Super Kings",
    Captain: "MS Dhoni",
    win: 5,
    primary: "Yellow",
    secondary: "#0054A8",
    image: "chennai.webp",
  },
  {
    name: "Mumbai Indians",
    Captain: "Hardik Pandya",
    win: 5,
    primary: "Blue",
    secondary: "orange",
    image: "mumbai.webp",
  },
  {
    name: "Kolkata Knight Riders",
    Captain: "Ajinkya Rahane",
    win: 2,
    primary: "purple",
    secondary: "Gold",
    image: "kkr.webp",
  },
  {
    name: "Royal Challengers Bangalore",
    Captain: "Rajat Patidar",
    win: 1,
    primary: "Red",
    secondary: "Black",
    image: "rcb.webp",
  },
  {
    name: "Delhi Capitals",
    Captain: "Axar Patel",
    win: 1,
    primary: "Blue",
    secondary: "Red",
    image: "DC.webp",
  },
  {
    name: "Sunrisers Hyderabad",
    Captain: "Pat cummins",
    win: 1,
    primary: "Orange",
    secondary: "Black",
    image: "srh.webp",
  },
  {
    name: "Punjab Kings",
    Captain: "Shreyas Iyer",
    win: 0,
    primary: "Red",
    secondary: "#F1E5AC",
    image: "pbks.webp",
  },
  {
    name: "Rajasthan Royals",
    Captain: "Sanju Samson",
    win: 0,
    primary: "Pink",
    secondary: "skyblue",
    image: "rr.webp",
  },
  {
    name: "Gujarat Titans",
    Captain: "Shubman Gill",
    win: 1,
    primary: "#000035",
    secondary: "#F1E5AC",
    image: "gt.webp",
  },
  {
    name: "Lucknow Super Giants",
    Captain: "Rishab Pant",
    win: 0,
    primary: "Blue",
    secondary: "Silver",
    image: "lsg.webp",
  },
];

let tname = document.querySelector(".name");
let captain = document.querySelector(".cap");
let wins = document.querySelector(".times");
let btn = document.querySelector("button");
let ctn = document.querySelector(".ctn");
let main = document.querySelector("main");
let img = document.querySelector(".img");

btn.addEventListener("click", function () {
  let selected = team[Math.floor(Math.random() * team.length)];
  tname.textContent = selected.name;
  captain.textContent = selected.Captain;
  wins.textContent = selected.win;
  ctn.style.backgroundColor = selected.primary;

  main.style.background = `linear-gradient(to left, ${selected.primary} 10%, ${selected.secondary}) 90%`;
  btn.style.background = `linear-gradient(45deg, ${selected.primary}, ${selected.secondary})`;
  img.style.backgroundImage = `url('./images/${selected.image}')`;
});
