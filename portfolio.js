function showImage() {
    var popupContainer = document.getElementById('imgdiv');

    // Toggle the visibility of the popup container
    popupContainer.style.display = (popupContainer.style.display === 'none' || popupContainer.style.display === '') ? 'block' : 'none';

    // Move the popup container to the desired position (bottom: 0)
    popupContainer.style.bottom = (popupContainer.style.bottom === '0px') ? '-100%' : '0px';
}
// let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    // const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (window.scrollY>100) {
        header.classList.remove('expanded');
        header.classList.add('collapsed');
        // Scrolling up
    }
    else {
        // Scrolling down
        header.classList.add('expanded');
        header.classList.remove('collapsed');
    }
    // lastScrollTop = scrollTop;
});

const slider = document.getElementById("myRange");
const output = document.getElementById("sliderValue");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
}

// let lastScrollTop = 0;
// const header = document.getElementById('header');
// const mainHeader = document.getElementById('mainheader');

// function isInView(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// window.addEventListener('scroll', () => {
//     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//     if (isInView(mainHeader)) {
//         if (scrollTop < lastScrollTop) {
//             // Scrolling up
//             header.classList.add('expanded');
//             header.classList.remove('collapsed');
//         } else {
//             // Scrolling down
//             header.classList.remove('expanded');
//             header.classList.add('collapsed');
//         }
//     } else {
//         header.classList.remove('expanded');
//         header.classList.add('collapsed');
//     }

//     lastScrollTop = scrollTop;
// });

// const text = "";
// let index = 0;

// function typeWriter() {
//     if (index < text.length) {
//         document.getElementById("typing-effect").textContent += text.charAt(index);
//         index++;
//         setTimeout(typeWriter, 50); // Adjust speed of typing effect (milliseconds)
//     }
// }

// const typingEffect = document.getElementById('typing-effect');
// const stopBlinkingPoint = 30; // Adjust this number to stop blinking at a specific character index

// function typeWriter() {
//     const text = "Hello, world! This is an on-screen typing effect.";
//     let index = 0;
//     let typeEffect = setInterval(function() {
//         if (index <= text.length) {
//             typingEffect.textContent = text.slice(0, index++);
//         } else {
//             clearInterval(typeEffect);
//             typingEffect.classList.add('typing-stopped'); // Stop blinking after typing ends
//         }
//     }, 50); // Adjust speed of typing effect (milliseconds)

//     // Stop blinking at a specific point
//     if (stopBlinkingPoint > 0 && stopBlinkingPoint <= text.length) {
//         setTimeout(function() {
//             typingEffect.classList.add('typing-stopped');
//         }, stopBlinkingPoint * 50); // Adjust timing to stop blinking (milliseconds)
//     }
// }

// // Start typing effect
// typeWriter();


// document.addEventListener('DOMContentLoaded', function() {
//     const skillsSection = document.querySelector('.skills');
//     const skillsCards = document.querySelectorAll('.skills-card');

//     function checkVisibility() {
//         const rect = skillsSection.getBoundingClientRect();
//         const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
//         if (isVisible) {
//             skillsCards.forEach(card => {
//                 card.classList.add('visible');
//             });
//             window.removeEventListener('scroll', checkVisibility);
//         }
//     }

//     window.addEventListener('scroll', checkVisibility);
//     window.addEventListener('resize', checkVisibility);
//     checkVisibility(); // Initial check
// });

// document.addEventListener('scroll', function() {
//     const header = document.querySelector('.header');
//     if (window.scrollY > 0) {
//         header.classList.add('scrolled');
//     } else {
//         header.classList.remove('scrolled');
//     }
// });
