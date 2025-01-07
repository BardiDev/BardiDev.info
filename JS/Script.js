document.addEventListener('DOMContentLoaded', function () {
    const languageSwitches = document.querySelectorAll('.language-switch');
    const body = document.body;
    const sectionTopWrappers = document.querySelectorAll('.section-top-wrapper');
    const sectionWrappers = document.querySelectorAll('.section-wrapper');
    const sectionDownWrappers = document.querySelectorAll('.section-down-wrapper');
    const workItems = document.querySelectorAll('.work-item');

    // ... (keep your existing language switch code)

    // Animate sections on scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.querySelectorAll('.hero-title, .hero-subtitle, .cta-button, .section-title, p, .skill-item, .software-item').forEach((el, index) => {
                    el.style.setProperty('--item-index', index + 1);
                });
            } else {
                entry.target.classList.remove('active');
            }
        });
    }, observerOptions);

    sectionTopWrappers.forEach(wrapper => {
        observer.observe(wrapper);
    });
    sectionWrappers.forEach(wrapper => {
        observer.observe(wrapper);
    });
    sectionDownWrappers.forEach(wrapper => {
        observer.observe(wrapper);
    });

    // Animate work items on scroll
    const workItemObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    workItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        workItemObserver.observe(item);
    });
});