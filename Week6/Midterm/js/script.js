//referem=nce variables
const canvas = document.getElementById("interactive-portfolio");
const ctx = canvas.getContext("2d");
const image = document.getElementById("icon");
const inputlog = document.getElementById("last-input");

//movement vars
let iconX = 0
let iconY = 0

//parameters
const speed = 2 //how fast in integers the sprite moves on screen
let iconr = 16 //the radius of the icon. could change based on screen size



//when DOM is loaded
document.addEventListener("DOMContentLoaded", (event) => {
    getMostRecentGames();

    //if you find the canvas
    if (canvas != null) {
        //input, only detects last currently held down/pressed key
        document.addEventListener("keydown", (event) => {
            moveIcon(event.key);
        });            
    }

    //generate the border at the edge of the canvas
    generateBorder();

    //draw icon
    drawIcon(image);
});


async function getMostRecentGames() {
    const result = document.getElementById("xml-here");
    
    //add this later
    //https://itch.io/games/newest/by-proteus-inanitas.xml

    fetch("https://itch.io/games/newest/by-archeomancers-anonymous.xml")
    .then(
        response => {
        result.textContent = `${response}\nXML Unparsed`;
        response.DOMParser();
        })
    .then(data => {
        console.log(data);
        result.textContent = `${data}\nXML Parsed`;
        })
    .catch(error => {
        console.error("Error:", error);
        result.textContent = `${error}\n\nThis is probably because the site uses cloudflare`;
    });
}

function generateBorder() {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}

function moveIcon(key) {
    switch (key) {
        case "ArrowUp":
            iconY -= 1 * speed;
            
            drawIcon(image);

            //test feedback
            inputlog.innerText = "Last Input: ArrowUp";
            console.log("ArrowUp");
            break;
        case "ArrowDown":
            iconY += 1 * speed;
            
            drawIcon(image);
            //test feedback
            inputlog.innerText = "Last Input: ArrowDown";
            console.log("ArrowDown");
            break;
        case "ArrowLeft":
            iconX -= 1 * speed;
            
            drawIcon(image);
            //test feedback
            inputlog.innerText = "Last Input: ArrowLeft";
            console.log("ArrowLeft");
            break;
        case "ArrowRight":
            iconX += 1 * speed;
            
            drawIcon(image);
            //test feedback
            inputlog.innerText = "Last Input: ArrowRight";
            console.log("ArrowRight");
            break;
        default:
            //test feedback
            inputlog.innertext = `${key}`;
            console.log(`${key}`);
            break;
    }
}

function drawIcon(img) {
    //might add a param to change this
    if (false) {
        cnvs.clearRect(0, 0, canvas.width, canvas.height);
        generateBorder();
    }
    //draw icon
    ctx.drawImage(img, (canvas.width/2 + iconX - iconr), (canvas.height/2 + iconY - iconr));
}
