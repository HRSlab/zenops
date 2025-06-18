 window.addEventListener("DOMContentLoaded", () => {
const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // 1. Cinematic entrance
    tl.from('[data-animate="title"]', {
      y: 100,
      opacity: 0,
      skewY: 8,
      duration: 1.2
    })
    .from('[data-animate="subtitle"]', {
      y: 50,
      opacity: 0,
      duration: 1
    }, "-=0.8")
    .from('[data-animate="cta"]', {
      scale: 0.95,
      opacity: 0,
      duration: 0.6
    }, "-=0.6");

    // 2. Sheen animation on the title
    gsap.to(".hero-title", {
      backgroundPosition: "200% 0",
      duration: 2,
      delay: 1,
      ease: "power2.inOut"
    });

    // 3. Responsive parallax
    const hero = document.querySelector(".hero-section");
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      gsap.to(hero, {
        rotationY: x,
        rotationX: -y,
        transformPerspective: 1200,
        duration: 0.6,
        ease: "power2.out"
      });
    });

    // 4. Button pulse on load
    gsap.from('[data-animate="cta"]', {
      scale: 1.2,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      delay: 1.8,
      ease: "power1.inOut"
    });
  });

  document.addEventListener('mousemove', (e) => {
    const hero = document.querySelector('.hero-section');
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;
    hero.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
});

    // Intro animation: fade + scale
    gsap.fromTo(heroSection, 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
    );

    // Animate background position slowly drifting in a loop
    gsap.to(heroSection, {
      backgroundPosition: "48px 48px", // from default 0 0 to 48px 48px for subtle movement
      duration: 40,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });

    // Mouse subtle parallax: shift background position slightly based on mouse
    window.addEventListener('mousemove', e => {
      const xPercent = e.clientX / window.innerWidth;
      const yPercent = e.clientY / window.innerHeight;

      // Calculate offset from center (range: -6 to +6 px)
      const offsetX = (xPercent - 0.5) * 12;
      const offsetY = (yPercent - 0.5) * 12;

      // GSAP animate background-position with offset + slow drifting base
      gsap.to(heroSection, {
        backgroundPosition: `${offsetX}px ${offsetY}px`,
        duration: 0.6,
        ease: "power3.out"
    });

  });