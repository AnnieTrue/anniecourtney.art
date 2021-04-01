function preview_image(event){
	var reader = new FileReader();
	reader.onload = function(){
 		var output = document.getElementById('output_image');
		output.src = reader.result;
 	}
 	reader.readAsDataURL(event.target.files[0]);
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var s = document.getElementsByClassName("slides");
  // var dots = document.getElementsByClassName("dot");
  if (n > s.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = s.length}
  for (i = 0; i < s.length; i++) {
      s[i].style.display = "none";  
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  s[slideIndex-1].style.display = "block";  
  // dots[slideIndex-1].className += " active";
}


// estimate stuff below
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

	return Math.ceil(canvas + paint + hours);

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

	return Math.ceil(canvas + paint + hours);
}
function output(){
	return '$'+lowEstimate(document.getElementById('length').value, document.getElementById('width').value)+' - $'+highEstimate(document.getElementById('length').value, document.getElementById('width').value);
}
function output_info(){
	return '(depending on the level of detail)';
}