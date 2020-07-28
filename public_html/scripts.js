const firstPara = document.getElementById("p1");
//console.log(firstParagraph);
//tier 1.1 1.2
firstPara.style.color = "green";
firstPara.style.fontSize = "20px";

//react to keyboard events

const secondPara = document.getElementById("p2");
document.addEventListener("keydown", event => {
    if (event.key === "m") {
        secondPara.style.background = "yellow";
    }
});
document.addEventListener("keyup", event => {
    if (event.key === "m") {
        secondPara.style.background = "";
    }
});
//tier 2 "find and replace" using button


const button = document.querySelector("button");
const thirdPara =  document.getElementById("p3");
    button.addEventListener("click", () => {
    thirdPara.innerText = "Wizard for Life";

       });
 //tier 2 find, replace and highlight one word

document.getElementById("target").innerText  = "Casey";{
    target.style.background = "yellow";
}

// tier 2 shuffle words in random order




