// Select the Netlify form
const form = document.querySelector('form[name="trial-form"]');

form.addEventListener('submit', function(e) {
    // Small delay to allow Netlify to register the submission
    setTimeout(() => {
        // Redirect to thank-you page
        window.location.href = "thank-you.html";
    }, 200);
});