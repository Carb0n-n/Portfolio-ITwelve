const total = 5;
const gamesTitle = document.getElementById('games-title')
const gamesInfo1 = document.getElementById('games-info-1')
let current = 0;


function nextSlide()
{
  current = current === total ? 0 : current + 1;
  document.getElementById(`slide${current}`).scrollIntoView({ behavior: 'smooth' });
  setTitle()
  setInfo()
}

function prevSlide() 
{
  current = current === 0 ? total : current - 1;
  document.getElementById(`slide${current}`).scrollIntoView({ behavior: 'smooth' });
  setTitle()
  setInfo()
}

function setTitle()
{
  gamesTitle.innerHTML = gameTitles[current]
}

function setInfo()
{
  gamesInfo1.innerHTML = gameInfo[current]
}

let gameTitles = [
  "Half-Life",
  "Counter Strike",
  "Team Fortress",
  "Portal",
  "Left 4 Dead",
  "Dota"
]

let gameInfo = [
  "<span class=\"red\">Half-Life</span> is a series of first-person shooter games that combine shooting combat, puzzles and storytelling, and are played entirely from the first-person perspective.<span class=\"highlight\">The original Half-Life</span> is also <span class=\"red\">Valve</span>'s first product and was released in   for Windows.",

  "<span class=\"red\">Counter Strike</span> is multiplayer tactical first-person shooter in which opposing teams attempt to complete various objectives The series began on Windows in 1999 with the release of the first game, Counter-Strike. ",
  
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sunt consectetur voluptatum deserunt voluptas ex est laboriosam modi repellat iste quod ducimus deleniti excepturi explicabo, accusamus doloribus ipsa earum aspernatur!",

  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sunt consectetur voluptatum deserunt voluptas ex est laboriosam modi repellat iste quod ducimus deleniti excepturi explicabo, accusamus doloribus ipsa earum aspernatur!",

  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sunt consectetur voluptatum deserunt voluptas ex est laboriosam modi repellat iste quod ducimus deleniti excepturi explicabo, accusamus doloribus ipsa earum aspernatur!",
  
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sunt consectetur voluptatum deserunt voluptas ex est laboriosam modi repellat iste quod ducimus deleniti excepturi explicabo, accusamus doloribus ipsa earum aspernatur!"
]

setTitle()
setInfo()
