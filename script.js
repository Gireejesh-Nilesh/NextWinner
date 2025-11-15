let team = [
  {
    name: "Chennai Super Kings",
    Captain: "MS Dhoni",
    win: 5,
    primary: "Yellow",
    secondary: "#0054A8",
  },
  { 
    name: "Mumbai Indians",
    Captain: "Hardik Pandya", 
    win: 5,
    primary: "Blue",
    secondary: "Gold", 
  },
  { 
    name: "Kolkata Knight Riders", 
    Captain: "Ajinkya Rahane", 
    win: 2,
    primary: "purple",
    secondary: "Gold", 
  },
  { 
    name: "Royal Challengers Bangalore", 
    Captain: "Rajat Patidar", 
    win: 1,
    primary: "Red",
    secondary: "Black", 
  },
  { 
    name: "Delhi Capitals", 
    Captain: "Axar Patel", 
    win: 1,
    primary: "Blue",
    secondary: "Red", 
  },
  { 
    name: "Sunrisers Hyderabad", 
    Captain: "Pat cummins", 
    win: 1,
    primary: "Orange",
    secondary: "Black", 
  },
  { 
    name: "Punjab Kings", 
    Captain: "Shreyas Iyer", 
    win: 0,
    primary: "Red",
    secondary: "#F1E5AC",
  },
  { 
    name: "Rajasthan Royals", 
    Captain: "Sanju Samson", 
    win: 0,
    primary: "Pink",
    secondary: "skyblue", 
  },
  { 
    name: "Gujarat Titans", 
    Captain: "Shubman Gill", 
    win: 1,
    primary: "#000035",
    secondary: "#F1E5AC",
  },
  { 
    name: "Lucknow Super Giants", 
    Captain: "Rishab Pant", 
    win: 0,
    primary: "Blue",
    secondary: "Silver", 
  },
];


let tname = document.querySelector('.name');
let captain = document.querySelector('.cap');
let wins = document.querySelector('.times');
let btn = document.querySelector('button');
let ctn = document.querySelector('.ctn');
let main = document.querySelector('main');

btn.addEventListener('click', function() {
  let selected = team[Math.floor(Math.random() * team.length)];
  tname.textContent = selected.name;
  captain.textContent = selected.Captain;
  wins.textContent = selected.win;
  ctn.style.backgroundColor = selected.primary;
  
  main.style.background = `linear-gradient(45deg, ${selected.primary}, ${selected.secondary})`;
});
