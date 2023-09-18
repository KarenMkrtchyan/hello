const userName = document.querySelector("#firstName");

userName.addEventListener("input", (e) => {
	if (userName.validity.valueMissing) {
		userName.setCustomValidity("A name is required");
	} else if (userName.validity.tooLong) {
		userName.setCustomValidity("Name needs to be under 10 characters");
	} else if (userName.validity.tooShort) {
		userName.setCustomValidity("Name needs to be at least 2 characters");
	} else {
		userName.setCustomValidity("");
	}
});

const image = document.querySelector(".image");

window.addEventListener("mousemove", (e) => {
	image.style.backgroundPosition = `${
		(e.clientX / window.innerWidth) * 50
	}% 50%`;
});
