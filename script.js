function moveSlide(button, direction) {
    // Find the closest mockup container to the clicked button
    const mockupContainer = button.closest('.mockup-container');
    const slides = mockupContainer.querySelector('.slides');
    const totalSlides = slides.children.length;
    const stickyNotes = mockupContainer.querySelectorAll(".sticky"); // Select only the sticky notes in the current container

    // Get the current index stored in the mockup container
    let currentIndex = parseInt(mockupContainer.getAttribute('data-index')) || 0;

    // Update the current index
    currentIndex += direction;

    // Loop the slides
    if (currentIndex >= totalSlides - 1) { // Show 3 images at a time
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = totalSlides - 3;
    }

    // Update sticky notes class in the current mockup container
    stickyNotes.forEach(stickyNote => {
        if (currentIndex === totalSlides - 2) {
            stickyNote.classList.add("stickyend");
        } else {
            stickyNote.classList.remove("stickyend");
        }
    });

    // Move the slides in the current mockup container
    slides.style.transform = `translateX(-${currentIndex * 33.33}%)`;

    // Save the current index back to the mockup container
    mockupContainer.setAttribute('data-index', currentIndex);
}

document.addEventListener("DOMContentLoaded", () => {

    // const element = document.getElementById('animatedPath');
    // const scribleObserver = new IntersectionObserver((entries, observer) => {
    //     entries.forEach(entry => {
    //         if (entry.isIntersecting) {
    //             entry.target.classList.add('animate'); // Add animation class
    //             observer.unobserve(entry.target); // Stop observing once animated
    //         }
    //     });
    // });
    // scribleObserver.observe(element);

    const highlights = document.querySelectorAll(".highlight");
    const highlightsObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('highlights'); // Add animation class
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    });
    highlights.forEach(highlight => highlightsObserver.observe(highlight));

    const borderElements = document.querySelectorAll('.border');
    const rectangleObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-drawn');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    });
    borderElements.forEach(borderElement => rectangleObserver.observe(borderElement));

});

window.onscroll = function () {
    var portfolioTop = document.getElementById("history").offsetTop;
    // console.log(`-> ${portfolioTop - 800} < ${window.scrollY} : ${window.pageYOffset > portfolioTop}`)
    if (window.scrollY >= (portfolioTop - 350)) {
        document.getElementById("nav-links").classList.add("navOnPortfolio")
        // console.log("move")
    } else {
        document.getElementById("nav-links").classList.remove("navOnPortfolio")
    }
};


document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const fullName = `${firstName} ${lastName}`;
    // console.log({
    //     recipient: [+254705830523, +254706934606, +254751010890],
    //     message: `Hello ${fullName},${phoneNumber}:<br> ArciTec:<br> ${message}`,
    //     email: email
    // });
    alert('Unable to send messange, try reaching out directly with the provided contact information');
    // try {
    //     const response = await fetch('/send-whatsapp', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             // recipient: ["254706934606","254705830523","254711372214"],
    //             recipient: ["254758037684", "254711372214"],
    //             message: `ArciTec: \n${fullName},\n${phoneNumber}\n${email}\n\n${message}`,
    //             email: email
    //         }),
    //     });

    //     const result = await response.json();
    //     if (result.success) {
    //         alert('Message sent successfully!');
    //         document.getElementById('contactForm').reset();
    //     } else {
    //         alert('Failed to send message.');
    //     }
    // } catch (error) {
    //     if (error.response) {
    //         console.error('Response Error:', error.response.data);  // Log response errors from Infobip
    //     } else if (error.request) {
    //         console.error('Request Error:', error.request);  // Log request errors
    //     } else {
    //         console.error('General Error:', error.message);  // Log other types of errors
    //     }
    //     res.status(500).json({ success: false, message: 'Failed to send message', error: error.message });
    // }
});
