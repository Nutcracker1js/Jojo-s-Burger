// SPA navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        document.getElementById(this.dataset.page).classList.add('active');
        document.getElementById('navLinks').classList.remove('open');
    });
});


// Review form (adds review to list)
document.querySelector('.review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('review-name').value.trim();
    const text = document.getElementById('review-text').value.trim();
    if(name && text) {
        const reviewDiv = document.createElement('div');
        reviewDiv.className = 'review-item';
        reviewDiv.innerHTML = `<strong>${name}:</strong> <span>${text}</span>`;
        document.getElementById('reviews-list').appendChild(reviewDiv);
        this.reset();
    }
});

// Login form (demo only)
document.querySelector('.login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login successful! (Demo only)');
    this.reset();
});

// Carousel logic
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
let currentSlide = 0;
let carouselInterval;

function showSlide(idx) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === idx);
        dotsContainer.children[i].classList.toggle('active', i === idx);
    });
    currentSlide = idx;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}
function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
}

// Dots
slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => showSlide(i));
    dotsContainer.appendChild(dot);
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-play
function startCarousel() {
    carouselInterval = setInterval(nextSlide, 4000);
}
function stopCarousel() {
    clearInterval(carouselInterval);
}
document.getElementById('carousel').addEventListener('mouseenter', stopCarousel);
document.getElementById('carousel').addEventListener('mouseleave', startCarousel);

showSlide(0);
startCarousel();
const myCarouselEl = document.querySelector('#myCarousel')
const carousel = bootstrap.Carousel.getInstance(myCarouselEl) // Retrieve a Carousel instance

myCarouselEl.addEventListener('slid.bs.carousel', event => {
  carousel.to('2') // Will slide to the slide 2 as soon as the transition to slide 1 is finished
})

carousel.to('1') // Will start sliding to the slide 1 and returns to the caller
carousel.to('2') // !! Will be ignored, as the transition to the slide 1 is not finished !!
<script>
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn-minus').forEach(button => {
      button.addEventListener('click', () => {
        const input = button.parentElement.querySelector('.quantity-input');
        let value = parseInt(input.value);
        if (value > 1) input.value = value - 1;
      });
    });

    document.querySelectorAll('.btn-plus').forEach(button => {
      button.addEventListener('click', () => {
        const input = button.parentElement.querySelector('.quantity-input');
        input.value = parseInt(input.value) + 1;
      });
    });
  });
  
</script>


