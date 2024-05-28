const scrollRevealOption = {
	distance: "50px",
	origin: "bottom",
	duration: 1000,
};

ScrollReveal().reveal(".main-content", {
	...scrollRevealOption,
	interval: 500,
});

ScrollReveal().reveal("#solution h3", {
	...scrollRevealOption,
	interval: 500,
});

ScrollReveal().reveal("#solution .row", {
	...scrollRevealOption,
	delay: 1000,
});

ScrollReveal().reveal("#camera", {
	...scrollRevealOption,
	interval: 500,
});

ScrollReveal().reveal(".row-camera", {
	...scrollRevealOption,
	delay: 1000,
});

ScrollReveal().reveal("#dvr", {
	...scrollRevealOption,
	interval: 500,
});

ScrollReveal().reveal(".row-dvr", {
	...scrollRevealOption,
	delay: 1000,
});

ScrollReveal().reveal(".register-top", {
	...scrollRevealOption,
	interval: 500,
});
ScrollReveal().reveal(".register-bottom", {
	...scrollRevealOption,
	delay: 1000,
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc() {
	let parent = this.parentNode;
	if (this.value == "") {
		parent.classList.remove("focus");
	}
}

inputs.forEach((input) => {
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
});
