function sendMail() {
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        pesan : document.getElementById("message").value,
    }
    emailjs.send("service_2s75ofg","template_zgmctem",params)
}