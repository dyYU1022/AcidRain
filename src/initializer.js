const words = [
	'Umbrella',
	'Laptop',
	'Charger',
	'Pen',
	'Earphones',
	'Smartphone',
	'Diary',
	'Boyfriend',
]

const contents = document.querySelector('#contents');
const helper = document.querySelector('#helper');
const input = document.querySelector('#user_input');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function paintWords() {

	const currentWords = document.querySelectorAll('.word');
	if (currentWords.length !== 0) {
		for (let word of currentWords) {
			word.remove();
		}
	}
	
	const minX = contents.offsetLeft;
	const maxX = window.innerWidth - minX - 150;
	const minY = contents.offsetTop;
	const maxY = helper.offsetTop - 30;
	
	for (let word of words) {
		const span = document.createElement('span');
		span.classList.add('word');
		span.setAttribute('data-word', word);
		span.innerText = word;
		span.style.left = `${getRandomInt(minX, maxX)}px`
		span.style.top = `${getRandomInt(minY, maxY)}px`
		contents.append(span);
	}
}

function finishChecker() {
	const words = document.querySelectorAll('.word');
	if (words.length === 0) {
		alert('Success!');
		const replay = confirm('replay?');
		replay && paintWords();
	}
}

function wordChecker() {
	const word = document.querySelector(`[data-word = "${input.value}"]`);
	if (word) {
		word.remove();
		finishChecker()
	}
	input.value = "";
}

paintWords();
input.addEventListener('change', wordChecker);
window.addEventListener('resize', paintWords);
