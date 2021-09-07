const timer = document.querySelector('#timer span');

let time = 179
let minutes = ""
let seconds = ""

function getTimer() {
	minutes = String(parseInt(time / 60)).padStart(2,'0');
	seconds = String(time % 60).padStart(2,'0');
	timer.innerText = `${minutes}:${seconds}`;
	time--;

	if (time < 0) {
		clearInterval(reset);
		//수정 : timeout시 맞춘 단어 개수 or gage or 타수 띄우기.
		timer.innerText = 'out!';	
	}
}

let reset = setInterval(getTimer, 1000);
