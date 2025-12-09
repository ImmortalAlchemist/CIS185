const player = document.getElementById("PC");

//collision lines
const line1 = document.getElementById("frontline");

let playersize = 32;

const maxX = 640;
const maxY = 320;

let enemies = [];

//game vars
let score = 0;
let moves = 0;





//ON START
document.addEventListener("DOMContentLoaded", () => {
  //initialize variables
  document.getElementById("PC").setAttribute("height", (playersize + "px"));
  document.getElementById("PC").setAttribute("width", (playersize + "px"));


  //play field size
  document.getElementById("trails").setAttribute("viewBox", "0 0 " + window.innerWidth + " " + window.innerHeight);
  document.getElementById("play").setAttribute("viewBox", "0 0 " + window.innerWidth + " " + window.innerHeight);
  

  //add enemies
  //generate coordinate pairs within range

  console.log("DOM Loaded");
})





//ON MOVE
document.addEventListener("mousedown", movePlayer);
function movePlayer(e)
{
  //increase moves
  moves += 1;

  //on first move, hide title
  if (moves == 1)
  {
    document.getElementById("title").setAttribute("display", "none");
  }

  //debug
  console.log('Mouse X: ' + e.clientX + '\nMouse Y: ' + e.clientY);

  //movement variables
  let newX = e.clientX - (playersize - 8);
  let newY = e.clientY - (playersize - 8);

  //get pre-movement X/Y
  let preX = player.getAttribute("hspace");
  let preY = player.getAttribute("vspace");

  //move
  player.setAttribute("hspace", newX)
  player.setAttribute("vspace", newY)

  //display line
  line1.setAttribute("x1", preX); //can't make this accurate cause its a string and it start out as 0vw
  line1.setAttribute("y1", preY); //can't make this accurate cause its a string and it start out as 0vh
  line1.setAttribute("x2", newX + 16);
  line1.setAttribute("y2", newY + 16);
 
  //collisions
  let collisions = checkCollision();
  console.log("collisions: " + collisions);
  score += collisions;

  if (score >= 10)
  {
    //win game
    sessionStorage.setItem("moves", moves);
    window.location.href = "win_screen.html";
  }
  else 
  {
    document.getElementsByTagName("body")[0].setAttribute("background", "images/score_" + score +".png");
  }
}





function checkCollision()
{
    return 1;

    //get angle between pastpos and newpos

    //draw lines from top & bottom of circ

    //check how many enemies you ram through
}
