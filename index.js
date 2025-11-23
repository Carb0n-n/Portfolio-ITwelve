const total = 5;
const gamesTitle = document.getElementById('games-title')
const gamesInfo1 = document.getElementById('games-info-1')
const gamesInfo2 = document.getElementById('games-info-2')
let current = 0;


function nextSlide()
{
  current = current === total ? 0 : current + 1;
  document.getElementById(`slide${current}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  setTitle()
  setInfo()
}

function prevSlide() 
{
  current = current === 0 ? total : current - 1;
  document.getElementById(`slide${current}`).scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  setTitle()
  setInfo()
}

function setTitle()
{
  gamesTitle.innerHTML = gameTitles[current]
}

function setInfo()
{
  gamesInfo1.innerHTML = gameTextInfo1[current]
  gamesInfo2.innerHTML = gameTextInfo2[current]
}

let gameTitles = [
  "Half-Life",
  "Counter Strike",
  "Team Fortress",
  "Portal",
  "Left 4 Dead",
  "Dota"
]

let gameTextInfo1 = [
  "<span class=\"red\">Half-Life</span> is a groundbreaking first-person shooter series known for its mix of combat, puzzles, and narrative, all experienced entirely from a first-person perspective. <span class=\"highlight\">The original Half-Life</span> was <span class=\"red\">Valve</span>’s first game and launched for Windows in 1998.",

  "<span class=\"red\">Counter-Strike</span> is a competitive tactical first-person shooter where two opposing teams fight to complete objectives such as bomb planting and hostage rescue. The series began in 1999 as a mod for <span class=\"highlight\">Half-Life</span> and grew into one of <span class=\"red\">Valve</span>’s most influential esports franchises.",

  "<span class=\"red\">Team Fortress 2</span> is a class-based multiplayer shooter known for its fast-paced action, cartoon-like art style, and iconic character personalities. Featuring nine distinct classes and deep team strategy, <span class=\"highlight\">TF2</span> became one of <span class=\"red\">Valve</span>’s most enduring and beloved titles.",

  "<span class=\"red\">Portal</span> is a puzzle-platform series built around the <span class=\"highlight\">Aperture Science Handheld Portal Device</span>, enabling players to create linked blue and orange portals. Praised for its clever puzzle design and dark humor, <span class=\"red\">Portal 2</span> expanded the story with co-op gameplay and deeper narrative elements.",

  "<span class=\"red\">Left 4 Dead</span> is a cooperative zombie survival shooter where four players must fight through hordes of infected using teamwork and unique abilities. Powered by the dynamic <span class=\"highlight\">AI Director</span>, encounters change every playthrough, making it one of <span class=\"red\">Valve</span>’s most iconic co-op experiences.",

  "<span class=\"red\">Dota 2</span> is a strategic multiplayer online battle arena game where two teams of five players battle using over a hundred unique heroes. Known for its complexity and massive esports footprint, <span class=\"highlight\">The International</span>—hosted by <span class=\"red\">Valve</span>—remains one of the biggest tournaments in competitive gaming."
];

let gameTextInfo2 = [
  "<span class=\"red\">Half-Life</span> revolutionized story-driven FPS design with its <span class=\"highlight\">seamless narrative</span> and atmospheric world-building.",

  "<span class=\"red\">Counter-Strike</span> became one of the most influential tactical shooters ever, defining <span class=\"highlight\">competitive multiplayer</span> for decades.",

  "<span class=\"red\">Team Fortress 2</span> set the standard for class-based shooters and became famous for its unique <span class=\"highlight\">art style</span> and humor.",

  "<span class=\"red\">Portal</span> popularized physics-based puzzle gameplay and became iconic for its humor and <span class=\"highlight\">innovative mechanics</span>.",

  "<span class=\"red\">Left 4 Dead</span> brought cooperative zombie survival to the mainstream with its dynamic <span class=\"highlight\">AI Director</span> system.",


  "<span class=\"red\">Dota 2</span> remains one of the world’s biggest esports titles, known for its depth, complexity, and <span class=\"highlight\">competitive scene</span>."
];


document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper(".multiple-slide-carousel", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1920: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      990: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  });
});

setTitle()
setInfo()

DoNothing()
{
  
}