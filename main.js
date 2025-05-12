// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const backToTop = document.getElementById('back-to-top');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    if (window.scrollY > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Back to top button
document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize animations on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate__animated');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementPosition < windowHeight - elementVisible) {
            const animationClass = element.dataset.animation || 'fadeInUp';
            element.classList.add(`animate__${animationClass}`);
            element.style.opacity = '1';
        }
    });
}

// Initialize animations when page loads
window.addEventListener('load', function() {
    // Animate hero section immediately
    document.querySelector('#home .animate__animated').classList.add('animate__fadeInLeft');
    document.querySelector('#home .animate__animated + .animate__animated').classList.add('animate__fadeInRight');
    
    // Then set up scroll animations
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

// Add hover effect to cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.classList.add('shadow-lg');
    });
    
    card.addEventListener('mouseleave', function() {
        this.classList.remove('shadow-lg');
    });
});