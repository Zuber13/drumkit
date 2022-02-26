// const audioObj = [
	// {
		// keycode : 65 , 
		// audio : document.createElement('audio'),
		// src : './audios/01 - JavaScript Drum Kit_sounds_boom.wav'
	// },
// 
	// {
		// keycode : 83 , 
		// audio : document.createElement('audio'),
		// src : './audios/01 - JavaScript Drum Kit_sounds_clap.wav'
	// },
// 
	// {
		// keycode : 68 , 
		// audio : document.createElement('audio'),
		// src : './audios/01 - JavaScript Drum Kit_sounds_hihat.wav'
	// },
// 
	// {
		// keycode : 70 , 
		// audio : document.createElement('audio'),
		// src : './audios/01 - JavaScript Drum Kit_sounds_kick.wav'
	// },
// 
	// {
		// keycode : 71 , 
		// audio : document.createElement('audio'),
		// src : './audios/01 - JavaScript Drum Kit_sounds_openhat.wav'
	// },
	// 
	// {
		// keycode : 72 , 
		// audio : document.createElement('audio'),
		// src : './audios/01 - JavaScript Drum Kit_sounds_ride.wav'
    // },
// 
	// {
		// keycode : 74 , 
		// audio : document.createElement('audio'),
		// src : './audios/01 - JavaScript Drum Kit_sounds_snare.wav'
	// },
// 
// 
	// {
	//    keycode : 75 , 
	//    audio : document.createElement('audio'),
	//    src : './audios/01 - JavaScript Drum Kit_sounds_tink.wav'
	// },
// 
	// {
		// keycode : 76 , 
		// audio : document.createElement('audio'),
		// src : './audios/01 - JavaScript Drum Kit_sounds_tom.wav'
	// },
// ]
// 


const keys = document.querySelectorAll('div .key');
const aus = document.querySelectorAll('audio');

window.addEventListener('keydown',function(e){
	let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	let drumBtn  = document.querySelector(`.drum[key-code="${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime = 0;
	audio.play();
	drumBtn.classList.add('active');
	// removeTransition(e)
}); 


function removeTransition(e){
	if(e.propertyName !== 'transform') return;
	console.log(e.propertyName);
	this.classList.remove('active');
}

  
const drums = document.querySelectorAll('.drum');
console.log(drums);
drums.forEach(elem => elem.addEventListener('transitionend' , removeTransition));



