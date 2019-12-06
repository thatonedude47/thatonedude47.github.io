let racersArry = [
	['redcar.png'],
	['yellowcar.png'],
];
let racers = document.querySelector("#racers");
console.log(racersArry[0])
let started = false;
let start = "";
let startButton = document.querySelector("#startButton");
let restartButton = document.querySelector("#restartButton");
let winner = document.querySelector("#winner");
let redLight = document.querySelector("#redLight");
let greenLight = document.querySelector("#greenLight");
let winnerMsg = document.querySelector("#winnerMsg");
let redcar = "";
let yellowcar = "";


let finishLine = document.documentElement.clientWidth - 200;
restartButton.disabled = true;
function displayRacers() {
	for (let x = 0; x < racersArry.length; x++) {
        racers.innerHTML += "<img class='racingRacers' src ='" + racersArry[x] + "'>";
    }
	
}

displayRacers();
let racingRacers = document.querySelectorAll(".racingRacers");

redcar = racingRacers[0];
yellowcar = racingRacers[1];
console.log(redcar);
startButton.addEventListener("click", function() {
	if (started == false) {
		start = setInterval (startRace, 200);
		started = true;
		redcar.setAttribute("src", racersArry[0]);
		yellowcar.setAttribute("src", racersArry[1]);
		greenLight.style.opacity = "1";
        redLight.style.opacity = "0";
		restartButton.disabled = true;
		startButton.disabled = true;
	}	

});

let player1 = 0;
let player2 = 0;


function startRace(){
	player1 += Math.random() * 100;
	player2 += Math.random() * 100;
	redcar.style.left = player1 + "px";
	yellowcar.style.left = player2 + "px";
	
	console.log(redcar.style.left);
	console.log(yellowcar.style.left);
	console.log("move");
	if (player1 >= finishLine || player2 >= finishLine) {
		checker();
		
	}
}	

function checker(){
	clearInterval(start);
	restartButton.style.opacity = "1";
	console.log("The race is over");
	racers.style.opacity = "0";
	winner.style.opacity = 1;
	greenLight.style.opacity = "0";
	restartButton.disabled = false;
	winnerMsg.style.opacity = "1";
	switch (Math.max(player1, player2)) {
		case player1:
			console.log("1st");
			winnerMsg.innerHTML = "Red Car Wins!";
			break;
		case player2:
			console.log("2nd");
			winnerMsg.innerHTML = "Yellow Car Wins!";
	}
}
	

restartButton.addEventListener("click", function() {
	startButton.disabled = false;
	player1 = 0;
	player2 = 0;
	redcar.style.left = 0 + "px";
	yellowcar.style.left = 0 + "px";
	racers.style.opacity = "1";
    racers.style.transition = ".8" + "s";
    startButton.style.opacity = "1";
    restartButton.style.opacity = "0";
    winner.style.opacity = "0";
    greenLight.style.opacity = "0";
    redLight.style.opacity = "1";
    winnerMsg.style.opacity = "0";
	started = false;
	redcar.setAttribute("src", racersArry[0]);
	yellowCar.setAttribute("src", racersArry[1]);
	
});