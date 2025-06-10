document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const carousel = document.querySelector('.testimonial-carousel');
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });

    // Countdown timer for special offer
    const countdownElement = document.getElementById('countdown');
    const targetDate = new Date().getTime() + (7 * 24 * 60 * 60 * 1000); // 7 days from now

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            clearInterval(countdownInterval);
            countdownElement.textContent = 'La oferta ha terminado';
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    /* const bookNowBtn = document.getElementById('bookNowBtn');
    bookNowBtn.addEventListener('click', () => {
        alert('¡Reserva tu masaje ahora y aprovecha la oferta especial!');
    }); */
});
