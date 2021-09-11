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
	//convert px value to percentage value
	const maxY = Math.floor((helper.offsetTop/contents.offsetHeight) * 100);
	
	for (let word of words) {
		const span = document.createElement('span');
		span.classList.add('word');
		span.setAttribute('data-word', word);
		span.innerText = word;
		span.style.left = `${getRandomInt(10, 70)}%`
		span.style.top = `${getRandomInt(10, maxY)}%`
		contents.append(span);
	}
}

function finishChecker() {
	const currentWords = document.querySelectorAll('.word');
	if (currentWords.length === 0) {
		alert('Success!');
		const replay = confirm('replay?');
		replay ? paintWords():None;
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
