import "./style/scss/style.scss";

window.addEventListener("DOMContentLoaded", event => {
	const hamburger = document.querySelector(".js-hamburger-menu");
	const navs = [...document.querySelectorAll(".nav__container")];
	hamburger.addEventListener("click", event => {
		hamburger.classList.toggle("open");
		navs.map(nav => nav.classList.toggle("active"));
	});
});
