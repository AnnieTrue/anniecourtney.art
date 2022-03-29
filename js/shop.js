
/* -------------------------------------------------------------------------- */
/*                               preview upload                               */
/* -------------------------------------------------------------------------- */
function preview_image(event){
	var reader = new FileReader();
	reader.onload = function(){
 		var output = document.getElementById('output_image');
		output.src = reader.result;
		document.getElementById('clip').style.display = 'block';
 	}
 	reader.readAsDataURL(event.target.files[0]);
}

/* -------------------------------------------------------------------------- */
/*                               slideshow stuff                              */
/* -------------------------------------------------------------------------- */
const portrait = document.getElementById('portrait');
const prev_bttn = document.getElementById('prev');
const next_bttn = document.getElementById('next');

var images = [
	'<img class="pics" src="assets/commissions/penelope1.JPG">',
	'<img class="pics" src="assets/commissions/pen_tongue.JPG">',
	'<img class="pics" src="assets/commissions/pen_eye.JPG">',
	'<img class="pics" src="assets/commissions/pen_paw.JPG">',
	'<img class="pics" src="assets/commissions/cat1_1.JPG">',
	'<img class="pics" src="assets/commissions/cat2_1.jpg">',
	'<img class="pics" src="assets/commissions/cat2_3.jpg">',
	'<img class="pics" src="assets/commissions/kaya.JPG">',
	'<img class="pics" src="assets/commissions/kaya2.JPG">',
	'<img class="pics" src="assets/commissions/sprinksFrame.jpg">',
	'<img class="pics" src="assets/commissions/sprinks2.jpg">'
]



//when the page loads have the slideshow start at the first photo
portrait.innerHTML = images[0];
currentImage = 0; //the index of the image currently being displayed

prev_bttn.addEventListener('click', (event) =>{
	event.preventDefault();

	if(currentImage != 0){
		portrait.innerHTML = images[currentImage - 1];
		currentImage--;
	}else{
		portrait.innerHTML = images[images.length - 1];
		currentImage = images.length - 1;
	}

})

next_bttn.addEventListener('click', (event) =>{
	event.preventDefault();

	if(currentImage != images.length - 1){
		portrait.innerHTML = images[currentImage + 1];
		currentImage++;
	}else{
		portrait.innerHTML = images[0];
		currentImage = 0;
	}

})

/* -------------------------------------------------------------------------- */
/*                            estimate calculation                            */
/* -------------------------------------------------------------------------- */
function lowEstimate(x,y){
	z = x*y;

	canvas = 0;

	if(z<200){
		canvas=z*.1
	}else if(z<1300){
		canvas=z*.05
	}else{
		canvas=z*.01;
	}

	paint = 10 * (z/100);

	hours = (15 * ((z/2)/16))+(7.5*((z/2)/16)); //low estimate (only half of the canvas is full detail (ie full hour rate), (other half is half rate))

	total = Math.ceil(canvas + paint + hours)
	// $50 min
	if (total<50 && z != 0){
		total = 50
	}

	return total;

}
function highEstimate(x,y){
	z = x*y;

	canvas = 0;

	if(z<200){
		canvas=z*.1
	}else if(z<1300){
		canvas=z*.05
	}else{
		canvas=z*.01;
	}

	paint = 10 * (z/100);

	hours = 15 * (z/16); //high estimate (the whole canvas is full detail)

	total = Math.ceil(canvas + paint + hours)
	// $50 min
	if (total<50 && z != 0){
		total = Math.ceil(50 + total/2)
	}

	return total;
}
function output(){
	return '$'+lowEstimate(document.getElementById('length').value, document.getElementById('width').value)+' - $'+highEstimate(document.getElementById('length').value, document.getElementById('width').value);
}
function output_info(){
	return '(depending on the level of detail)';
}

/* -------------------------------------------------------------------------- */
/*                         click image for larger view                        */
/* -------------------------------------------------------------------------- */

portrait.addEventListener('click', () => {

	console.log(currentImage)

	var modal = document.createElement('div')

	modal.classList.add('modal');

	modal.innerHTML = images[currentImage]


	document.getElementById('inner_box').appendChild(modal)

	modal.addEventListener('click', () => {
		document.getElementById('inner_box').removeChild(modal)
	})

})