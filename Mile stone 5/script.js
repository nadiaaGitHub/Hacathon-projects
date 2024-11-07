var form = document.getElementById('resume-form-container');
var displayResume = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById('shareable-link container');
var shareableLinkElement = document.getElementById('shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // input value recieved
    var username = document.getElementById('username').value;
    var fullName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experiance = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Save form data in localStorage with the username as the key  
    var resumeData = {
        fullName: fullName,
        email: email,
        phone: phone,
        education: education,
        experiance: experiance,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the  data locally
    //generated resume
    var generateHTML = "\n    <h2><br>Editable Resume</br></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\">".concat(fullName, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n    <p><b>Mobile Number:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n  \n\n    <h3>Education</h3>\n    <p contenteditable=\"true\">").concat(education, "</p>\n\n    <h3>Experiance</h3>\n    <p contenteditable=\"true\">").concat(experiance, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\">").concat(skills, "</p>\n    \n    ");
    //display
    displayResume.innerHTML = generateHTML;
    // Generate a shareable URL with the username only 
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    // Display the shareable link 
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download 
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save  as PDF 
});
// Prefill the form based on the username in the URL 
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage 
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
