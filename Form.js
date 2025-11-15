// Select the form and thank-you message
const form = document.querySelector('form[name="trial-form"]');
const thankYou = document.getElementById('thank-you-message');

// Add submit event listener
form.addEventListener('submit', function(e) {
    // Wait a tiny bit and then show thank-you message
    setTimeout(() => {
        form.style.display = 'none';
        thankYou.style.display = 'block';
    }, 200);
});
