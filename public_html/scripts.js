const firstPara = document.getElementById("p1");
//console.log(firstParagraph);
//tier 1.1 1.2
firstPara.style.color = "green";
firstPara.style.fontSize = "20"
    "px";
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
//tier "find and replace" using button


const button = document.querySelector("button");
const thirdPara =  document.getElementById("p3");
    button.addEventListener("click", () => {
    thirdPara.innerText = "Wizard for Life";
       });
 //tier selecting one word in Dom

 const ParaTwo = document.querySelector("p2");
 document.documentElement("ParaTwo");






