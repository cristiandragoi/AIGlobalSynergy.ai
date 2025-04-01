// Main JavaScript file for the website
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Add a simple animation to the header
    const header = document.querySelector('header');
    if (header) {
        header.style.transition = 'all 0.5s ease';
        header.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#3a9085';
        });
        header.addEventListener('mouseout', function() {
            this.style.backgroundColor = '#50b3a2';
        });
    }
});
