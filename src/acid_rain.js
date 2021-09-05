const contents = document.querySelector('#contents');

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

for (let word of words) {
	const span = document.createElement('span');
	span.classList.add('word');
	span.setAttribute('data-word', word);
	span.innerText = word;
	// span.style.left = `${getRandomInt(0, window.innerWidth)}`
	// span.style.top = `${getRandomInt(0, window.innerHeight)}`
	contents.append(span);
}


