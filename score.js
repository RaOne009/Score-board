/*
Rohit Sharma
GitHub :- RaOne009
*/
var b1 = document.querySelector("#p1");
var b2 = document.getElementById("p2");
var b3 = document.getElementById("reset");
var numinput = document.querySelector("input[type = 'Number']")
var display1 = document.getElementById("display1");
var display2 = document.getElementById("display2");
var winningscoredisplay = document.querySelector("p span");
document.body.style.background = "#4ff0de24";
var p1 = 0;
var p2 = 0;
var gameover = false;
var winingscore = 5;
b1.addEventListner("Click", function(){
    if (!gameover) {
        p1++;
        if (p1 === winingscore) {
            display1.classList.add("winner");
            display2.classList.add("loser");
            gameover = true;
        }
        display1.textcontent = p1;
    }
});
b2.addEventListner("Click", function(){
    if (!gameover) {
        p2++;
        if (p2 === winingscore) {
            display2.classList.add("winner");
            display1.classList.add("loser");
            gameover == true;
        }
        display2.textcontent = p2;
    }
});
b3.addEventListner("Click", function(){
reset();
});
numinput.addEventListner("Click", function(){
    winningscoredisplay.textcontent = this.value;
    winingscore = Number(this.value);
    reset();
});
function reset() {
    p1 = 0;
    p2 = 0;
    gameover = false;
    display1.textcontent = 0;
    display2.textcontent = 0;
    display1.classList.remove("winner");
    display1.classList.remove("winner");
    display2.classList.remove("loser");
    display2.classList.remove("loser");
}
