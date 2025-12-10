// Page fade-in
window.addEventListener("load", () => document.body.classList.add("loaded"));

// Topbar on scroll
const topbar = document.getElementById("topbar");
window.addEventListener("scroll", () => {
  topbar.classList.toggle("visible", window.scrollY > 300);
});

// ==================== MAIN IMAGE SLIDER ====================
const slidesContainer = document.getElementById("slides");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (slidesContainer && nextBtn && prevBtn) {
  const slideCount = slidesContainer.children.length;
  let currentSlide = 0;
  let sliderTimer;

  const goToSlide = (n) => {
    currentSlide = (n + slideCount) % slideCount;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
  };

  const startSlider = () => {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(() => goToSlide(currentSlide + 1), 5000);
  };

  const resetSliderDelay = () => {
    clearInterval(sliderTimer);
    setTimeout(startSlider, 4000); // waits 4 seconds after manual click
  };

  nextBtn.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
    resetSliderDelay();
  });

  prevBtn.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
    resetSliderDelay();
  });

  startSlider(); // start auto-play
}

// ==================== TESTIMONIALS CAROUSEL ====================
const testContainer = document.getElementById("testItems");
const testPrev = document.getElementById("testPrev");
const testNext = document.getElementById("testNext");

if (testContainer && testPrev && testNext) {
  const testCount = testContainer.children.length;
  let currentTest = 0;
  let testTimer;

  const goToTest = (n) => {
    currentTest = (n + testCount) % testCount;
    testContainer.style.transform = `translateX(-${currentTest * 100}%)`;
  };

  const startTestAuto = () => {
    clearInterval(testTimer);
    testTimer = setInterval(() => goToTest(currentTest + 1), 7000);
  };

  const resetTestDelay = () => {
    clearInterval(testTimer);
    setTimeout(startTestAuto, 4000);
  };

  testNext.addEventListener("click", () => {
    goToTest(currentTest + 1);
    resetTestDelay();
  });

  testPrev.addEventListener("click", () => {
    goToTest(currentTest - 1);
    resetTestDelay();
  });

  startTestAuto(); // start auto-play
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===================== SCROLL REVEAL ANIMATION =====================
const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85; // trigger a bit early

  revealElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add('active');
    }
    // Optional: remove class when scrolling back up (for re-trigger)
    // else el.classList.remove('active');
  });
};

// Logo + Nav behavior on scroll
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY > 120;
  document.body.classList.toggle('scrolled', scrolled);
  document.getElementById('topbar').classList.toggle('visible', scrolled);
});

// Run on load and scroll
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);