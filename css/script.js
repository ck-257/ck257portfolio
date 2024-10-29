function sendMail() {
    var params = {
        name: document.getElementById("custom-input1").value,
        email: document.getElementById("custom-input2").value,
        subject: document.getElementById("custom-input3").value,
        message: document.getElementById("custom-textarea").value,
    };

    const serviceID = "service_iyoessl"; // Your EmailJS service ID
    const templateID = "template_149d8ub"; // Your EmailJS template ID

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear form fields
            document.getElementById("custom-input1").value = "";
            document.getElementById("custom-input2").value = "";
            document.getElementById("custom-input3").value = "";
            document.getElementById("custom-textarea").value = "";
            console.log(res);
            alert("Your message sent successfully!!");
        })
        .catch(err => console.log(err));
}