const form = document.querySelector('form[name="trial-form"]');
const thankYou = document.getElementById('thank-you-message');

form.addEventListener('submit', function(e) {
    // Wait a moment to show thank-you message
    setTimeout(() => {
        form.style.display = 'none';
        thankYou.style.display = 'block';

        // Option 1: Auto-hide after 5 seconds
        setTimeout(() => {
            thankYou.style.display = 'none';
            form.reset();           // Reset the form
            form.style.display = 'block';  // Show form again if needed
        }, 5000);

        // Option 2: Redirect after 5 seconds
        // window.location.href = "thank-you.html";

    }, 200);
});