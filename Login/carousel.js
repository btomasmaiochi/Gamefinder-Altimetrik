let slidePosition = 0;
const slides = document.getElementsByClassName("carousel_item");
const totalSlides = slides.length;

// function () -> callback
document
	.getElementById("carousel_button-next")
	.addEventListener("click", function () {
		moveToNextSlide();
	});

document
	.getElementById("carousel_button-prev")
	.addEventListener("click", function () {
		moveToPrevSlide();
	});

function updateSlidePosition() {
	for (let slide of slides) {
		slide.classList.remove("carousel_item-visible");
		slide.classList.add("carousel_item-hidden");
	}
	slides[slidePosition].classList.add("carousel_item-visible");
}

function moveToNextSlide() {
	if (slidePosition === totalSlides - 1) {
		slidePosition = 0;
	} else {
		slidePosition++;
	}
	updateSlidePosition();
}

function moveToPrevSlide() {
	if (slidePosition === 0) {
		slidePosition = totalSlides - 1;
	} else {
		slidePosition--;
	}

	updateSlidePosition();
}

// Dots

// document.querySelectorAll(".dotcontainer .dot").forEach(function (indicator) {
// 	indicator.addEventListener("click", function () {
// 		document
// 			.querySelector(".dotcontainer .selected")
// 			.classList.remove(".selected");
// 		indicator.classList.add("selected");
// 	});
// });
