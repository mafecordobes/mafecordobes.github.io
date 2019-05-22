$(function () { // wait for document ready
	// init
	var controller = new ScrollMagic.Controller();

	// define movement of panels
	var wipeAnimation = new TimelineMax()
		.fromTo("section.panel.turqoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
		.fromTo("section.panel.green",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
		.fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

	// create scene to pin and link animation
	new ScrollMagic.Scene({
			triggerElement: "#pinContainer",
			triggerHook: "onLeave",
			duration: "300%"
		})
		.setPin("#pinContainer")
		.setTween(wipeAnimation)
		.addTo(controller);
});