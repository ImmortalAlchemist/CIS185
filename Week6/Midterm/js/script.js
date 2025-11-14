let canvas = document.getElementById("interactive-portfolio");
let ctx = canvas.getContext("2d");

//movement vars
let iconX = 0
let iconY = 0

const image = document.getElementById("icon");

//when DOM is loaded
document.addEventListener("DOMContentLoaded", (event) => {
    getMostRecentGames();

    //if you find input
    if (canvas != null) {
        //input
        document.addEventListener("keypress", (event) => {
        if (event.key === "ArrowUp") {
            iconY -= 1;
            //draw icon
            ctx.drawImage(image, iconX, IconY);
            console.log("ArrowUp");
        } else if (event.key === "ArrowDown") {
            iconY += 1;
            //draw icon
            ctx.drawImage(image, iconX, IconY);
            console.log("ArrowDown");
        } else if (event.key === "ArrowLeft") {
            iconX -= 1;
            //draw icon
            ctx.drawImage(image, iconX, IconY);
            console.log("ArrowLeft");
        } else if (event.key === "ArrowRight") {
            iconX += 1;
            //draw icon
            ctx.drawImage(image, iconX, IconY);
            console.log("ArrowRight");
        }});
    }
});

//when page is fully loaded
image.addEventListener("load", (event) => {
    //draw icon
    ctx.drawImage(image, iconX, IconY);
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
  