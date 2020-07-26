const firstPara = document.getElementById("p1");
//console.log(firstParagraph);
//tier 1.1 1.2
firstPara.style.color = "green";
firstPara.style.fontSize = "30px";
//tier 1.3
const button = document.getElementById("p2");
button.addEventListener('click',() => {

})
const secondPara = document.getElementById("p2");
window.addEventListener("keydown", event => {
    if (event.key == "m") {
        secondPara.style.background = "yellow";
    }
});
window.addEventListener("keyup", event => {
    if (event.key == "m") {
        secondPara.style.background = "";
    }
});
//tier 2 find and replace
 const thirdPara =  document.getElementById("p3");
 thirdPara.innerText = "wizard for Life";



