// eyes follow cursor on desktop shop page
const EYE_R = document.getElementById("eye_right");
const L_EYE_L = document.getElementById("left_eye_left");
const R_EYE_L = document.getElementById("right_eye_left");

document.onmousemove = function(e){
	var x = e.clientX;     // Get the horizontal mouse coordinate
	var y = e.clientY;     // Get the vertical mouse coordinate

	moveEyeRight(x,y);
	moveLeftEyeLeft(x,y);
	moveRightEyeLeft(x,y);
}

function moveEyeRight(x,y){
// left range: 0vw to 1vw
// top range: -.1vw to .5vw

	//looking left and right
	if(EYE_R.getBoundingClientRect().left - x > 200){
		//look completely left
		EYE_R.style.left = 0+'vw';
	}else if(EYE_R.getBoundingClientRect().left - x < 200 && EYE_R.getBoundingClientRect().left - x > 50){
		//look slightly left
		EYE_R.style.left = .25 + 'vw';
	}else if(EYE_R.getBoundingClientRect().left - x < 10 && EYE_R.getBoundingClientRect().left - x > 0){
		//look slightly right
		EYE_R.style.left = .75+'vw';
	}else if(EYE_R.getBoundingClientRect().left - x < 0){
		//look completely right
		EYE_R.style.left = 1+'vw';
	}

	//looking up and down
	if(EYE_R.getBoundingClientRect().top - y > 140){
		//look up
		EYE_R.style.top = -.1+'vw';
	}else if(EYE_R.getBoundingClientRect().top - y < 140 && EYE_R.getBoundingClientRect().top - y > 0){
		//look slightly up
		EYE_R.style.top = .1 + 'vw';
	}else if(EYE_R.getBoundingClientRect().top - y < 0 && EYE_R.getBoundingClientRect().top - y > -100){
		//look slightly down
		EYE_R.style.top = .2+'vw';
	}else if(EYE_R.getBoundingClientRect().top - y < -100){
		//look down
		EYE_R.style.top = .5+'vw';
	}



}

function moveLeftEyeLeft(x,y){
	/*left range: 0vw to  .65vw*/
	/*right range: 0vw to .4vw*/

	//looking left and right
	//console.log(L_EYE_L.getBoundingClientRect().left - x);
	if(L_EYE_L.getBoundingClientRect().left - x > 80){
		//look completely left
		L_EYE_L.style.left = 0+'vw';
	}else if(L_EYE_L.getBoundingClientRect().left - x < 80 && L_EYE_L.getBoundingClientRect().left - x > 0){
		//look slightly left
		L_EYE_L.style.left = .25+'vw';
	}else if(L_EYE_L.getBoundingClientRect().left - x < 0 && L_EYE_L.getBoundingClientRect().left - x > -325){
		//look slightly right
		L_EYE_L.style.left = .45+'vw';
	}else if(L_EYE_L.getBoundingClientRect().left - x < -325){
		//look completely right
		L_EYE_L.style.left = .65+'vw';
	}

	//looking up and down
	//console.log(L_EYE_L.getBoundingClientRect().top - y);
	if(L_EYE_L.getBoundingClientRect().top - y > 90){
		//look completely up
		L_EYE_L.style.top = 0+'vw';
	}else if(L_EYE_L.getBoundingClientRect().top - y < 90 && L_EYE_L.getBoundingClientRect().top - y > 0){
		//look slightly up
		L_EYE_L.style.top = .05+'vw';
	}else if(L_EYE_L.getBoundingClientRect().top - y < 0 && L_EYE_L.getBoundingClientRect().top - y > -100){
		//look slightly down
		L_EYE_L.style.top = .2+'vw';
	}else if(L_EYE_L.getBoundingClientRect().top - y < -100){
		//look completely down
		L_EYE_L.style.top = .4+'vw';
	}
}

function moveRightEyeLeft(x,y){
	/*.05 range: -.05vw to .15vw*/
	/*.15 range: 0vw to  .35vw*/

	//looking left and right
	//console.log(R_EYE_L.getBoundingClientRect().left - x);
	if(R_EYE_L.getBoundingClientRect().left - x > 80){
		//look completely left
		R_EYE_L.style.left = -.05+'vw';
	}else if(R_EYE_L.getBoundingClientRect().left - x < 80 && R_EYE_L.getBoundingClientRect().left - x > 0){
		//look slightly left
		R_EYE_L.style.left = 0+'vw';
	}else if(R_EYE_L.getBoundingClientRect().left - x < 0 && R_EYE_L.getBoundingClientRect().left - x > -335){
		//look slightly right
		R_EYE_L.style.left = .1+'vw';
	}else if(R_EYE_L.getBoundingClientRect().left - x < -335){
		//look completely right
		R_EYE_L.style.left = .15+'vw';
	}

	//looking up and down
	//console.log(R_EYE_L.getBoundingClientRect().top - y);
	if( R_EYE_L.getBoundingClientRect().top - y > 0){
		//look completely up
		R_EYE_L.style.top = .1+'vw';
	}else if(R_EYE_L.getBoundingClientRect().top - y < 0 && R_EYE_L.getBoundingClientRect().top - y > -90){
		//look slightly down
		R_EYE_L.style.top = .2+'vw';
	}else if(R_EYE_L.getBoundingClientRect().top - y < -90){
		//look completely down
		R_EYE_L.style.top = .3+'vw';
	}

}





