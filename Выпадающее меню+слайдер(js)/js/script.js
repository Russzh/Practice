var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides (slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n); 
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");

	if(n>slides.length) {
		slideIndex = 1
		}
	if (n<1) {
		slideIndex=slides.length
			}
	for (i=0; i < slides.length ; i++) {
		slides[i].style.display= "none";
	}
	for (i=0; i < dots.length ; i++) {
		dots[i].className= dots[i].className.replace("active", "");
	} 
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}
function Portfolio(){
	var elem = document.getElementById("por").classList;
	elem.toggle('activve');
	console.log("актив");
	//elem.show();
	
}

jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".fr");
		var divv = $(".port");
		var divvv = $(".port");
		var divvvv = $(".pp");
		var divvvvv = $(".ppp");		 // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && !divv.is(e.target) && !divvvv.is(e.target) && !divvvvv.is(e.target) && !divvv.is(e.target) && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
			divv.removeClass('activve'); // скрываем его
		}
	});
});

/*function removeTest(e) {	
		console.log("удаление");
		var sd = document.querySelector('.activve');
		console.log(sd);
	    if(!e.target.matches('.activve, .activve *')) {
	    	sd.remove();
	        this.removeEventListener('click', removeTest);
	    }
	};

window.addEventListener('click', removeTest);*/