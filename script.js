 // Initialize EmailJS with your user ID
 (function(){
    emailjs.init("XvAqHAeLQl3ahnuMr");
})();

// Function to send email using EmailJS
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Send the email using the form data
    console.log(this)
    emailjs.sendForm('service_d1x2xg7', 'template_qgkn8n1', this)
        .then(function() {
            alert('Message Sent Successfully!');
        }, function(error) {
            alert('Failed to send the message: ' + JSON.stringify(error));
        });
});

