// 1. SCROLL REVEAL ANIMATION
const sections = document.querySelectorAll('.reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
};

const revealObserver = new IntersectionObserver(revealCallback, { threshold: 0.1 });
sections.forEach(sec => revealObserver.observe(sec));


// 2. MODAL LOGIC
const modal = document.getElementById('modal-overlay');
const planSelect = document.getElementById('plan-select');
const planReadOnly = document.getElementById('plan-readonly');

// Form Logic
const formContainer = document.getElementById('modal-form-container');
const thankYouMessage = document.getElementById('thank-you-message');
const form = document.getElementById('signup-form');

function openModal(planName) {
    // Reset to form view every time modal opens
    formContainer.style.display = 'block';
    thankYouMessage.style.display = 'none';

    if(planName) {
        // Specific plan selected
        planSelect.style.display = 'none';
        planSelect.removeAttribute('name'); 
        planSelect.required = false;

        planReadOnly.style.display = 'block';
        planReadOnly.value = planName;
        planReadOnly.setAttribute('name', 'plan'); 
    } else {
        // General "Start Trial" button
        planReadOnly.style.display = 'none';
        planReadOnly.removeAttribute('name');

        planSelect.style.display = 'block';
        planSelect.setAttribute('name', 'plan');
        planSelect.required = true;
    }
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});

// 3. FORM SUBMISSION HANDLER
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual page reload
    
    // Here you would normally send data to Netlify via fetch if desired
    // For now, we simulate the success state
    
    formContainer.style.display = 'none';
    thankYouMessage.style.display = 'block';
});