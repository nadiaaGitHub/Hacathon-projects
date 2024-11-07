var form = document.getElementById('resume-form-container');
var displayResume = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // input value recieved
    var fullName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //generated resume
    var generateHTML = "\n    <h2><br>Editable Resume</br></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(fullName, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Mobile Number:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n  \n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experiance</h3>\n    <p contenteditable=\"true\">").concat(experiance, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    \n    ");
    //display
    if (displayResume) {
        displayResume.innerHTML = generateHTML;
    }
    else {
        console.error('The display Resume is not Possible due to missing some Information.Please fill carefully and try again.');
    }
});
