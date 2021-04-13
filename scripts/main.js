var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'img/angelwitch2.jpg') {
		myImage.setAttribute ('src','img/angel.jpg');
	} else {
		myImage.setAttribute ('src','img/angelwitch2.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'For the glory of Satan, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'For the glory of Satan, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}
