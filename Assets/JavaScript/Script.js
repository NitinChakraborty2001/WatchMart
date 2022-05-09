/*
	🖥️Full-Stack Developer 🎨Graphic Designer 💸Freelancer

    👨‍💻Author : Nitin Chakraborty.

    🔗Facebook : https://www.facebook.com/NitinChakraborty2001/
	🔗Instagram : https://www.instagram.com/NitinChakraborty2001/
	🔗YouTube : http://www.youtube.com/c/NitinChakraborty2001/
	🔗LinkedIn : https://www.linkedin.com/in/NitinChakraborty2001/
    🔗Twitter : https://www.twitter.com/NitinCB2001/

    📧eMail : nitin.chakraborty13@gmail.com
*/

// Menu
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/* Menu - Show (Validate If Constant Exists!) */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/* Menu - Hide (Validate If Constant Exists!) */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");

	/* When we click on each "nav__link", we remove the "show-menu" Class! */
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// Change Background Header
function scrollHeader() {
	const header = document.getElementById("header");

	/* When the Scroll is greater than "50 Viewport Height", add the "scroll-header" Class to the Header Element! */
	if (this.scrollY >= 50) header.classList.add("scroll-header");
	else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// Testimonial Swiper
let testimonialSwiper = new Swiper(".testimonial-swiper", {
	spaceBetween: 30,
	loop: "true",

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// New Swiper
let newSwiper = new Swiper(".new-swiper", {
	spaceBetween: 24,
	loop: "true",

	breakpoints: {
		576: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
});

// Scroll Sections Active Link
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

// Show Scroll Up
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");

	/* When the Scroll is greater than "350 Viewport Height", add the "show-scroll" Class to the Anchor Element with the "scroll-top" Class! */
	if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// Cart
const cart = document.getElementById("cart"),
	cartShop = document.getElementById("cart-shop"),
	cartClose = document.getElementById("cart-close");

/* Cart - Show (Validate If Constant Exists!) */
if (cartShop) {
	cartShop.addEventListener("click", () => {
		cart.classList.add("show-cart");
	});
}

/* Cart - Hide (Validate If Constant Exists!) */
if (cartClose) {
	cartClose.addEventListener("click", () => {
		cart.classList.remove("show-cart");
	});
}

// Theme
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

/* Previously Selected Topic (If user selected!) */
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

/* Obtain the current Theme that the Interface has by Validating the "dark-theme" Class! */
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

/* Validate if the User previously chose a Topic! */
if (selectedTheme) {
	// If the Validation is fulfilled, ask what the issue was to know if we Activated Or Deactivated the Dark Theme!
	document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
	themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](iconTheme);
}

/* Activate / Deactivate the Theme manually with the Button! */
themeButton.addEventListener("click", () => {
	/* Add Or Remove the Dark / Icon Theme! */
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);

	/* We save the Theme and the current Icon that the User chose */
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});
