const characters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
	'0',
	'1',
	'2',
	'3',
	'4',
	'5',
	'6',
	'7',
	'8',
	'9',
	'~',
	'`',
	'!',
	'@',
	'#',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_',
	'-',
	'+',
	'=',
	'{',
	'[',
	'}',
	']',
	',',
	'|',
	':',
	';',
	'<',
	'>',
	'.',
	'?',
	'/',
];

// all the labels
const outPut1 = document.querySelector('#output1');
const outPut2 = document.querySelector('#output2');
const outPut3 = document.querySelector('#output3');
const outPut4 = document.querySelector('#output4');

const firstButton = document.querySelector('.btn--one');
const secondButton = document.querySelector('.btn--two');

firstButton?.addEventListener('click', function () {
	generateRandom(outPut1, outPut2);
});
secondButton?.addEventListener('click', function () {
	generateRandom(outPut3, outPut4);
});

function generateRandom(output1, output2) {
	output1.textContent = '';
	output2.textContent = '';
	let password1 = '';
	let password2 = '';

	for (let i = 0; i < 15; i++) {
		let randomChar1 = characters[Math.floor(Math.random() * characters.length)];
		let randomChar2 = characters[Math.floor(Math.random() * characters.length)];
		password1 += randomChar1;
		password2 += randomChar2;
	}

	output1.textContent = password1;
	output2.textContent = password2;
}

const allLabels = document.querySelectorAll('.output');
allLabels.forEach((copy) => {
	copy.addEventListener('click', function (event) {
		if (
			event.target.textContent === '' ||
			event.target.textContent === undefined ||
			event.target.textContent === null
		) {
			return;
		}

		const text = event.target.textContent;
		const idNumber = event.target.id.split('put')[1];
		try {
			navigator.clipboard.writeText(text);
			document.getElementById('copy' + idNumber).innerText =
				'Copied to clipboard';
			setTimeout(function () {
				document.getElementById('copy' + idNumber).innerText = 'Click to copy';
			}, 1200);
		} catch (err) {
			console.error('Failed to copy!', err);
		}
	});
});
