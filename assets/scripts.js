var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
var subtitle = document.getElementById('subtitle');
var inputText = 'A Collection of Game Design and Creative Programming';

function Scramble() {
	var inputArr = inputText.split('');
	for (var i = inputArr.length - 1; i >= 0; i--) {
		var rand = Math.floor(Math.random() * (characters.length - 0 + 1) + 0);
		inputArr[i] = characters[rand];
	}
	var outputText = inputArr.join('');
	subtitle.innerHTML = outputText;
}

function TextReset() {
	subtitle.innerHTML = inputText;
}