// Password viewer code
const toggle = document.querySelector(".toggle"),
	input = document.querySelector(".pass");

toggle.addEventListener("click", () => {
	if (input.type === "password") {
		input.type = "text";
		toggle.classList.replace("fa-eye", "fa-eye-slash");
	} else {
		input.type = "password";
		toggle.classList.replace("fa-eye-splash", "fa-eye");
	}
});

// Form Validation

const inputEmail = document.getElementById("email");
const inputPass = document.getElementById("password");
const fields = document.querySelector("[required]");

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
	email: "bruna@gmail.com",
	password: "bB123467",
});

var requestOptions = {
	method: "POST",
	headers: myHeaders,
	body: raw,
	redirect: "follow",
};

fetch("http://localhost:3000/login", requestOptions)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.log("error", error));

document.querySelector("form").addEventListener("submit", (e) => {
	window.location.replace("/Main/main.html");
	e.preventDefault();
});
