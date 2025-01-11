window.onload = function() {
    // Toggle navigation menu visibility
    function toggleMenu() {
        const nav = document.querySelector('nav ul');
        nav.classList.toggle('visible');
    }

    // Add event listener for menu toggle button
    document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Filter projects by category
    function filterProjects(category) {
        const projects = document.querySelectorAll('#projects article');
        projects.forEach(project => {
            if (category === 'all' || project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    // Add event listeners for project filters
    document.querySelectorAll('.filter-button').forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            filterProjects(category);
        });
    });

    // Lightbox effect for project images
    document.querySelectorAll('#projects img').forEach(img => {
        img.addEventListener('click', function() {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            document.body.appendChild(lightbox);
            const imgClone = this.cloneNode();
            lightbox.appendChild(imgClone);
            lightbox.addEventListener('click', function() {
                lightbox.remove();
            });
        });
    });

    // Form validation
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Test and debug
    function testProject() {
        // Simulate user interactions
        document.querySelector('nav ul li a[href="#about-me"]').click();
        document.querySelector('nav ul li a[href="#projects"]').click();
        document.querySelector('nav ul li a[href="#skills"]').click();
        document.querySelector('nav ul li a[href="#contact"]').click();

        // Test form submission
        document.getElementById('name').value = 'Test User';
        document.getElementById('email').value = 'test@example.com';
        document.getElementById('message').value = 'This is a test message.';
        document.getElementById('contact-form').submit();

        // Log results
        console.log('Testing completed.');
    }

    // Run tests
    testProject();
};