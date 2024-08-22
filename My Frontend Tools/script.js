document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        const offset = 20; // Adjust this value to your needs

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
        }, 300); // Delay to allow scroll to complete
    });
});

let toolCards = document.querySelectorAll(".tool-card");

function applyNewTabIcons() {
    toolCards.forEach((el) => {
        el.childNodes[1].childNodes[0].innerHTML += '<span class="material-symbols-outlined">open_in_new</span>';
    });
}

window.onload = applyNewTabIcons();