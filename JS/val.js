function addErrorMessage(msg) {
    var error = document.getElementById('submit-errors');
    var p = document.createElement('p');
    p.textContent = msg;
    error.appendChild(p);
}

function usernameVal(username) {
    return username.length>=5 && !(username.includes(' '));
}

function genderVal(gender) {
    return gender === 'Male' || gender === 'Female';
}

function emailVal(email) {
    return email.endsWith("@gmail.com");
}

function phoneVal(phone) {
    return !(isNaN(phone)) && phone.length>=10;
}

function addressVal(address) {
    return address.length>=6;
}

function passVal(pass) {
    if (pass.length<8) {
        return false;
    }

    for(var i=0;i<pass.length;i++) {
        var char = pass.charCodeAt(i);

        if(!((char>=48&&char<=57) || (char>=65&&char<=90) || (char>=97&&char<=122))) {
            return false;
        }
    }

    return true;
}

function cpassVal(pass, cpass) {
    return pass === cpass && cpass.length==pass.length;
}

function validate() {
    let count = 0;
    var username = document.getElementById('member-username').value;
    var gender = document.getElementById('member-gender').value;
    var email = document.getElementById('member-email').value;
    var phone = document.getElementById('member-phone').value;
    var address = document.getElementById('member-address').value;
    var pass = document.getElementById('member-pass').value;
    var cpass = document.getElementById('member-cpass').value;
    var agreeTC = document.getElementById('member-agreeTC').checked;
    var agreeNews = document.getElementById('member-agreeNews').checked;

    var submit_result = document.getElementById('submit-result');
    submit_result.innerHTML=''; 

    if(usernameVal(username)!==true) {
        count++;
        addErrorMessage('Invalid Username (must be at least 5 characters and no whitespace)');
    }
    if(genderVal(gender)!==true) {
        count++;
        addErrorMessage('Please Select Gender (Male or Female)');
    }
    if(emailVal(email)!==true) {
        count++;
        addErrorMessage('Invalid Email Format (must ends with "@gmail.com")');
    }
    if(phoneVal(phone)!=true) {
        count++;
        addErrorMessage('Invalid Phone Number (numeric only and must be at least 10 numbers long)');
    }
    if(addressVal(address)!=true) {
        count++;
        addErrorMessage('Invalid Physical Address (must be at least 6 characters long)');
    }
    if(passVal(pass)!==true) {
        count++;
        addErrorMessage('Password must only contain letters and numbers, and be at least 8 characters long');
    }
    if(cpassVal(pass, cpass)!==true) {
        count++;
        addErrorMessage('Confirm Password must be filled and must match with Password');
    }
    if(!(agreeTC)) {
        count++;
        addErrorMessage('Please agree to the Terms and Conditions');
    }

    if(count==0) {
        submit_result.innerHTML='Successfully Created Account';
        submit_result.style.color='green';
    } else {
        submit_result.innerHTML=count+" error(s) detected";
        submit_result.style.color='red';
    }
}

document.getElementById('register-member').addEventListener('submit', function (event) {
    var error = document.getElementById('submit-errors');
    while(error.firstChild) {
        error.removeChild(error.firstChild);
    }
    event.preventDefault();
    validate();
})