// GetData
// const nameInput = document.querySelector("#name");
// const email = document.querySelector("email");
// const message = document.querySelector("#message");
// const nameInput = document.querySelector("#name");
// const nameInput = document.querySelector("#name");


// function vaildeteForm(){
    
// }

// form send email
const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");


function sendEmail(){
    const bodyMessage = `Name : ${name.value}<br> Email:${email.value}<br>Subject: ${subject.value}<br>Message:${mess.value}`;

    Email.send({
        Host: "",
        Username: "",
        Password: "",
        To: "",
        Fron: "",
        Subject: "",
        Body: ""
    }).then(
        message => {{alert(message)}}
    );
}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
});



// Function to add 'show' class when elements are in view
function scrollAppear() {
    const elements = document.querySelectorAll('.scroll-effect');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const position = element.getBoundingClientRect().top;

        // Check if the element is in the viewport
        if (position < windowHeight - 100) {
            element.classList.add('show');
        }
    });
}

// Event listener for scroll
window.addEventListener('scroll', scrollAppear);
