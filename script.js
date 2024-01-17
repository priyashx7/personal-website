document.addEventListener("DOMContentLoaded", function() {
    
    /* to add scrolling functionlaity while tapping the navigating words */ 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
            behavior: 'smooth'
            });
        }
        });
    });
    
    /* for adding the hamburger fuctionality of toggling down while clicking onto it */
    document.querySelector('.hamburger-menu').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
    });
    
    /* to add fuctionality in navigation bar */     
    var navbar = document.querySelector('.navbar');
    var lastScrollTop = 0; // Variable to keep track of the last scroll position
    var scrollThreshold = 100; // Adjust as needed for changing color

    window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        // Hide/Show navbar on scroll direction
        if (currentScroll > lastScrollTop) {
            // Scrolling down
            navbar.classList.add('navbar-hidden');
        } else {
            // Scrolling up
            navbar.classList.remove('navbar-hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling

        // Change navbar color based on scroll position
        if (currentScroll > scrollThreshold) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    
    
    
    
    function adjustSectionPositions() {
        // Calculate the height of the hero section and store it in x
        var x = document.querySelector('.hero-section').offsetHeight;
    
        // Check if the current screen is mobile
        var isMobile = window.matchMedia("(max-width: 768px)").matches; // Example breakpoint for mobile
        // Check if the current screen is tablet
        var isTablet = window.matchMedia("(min-width: 769px) and (max-width: 1200px)").matches;

        if (isMobile) {
            // Top values for mobile layout
            document.querySelector('.about-section').style.top = (x + 30) + 'px';  // Example value for mobile
            document.querySelector('.current-section').style.top = (x + 810) + 'px';
            document.querySelector('.experience-section').style.top = (x + 1500) + 'px';
            document.querySelector('.project-section').style.top = (x + 2000) + 'px';
            document.querySelector('.skill-section').style.top = (x + 3500) + 'px';
            document.querySelector('.blog-section').style.top = (x + 4900) + 'px';
            document.querySelector('.connect-section').style.top = (x + 6350) + 'px';
            // ... Repeat for other sections and adjust as needed for mobile ...
        } else if (isTablet) {
            // Top values for tablet layout
            document.querySelector('.about-section').style.top = (x + 80) + 'px';  // Example values for tablet
            document.querySelector('.current-section').style.top = (x + 650) + 'px';
            document.querySelector('.experience-section').style.top = (x + 1200) + 'px';
            document.querySelector('.project-section').style.top = (x + 1750) + 'px';
            document.querySelector('.skill-section').style.top = (x + 3200) + 'px';
            document.querySelector('.blog-section').style.top = (x + 3970) + 'px';
            document.querySelector('.connect-section').style.top = (x + 4720) + 'px';
            // ... Adjust and repeat for other sections as needed for tablet ...
        }else {
            // Top values for desktop layout
            document.querySelector('.about-section').style.top = (x + 55) + 'px';
            document.querySelector('.current-section').style.top = (x + 444) + 'px';
            document.querySelector('.experience-section').style.top = (x + 1014) + 'px';
            document.querySelector('.project-section').style.top = (x + 1500) + 'px';
            document.querySelector('.skill-section').style.top = (x + 2432) + 'px';
            document.querySelector('.blog-section').style.top = (x + 3118) + 'px';
            document.querySelector('.connect-section').style.top = (x + 3916) + 'px';
            // ... Repeat for other sections and adjust as needed for desktop ...
        }
        // Repeat this for other sections
    }
    
    // Call adjustSectionPositions on page load and window resize
    window.addEventListener('resize', adjustSectionPositions);
    window.addEventListener('load', adjustSectionPositions);

    



    // Once all positioning is done, hide the loading overlay
    document.getElementById('loading-overlay').style.display = 'none';
});
