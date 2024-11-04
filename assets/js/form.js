function sendMail(){
    let parms={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

    emailjs.send("service_3pn7uvp","template_tmiauab",parms).then(alert("Email sent!!"));
}
