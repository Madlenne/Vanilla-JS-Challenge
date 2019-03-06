function play(event){
	
	const key = document.querySelector(".button[id="+event.key+"]");
	
	if(key)
	{	
		key.classList.toggle("keyDown");
		key.classList.toggle(".buttons.button");
		const audio = document.querySelector("audio[id="+event.key+"]");
		console.log(audio);
		audio.play();
		audio.currentTime = 0;

		const keys = document.querySelectorAll(".button");
		keys.forEach(function(k){
				if(key != k){	
					if(k.classList.contains("keyDown")){
					k.classList.toggle("keyDown");
				}
			}
		});
	}

}

window.addEventListener('keydown', play);