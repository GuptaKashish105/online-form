// show a message with a type of the input
function showMessage(input, message, type) {
	// get the small element and set the message
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	// update the class for the input
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validateEmail(input, requiredMsg, invalidMsg) {
	// check if the value is not empty
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	// validate email format
	const emailRegex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	const email = input.value.trim();
	if (!emailRegex.test(email)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#form");

const FNAME_REQUIRED = "Please enter your first name";
const LNAME_REQUIRED = "Please enter your last name";

const EMAIL_REQUIRED = "Please enter your email";
const EMAIL_INVALID = "Please enter a correct email address format";

const PHONENO_REQUIRED = "Please enter your phone no.";

const SCLNAME_REQUIRED = "Please enter your school name";
const CLASS_REQUIRED = "Please enter your class";
const SECTION_REQUIRED = "Please enter your section";

const ADMNO_REQUIRED = "Please enter your addmission no.";

const STUDNTPIC_REQUIRED = "Please enter your student photo";

const GARNAME_REQUIRED = "Please enter your gardian name";
const GARPIC_REQUIRED = "Please enter your gardian photo";


form.addEventListener("submit", function (event) {
	// stop form submission
	event.preventDefault();

	// validate the form
	let fnameValid = hasValue(form.elements["name1"], FNAME_REQUIRED);
	console.log(fnameValid);

	let lnameValid = hasValue(form.elements["name2"], LNAME_REQUIRED);
	console.log(lnameValid);

	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
	console.log(emailValid);

	let phoneValid = hasValue(form.elements["phoneno"], PHONENO_REQUIRED);
	console.log(phoneValid);

	let sclnameValid = hasValue(form.elements["sname"], SCLNAME_REQUIRED);
	console.log(sclnameValid);

	let classValid = hasValue(form.elements["cname"], CLASS_REQUIRED);
	console.log(classValid);

	let sectionValid = hasValue(form.elements["sec"], SECTION_REQUIRED);
	console.log(sectionValid);

	let admnoValid = hasValue(form.elements["admno"], ADMNO_REQUIRED);
	console.log(admnoValid);

	let stdntpicValid = hasValue(form.elements["myfile1"], STUDNTPIC_REQUIRED);
	console.log(stdntpicValid);

	let garnameValid = hasValue(form.elements["gname"], GARNAME_REQUIRED);
	console.log(garnameValid);

	let garpicValid = hasValue(form.elements["myfile2"], GARPIC_REQUIRED);
	console.log(garpicValid);

	
	// if valid, submit the form.
	if (fnameValid && lnameValid && emailValid && phoneValid && sclnameValid && classValid && sectionValid && admnoValid && stdntpicValid && garnameValid && garpicValid) {
		alert("Thanks for submitting...");
	}
});

