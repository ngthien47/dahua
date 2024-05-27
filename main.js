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
	delay: 1500,
});

ScrollReveal().reveal("#dvr", {
	...scrollRevealOption,
	interval: 1000,
});

ScrollReveal().reveal(".row-dvr", {
	...scrollRevealOption,
	delay: 2000,
}); 