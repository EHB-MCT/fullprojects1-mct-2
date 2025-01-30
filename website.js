// studentchat form
console.log("ok");

let btn = document.querySelector(".open-button");


function openForm() {
	document.getElementById("myForm").style.display = "block";
	document.querySelector(".open-button").style.display = "none";
}

btn.onclick = openForm;

let btn2 = document.querySelector(".closebutton");

function closeForm() {
	document.getElementById("myForm").style.display = "none";
	document.querySelector(".open-button").style.display = "block";
}
btn2.onclick = closeForm;

// hamburger menu
function toggleMenu() {
	const navUl = document.querySelector(".nav ul");
	navUl.classList.toggle("open");
}

// carrsoussel opleiding
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	video = document.querySelector(".mySlides video");
	if (video) {
		video.pause();
	}
	showSlides((slideIndex += n));
	if ((n = 2)) {
		changeBanner();
	}
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	let slides = document.getElementsByClassName("mySlides");
	let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}

	allVideos = document.querySelectorAll(".mySlides video");
	allVideos.forEach((video) => video.pause());
	slides[slideIndex - 1].style.display = "block";
	let activeVideo = slides[slideIndex - 1].querySelector("video");
	if (activeVideo) {
		activeVideo.play();
	}
}

// dropdown menu vakken
function toggleDropdown(dropdownId, imageClass) {
	var dropdown = document.getElementById(dropdownId);
	var image = document.querySelector("." + imageClass + " img");
	if (dropdown.style.display === "none") {
		dropdown.style.display = "block";
		image.style.transform = "rotate(90deg)";
	} else {
		dropdown.style.display = "none";
		image.style.transform = "rotate(0deg)";
	}
}

window.addEventListener("scroll", function () {
	const nav = document.querySelector(".nav");
	if (window.scrollY > 50) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}
});



function myFunction() {
	var x = document.getElementById("myLinks");
	if (x.style.display === "block") {
		x.style.display = "none";
	} else {
		x.style.display = "block";
	}
}
