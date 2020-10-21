const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const linkedin = document.getElementById('linkedin');
const qual = document.getElementById('qualification');
const dob = document.getElementById('dob');
const numb = document.getElementById('number');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const linkedinValue = linkedin.value.trim();
	const qualValue = qual.value.trim();
	const dobValue = dob.value.trim();
	const numbValue = numb.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}

	if(linkedinValue === '') {
		setErrorFor(linkedin, 'URL cannot be blank');
	} else if (!validURL(linkedinValue)) {
		setErrorFor(linnkedin, 'Not a valid link');
	} else {
		setSuccessFor(linkedin);
	}

	if(numbValue === '') {
		setErrorFor(numb, 'Number cannot be blank');
	} else if (!isnumber(numbValue)) {
		setErrorFor(numb, 'Not a valid number');
	} else {
		setSuccessFor(numb);
	}

	if(dobValue === '') {
		setErrorFor(dob, 'Date of Birth cannot be blank');
	} else if (!validateDOB(dobValue)) {
		setErrorFor(dob, 'Not a valid DOB');
	} else {
		setSuccessFor(email);
	}

	if(qualValue === '') {
		setErrorFor(qual, 'Qualification cannot be blank');
	} else {
		setSuccessFor(qual);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function validURL(str) {
	var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
	  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
	  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
	  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
	  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
	  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
	return !!pattern.test(str);
  }

  function isnumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  if(inputtxt.value.match(phoneno))
    {
      return true;
	}
  else
    {
     return false;
    }
}

function validateDOB()
{
    var dob = document.forms["ProcessInfo"]["txtDOB"].value;
    var pattern = /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/;
    if (dob == null || dob == "" || !pattern.test(dob)) {
        return false;
    }
    else {
        return true
    }
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
	social_panel_container.classList.toggle('visible')
});

close_btn.addEventListener('click', () => {
	social_panel_container.classList.remove('visible')
});
              