const form = document.getElementById('resume-form-container') as HTMLFormElement
const displayResume = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // input value recieved
    const fullName = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experiance = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    //generated resume
    const generateHTML = `
    <h2><br>Editable Resume</br></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${fullName}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Mobile Number:</b><span contenteditable="true">${phone}</span></p>
  

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experiance</h3>
    <p contenteditable="true">${experiance}</p>

    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
    
    `;
    //display
    if (displayResume) {
        displayResume.innerHTML = generateHTML
    } else {
        console.error('The display Resume is not Possible due to missing some Information.Please fill carefully and try again.');
    }
});

