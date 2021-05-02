// eyes follow cursor on desktop shop page
const EYE_R = document.getElementById("eye_right");
const L_EYE_L = document.getElementById("left_eye_left");
const R_EYE_L = document.getElementById("right_eye_left");
const EYE_R_M = document.getElementById("eye_right_mobile");
const L_EYE_L_M = document.getElementById("left_eye_left_mobile");
const R_EYE_L_M = document.getElementById("right_eye_left_mobile");


document.onmousemove = function(e){
	var x = e.clientX;     // Get the horizontal mouse coordinate
	var y = e.clientY;     // Get the vertical mouse coordinate

	moveEyeRight(EYE_R, x,y);
	moveLeftEyeLeft(L_EYE_L, x,y);
	moveRightEyeLeft(R_EYE_L, x,y);
	moveEyeRight(EYE_R_M, x,y);
	moveLeftEyeLeft(L_EYE_L_M, x,y);
	moveRightEyeLeft(R_EYE_L_M, x,y);
}

function moveEyeRight(eye, x,y){
// left range: 0vw to 1vw
// top range: -.1vw to .5vw

	//looking left and right
	//console.log(EYE_R.getBoundingClientRect().left - x);
	if(eye.getBoundingClientRect().left - x > 200){
		//look completely left
		eye.style.left = 0+'vw';
	}else if(eye.getBoundingClientRect().left - x < 200 && eye.getBoundingClientRect().left - x > 0){
		//look slightly left
		eye.style.left = .25 + 'vw';
	}else if(eye.getBoundingClientRect().left - x < 0 && eye.getBoundingClientRect().left - x > -200){
		//look slightly right
		eye.style.left = .75+'vw';
	}else if(eye.getBoundingClientRect().left - x < -200){
		//look completely right
		eye.style.left = 1+'vw';
	}

	//looking up and down
	if(eye.getBoundingClientRect().top - y > 140){
		//look up
		eye.style.top = -.1+'vw';
	}else if(eye.getBoundingClientRect().top - y < 140 && eye.getBoundingClientRect().top - y > 0){
		//look slightly up
		eye.style.top = .1 + 'vw';
	}else if(eye.getBoundingClientRect().top - y < 0 && eye.getBoundingClientRect().top - y > -100){
		//look slightly down
		eye.style.top = .2+'vw';
	}else if(eye.getBoundingClientRect().top - y < -100){
		//look down
		eye.style.top = .5+'vw';
	}



}

function moveLeftEyeLeft(eye, x,y){
	/*left range: 0vw to  .65vw*/
	/*right range: 0vw to .4vw*/

	//looking left and right
	//console.log(eye.getBoundingClientRect().left - x);
	if(eye.getBoundingClientRect().left - x > 80){
		//look completely left
		eye.style.left = 0+'vw';
	}else if(eye.getBoundingClientRect().left - x < 80 && eye.getBoundingClientRect().left - x > 0){
		//look slightly left
		eye.style.left = .25+'vw';
	}else if(eye.getBoundingClientRect().left - x < 0 && eye.getBoundingClientRect().left - x > -325){
		//look slightly right
		eye.style.left = .45+'vw';
	}else if(eye.getBoundingClientRect().left - x < -325){
		//look completely right
		eye.style.left = .65+'vw';
	}

	//looking up and down
	//console.log(eye.getBoundingClientRect().top - y);
	if(eye.getBoundingClientRect().top - y > 90){
		//look completely up
		eye.style.top = 0+'vw';
	}else if(eye.getBoundingClientRect().top - y < 90 && eye.getBoundingClientRect().top - y > 0){
		//look slightly up
		eye.style.top = .05+'vw';
	}else if(eye.getBoundingClientRect().top - y < 0 && eye.getBoundingClientRect().top - y > -100){
		//look slightly down
		eye.style.top = .2+'vw';
	}else if(eye.getBoundingClientRect().top - y < -100){
		//look completely down
		eye.style.top = .4+'vw';
	}
}

function moveRightEyeLeft(eye,x,y){
	/*.05 range: -.05vw to .15vw*/
	/*.15 range: 0vw to  .35vw*/

	//looking left and right
	//console.log(eye.getBoundingClientRect().left - x);
	if(eye.getBoundingClientRect().left - x > 80){
		//look completely left
		eye.style.left = -.05+'vw';
	}else if(eye.getBoundingClientRect().left - x < 80 && eye.getBoundingClientRect().left - x > 0){
		//look slightly left
		eye.style.left = 0+'vw';
	}else if(eye.getBoundingClientRect().left - x < 0 && eye.getBoundingClientRect().left - x > -335){
		//look slightly right
		eye.style.left = .1+'vw';
	}else if(eye.getBoundingClientRect().left - x < -335){
		//look completely right
		eye.style.left = .15+'vw';
	}

	//looking up and down
	//console.log(eye.getBoundingClientRect().top - y);
	if( eye.getBoundingClientRect().top - y > 0){
		//look completely up
		eye.style.top = .1+'vw';
	}else if(eye.getBoundingClientRect().top - y < 0 && eye.getBoundingClientRect().top - y > -90){
		//look slightly down
		eye.style.top = .2+'vw';
	}else if(eye.getBoundingClientRect().top - y < -90){
		//look completely down
		eye.style.top = .3+'vw';
	}

}



