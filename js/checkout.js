
// Exercise 6
function validate() {
	var error = 0;
	/* Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");  
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
	}

	if(fEmail.value == ""){
		error++;
	}
	 
	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}*/
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fLastName = document.getElementById("fLastN");
	let fAdress = document.getElementById("fAddress");
	let fPhone = document.getElementById("fPhone");
	let fPassword = document.getElementById("fPassword");

	// Get the error elements
	//cuando este bien cambiaré la clase y el mensaje-*/
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	let errorLastName = document.getElementById("errorLastN");
	let errorAdress = document.getElementById("errorAddress");
	let errorPhone = document.getElementById("errorPhone");
	let errorPassword = document.getElementById("errorPassword");

	var correctName = document.getElementById("correctName");
	var correctEmail = document.getElementById("correctEmail");
	let correctLastName = document.getElementById("correctLastN");
	let correctAdress = document.getElementById("correctAdress");
	let correctPhone = document.getElementById("correctPhone");
	let correctPassword = document.getElementById("correctPassword");


	let expReg = {
		name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
		adress: /^[a-zA-ZÀ-ÿ\s]{1,40}\s+\d+/,
		lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
		password: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
		phone: /^(\d\s?){9,11}$/,
	}
	//validacion del nombre 
	let nombreValido = expReg.name.test(fName.value);

	if (nombreValido == false) {//el nombre no es válid
		fName.style.borderColor = "red";
		errorName.style.display = "block";
		error += 1;
	}
	else {
		fName.style.borderColor = "green";
		correctName.style.display = "block";
	}

	//validacion del apellido
	let apellidoValido = expReg.lastName.test(fLastN.value);
	if (apellidoValido == false) {//el nombre no es válid
		fLastName.style.borderColor = "red";
		errorLastName.style.display = "block";
		error += 1;
	}
	else {
		fLastName.style.borderColor = "green";
		correctLastName.style.display = "block";
	}


	//validacion del email 
	let emailValido = expReg.name.test(fEmail.value);
	if (emailValido == false) {//el nombre no es válid
		fEmail.style.borderColor = "red";
		errorEmail.style.display = "block";
		error += 1;
	}
	else {
		fEmail.style.borderColor = "green";
		correctEmail.style.display = "block";
	}

	//validacion del password 
	let passwordValido = expReg.name.test(fPassword.value);
	if (passwordValido == false) {//el nombre no es válid
		fPassword.style.borderColor = "red";
		errorPassword.style.display = "block";
		error += 1;
	}
	else {
		fPassword.style.borderColor = "green";
		correctPassword.style.display = "block";
	}

	//validacion del nombre 
	let phoneValido = expReg.name.test(fName.value);
	if (phoneValido == false) {//el nombre no es válid
		fPhone.style.borderColor = "red";
		errorPhone.style.display = "block";
		error += 1;
	}
	else {
		fPhone.style.borderColor = "green";
		correctPhone.style.display = "block";
	}

	//validacion de la direccion
	let adressValido = expReg.name.test(fName.value);
	if (adressValido == false) {//el nombre no es válid
		fAdress.style.borderColor = "red";
		errorAdress.style.display = "block";
		error += 1;
	}
	else {
		fAdress.style.borderColor = "green";
		correctAdress.style.display = "block";
	}
formSaver();
}

function formSaver() {
	if (error > 0) {
		alert("Error, all the fields might be filled");
	} else {
		alert("OK, correct submited");
		fName.value = "";
		fLastName.value = "";
		fAdress.value = "";
		fPhone.value = 0;
		fEmail.value = "";
		fPassword = "";
		document.querySelectorAll("valid-feedback").display = "none";
		document.querySelectorAll("invalid-feedback").display = "none";

	}
}


