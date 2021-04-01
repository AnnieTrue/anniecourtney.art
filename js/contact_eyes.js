// eyes follow cursor on desktop contact page

const L_EYE = document.getElementById("left_eye");
const R_EYE = document.getElementById("right_eye");

document.onmousemove = function(e){
	var x = e.clientX;     // Get the horizontal mouse coordinate
	var y = e.clientY;     // Get the vertical mouse coordinate

	moveLeftEye(x,y);
	moveRightEye(x,y);
}

function moveLeftEye(x,y){
	/* top default: .01vw steps: -.05vw, .01vw, .15vw, .3vw*/
	/* left default: .05vw steps: -.1vw, .1vw, .25vw, .45vw */

	//looking left and right
	//console.log(R_EYE.getBoundingClientRect().left - x);
	if(L_EYE.getBoundingClientRect().left - x > 200){
		//look completely left
		L_EYE.style.left = -.1+'vw';
	}else if(L_EYE.getBoundingClientRect().left - x < 200 && L_EYE.getBoundingClientRect().left - x > 0){
		//look slightly left
		L_EYE.style.left = .1+'vw';
	}else if(L_EYE.getBoundingClientRect().left - x < 0 && L_EYE.getBoundingClientRect().left - x > -380){
		//look slightly right
		L_EYE.style.left = .25+'vw';
	}else if(L_EYE.getBoundingClientRect().left - x < -380){
		//look completely right
		L_EYE.style.left = .45+'vw';
	}

	//looking up and down
	//console.log(R_EYE.getBoundingClientRect().top - y);
	if(L_EYE.getBoundingClientRect().top - y > 140){
		//look up
		L_EYE.style.top = -.05+'vw';
	}else if(L_EYE.getBoundingClientRect().top - y < 140 && L_EYE.getBoundingClientRect().top - y > 0){
		//look slightly up
		L_EYE.style.top = .01 + 'vw';
	}else if(L_EYE.getBoundingClientRect().top - y < 0 && L_EYE.getBoundingClientRect().top - y > -100){
		//look slightly down
		L_EYE.style.top = .15+'vw';
	}else if(L_EYE.getBoundingClientRect().top - y < -100){
		//look down
		L_EYE.style.top = .3+'vw';
	}	
}

function moveRightEye(x,y){
	/* top default: .05vw steps: -.05vw, .05vw, .2vw, .3vw */
	/* left default: .15vw range: 0vw, .25vw, .5vw, .75vw */

	//looking left and right
	//console.log(R_EYE.getBoundingClientRect().left - x);
	if(R_EYE.getBoundingClientRect().left - x > 200){
		//look completely left
		R_EYE.style.left = 0+'vw';
	}else if(R_EYE.getBoundingClientRect().left - x < 200 && R_EYE.getBoundingClientRect().left - x > 0){
		//look slightly left
		R_EYE.style.left = .25+'vw';
	}else if(R_EYE.getBoundingClientRect().left - x < 0 && R_EYE.getBoundingClientRect().left - x > -350){
		//look slightly right
		R_EYE.style.left = .5+'vw';
	}else if(R_EYE.getBoundingClientRect().left - x < -350){
		//look completely right
		R_EYE.style.left = .75+'vw';
	}

	//looking up and down
	//console.log(R_EYE.getBoundingClientRect().top - y);
	if(R_EYE.getBoundingClientRect().top - y > 140){
		//look up
		R_EYE.style.top = -.05+'vw';
	}else if(R_EYE.getBoundingClientRect().top - y < 140 && R_EYE.getBoundingClientRect().top - y > 0){
		//look slightly up
		R_EYE.style.top = .05 + 'vw';
	}else if(R_EYE.getBoundingClientRect().top - y < 0 && R_EYE.getBoundingClientRect().top - y > -100){
		//look slightly down
		R_EYE.style.top = .2+'vw';
	}else if(R_EYE.getBoundingClientRect().top - y < -100){
		//look down
		R_EYE.style.top = .3+'vw';
	}
}