// Page fade-in
window.addEventListener("load", () => document.body.classList.add("loaded"));
window.addEventListener("load", () => {
  document.querySelector(".hero-content").classList.add("active");
});

// -=-=-=-=-=-=-=-=-=-=-=-=-=-= Navbar -=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Navbar, translucent at top -> solid white when scrolling down
const topbar = document.getElementById("topbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 75) {
    topbar.classList.add("scrolled");
  } else {
    topbar.classList.remove("scrolled");
  }
});

const locationBar = document.getElementById("locationBar");
// Not in use
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    locationBar.classList.add("fade-out");
  } else {
    locationBar.classList.remove("fade-out");
  }
});

// -=-=-=-=-=-=-=-=-=-=-=- MAIN IMAGE SLIDER -=-=-=-=-=-=-=-=-=-=-=-
const slidesContainer = document.getElementById("slides");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

if (slidesContainer && nextBtn && prevBtn) {
  const slides = slidesContainer.children;
  const slideCount = slides.length;

  // Clone first and last slides for seamless infinite loop
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slideCount - 1].cloneNode(true);

  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, slides[0]);

  // Now we have original + 2 clones = slideCount + 2
  const totalSlides = slideCount + 2;
  let currentIndex = 1; // Start at real first slide (after clone
  let isTransitioning = false;
  let sliderTimer;

  // Set initial position
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

  const goToSlide = (index, instant = false) => {
    if (isTransitioning) return;
    isTransitioning = true;

    slidesContainer.style.transition = instant
      ? "none"
      : "transform 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;

    // Reset without animation when we reach cloned slides
    slidesContainer.addEventListener("transitionend", function handler() {
      if (index === 0) {
        currentIndex = slideCount;
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      if (index === totalSlides - 1) {
        currentIndex = 1;
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
      slidesContainer.removeEventListener("transitionend", handler);
      isTransitioning = false;
    });

    currentIndex = index;
  };

  const nextSlide = () => {
    goToSlide(currentIndex + 1);
    resetSliderDelay();
  };

  const prevSlide = () => {
    goToSlide(currentIndex - 1);
    resetSliderDelay();
  };

  const startSlider = () => {
    clearInterval(sliderTimer);
    sliderTimer = setInterval(nextSlide, 5000);
  };

  const resetSliderDelay = () => {
    clearInterval(sliderTimer);
    setTimeout(startSlider, 4000);
  };

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Start autoplay
  startSlider();
}

// ==================== TESTIMONIALS CAROUSEL ====================
const testContainer = document.getElementById("testItems");
const testPrev = document.getElementById("testPrev");
const testNext = document.getElementById("testNext");

if (testContainer && testPrev && testNext) {
  const slides = testContainer.children;
  const count = slides.length;

  // Clone first and last
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[count - 1].cloneNode(true);

  testContainer.appendChild(firstClone);
  testContainer.insertBefore(lastClone, slides[0]);

  let current = 1;
  let transitioning = false;
  let timer;

  testContainer.style.transform = `translateX(-100%)`;

  const moveTo = (index, instant = false) => {
    if (transitioning) return;
    transitioning = true;

    testContainer.style.transition = instant ? "none" : "transform 0.6s ease";
    testContainer.style.transform = `translateX(-${index * 100}%)`;

    testContainer.addEventListener("transitionend", function handler() {
      if (index === 0) {
        current = count;
        testContainer.style.transition = "none";
        testContainer.style.transform = `translateX(-${current * 100}%)`;
      }
      if (index === count + 1) {
        current = 1;
        testContainer.style.transition = "none";
        testContainer.style.transform = `translateX(-${current * 100}%)`;
      }
      testContainer.removeEventListener("transitionend", handler);
      transitioning = false;
    });

    current = index;
  };

  const next = () => {
    moveTo(current + 1);
    resetDelay();
  };
  const prev = () => {
    moveTo(current - 1);
    resetDelay();
  };

  const auto = () => {
    clearInterval(timer);
    timer = setInterval(next, 7000);
  };

  const resetDelay = () => {
    clearInterval(timer);
    setTimeout(auto, 4000);
  };

  testNext.addEventListener("click", next);
  testPrev.addEventListener("click", prev);

  auto(); // start
}

// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===================== SCROLL REVEAL ANIMATION =====================
const revealElements = document.querySelectorAll(
  ".reveal-left, .reveal-right, .reveal-up, .reveal-group"
);

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85; // trigger a bit early

  revealElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      el.classList.add("active");
    }
    // Optional: remove class when scrolling back up (for re-trigger)
    // else el.classList.remove('active');
  });
};

// Logo + Nav behavior on scroll
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY > 120;
  document.body.classList.toggle("scrolled", scrolled);
  document.getElementById("topbar").classList.toggle("visible", scrolled);
});

// Run on load and scroll
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);

// Mobile dropdown toggle
// Mobile menu toggle
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");
if (mobileToggle && mobileMenu) {
  mobileToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });
  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove("open");
    }
  });
}
// Close mobile menu + dropdown after clicking any link
document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.mobile-menu')?.classList.remove('open');
  });
});

// Close About dropdown after clicking a dropdown link (but only if opening in new tab)
document.querySelectorAll('.dropdown-menu a[target="_blank"]').forEach(link => {
  link.addEventListener('click', () => {
    const dropdownMenu = link.closest('.dropdown-menu');
    if (dropdownMenu) {
      // Temporarily hide it
      dropdownMenu.style.opacity = '0';
      dropdownMenu.style.visibility = 'hidden';
      
      // Re-enable hover after a short delay so it works again
      setTimeout(() => {
        dropdownMenu.style.opacity = '';
        dropdownMenu.style.visibility = '';
      }, 300);
    }
  });
});


// Back to Top Button
const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }
});

backToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});