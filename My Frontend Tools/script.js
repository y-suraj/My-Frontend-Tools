document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 60; // Adjust this value to your needs

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });

        // Remove highlight class from all elements
        document.querySelectorAll('.highlight').forEach(el => {
            el.classList.remove('highlight');
        });

        // Add highlight class to the target element
        setTimeout(() => {
            targetElement.classList.add('highlight');
        }, 500); // Delay to allow scroll to complete
    });
});