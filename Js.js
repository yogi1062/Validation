console.log("This is project 4");
const uname = document.getElementById('name');
const email = document.getElementById('eid');
const phone = document.getElementById('mobno');
const password = document.getElementById('pass');
let validEmail = false;
let validPhone = false;
let validUser = false;
let validPass = false;

// console.log(name, email, phone);
uname.addEventListener('blur', () => {
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
    let str = uname.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your name is valid');
        uname.classList.remove('is-invalid');
        validUser = true;
    }
    else {
        console.log('Your name is not valid');
        uname.classList.add('is-invalid');
        validUser = false;

    }
})

email.addEventListener('blur', () => {
    console.log("email is blurred");
    // Validate email here
    let regex = /^([\W+0-9a-zA-Z]+)@([\W+0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

password.addEventListener('blur', () => {
    console.log("pass is blurred");
    // Validate phone here
    let regex = /^(?=.*\W)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
    let str = password.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your phone is valid');
        password.classList.remove('is-invalid');
        validPass = true;
    }
    else {
        console.log('Your phone is not valid');
        password.classList.add('is-invalid');
        validPass = false;

    }
})


let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);

    // Submit your form here
    if (validEmail && validUser && validPhone) {
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');

    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');

    }



})
