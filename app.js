(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "QVbvoZ-dkMhdy8W5G",
      
    });
})();

window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_u7pdyr7', 'template_cpmdopr', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}