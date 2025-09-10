// JavaScript for the second landing page
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    // Track page view (only on first render)
    if (!window.pageViewTracked) {
        window.pageViewTracked = true;
        gtag('event', '6246_page_view_landing_var5');
        ym(96171108, 'reachGoal', '6246_page_view_landing_var5');
    }
    
    
    
    // Add click handler for CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            // Add your analytics or redirect logic here
            console.log('Start analysis button clicked');
            
            // Example: Track button click
            if (typeof gtag !== 'undefined') {
                gtag('event', '6246_click_button_var5');
            ym(96171108, 'reachGoal', '6246_click_button_var5');
            }
            
            // Redirect to thanks page
            window.location.href = 'thanks.html';
        });
    }
    
    // Add hover effects for feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(4px)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // Set initial opacity for smooth loading only if image is not already loaded
        if (!img.complete) {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
        }
    });
    
    // Add intersection observer for scroll animations
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        // Observe feature items (but don't hide images)
        featureItems.forEach(item => {
            // Only animate the container, not the images inside
            const content = item.querySelector('.feature-content');
            if (content) {
                content.style.opacity = '0';
                content.style.transform = 'translateY(20px)';
                content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(content);
            }
        });
    }
    
    // Add special animation for the car image
    const carImage = document.querySelector('.car');
    if (carImage) {
        carImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        carImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
});
