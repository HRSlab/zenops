// js/animations.js - Final Version

document.addEventListener("DOMContentLoaded", () => {
    // Make sure GSAP and ScrollTrigger are available
    if (typeof gsap === "undefined") {
        console.error("GSAP is not loaded.");
        return;
    }
    gsap.registerPlugin(ScrollTrigger);

    // --- 1. Interactive Aurora Background ---
    const blobs = gsap.utils.toArray('.aurora-blob');
    if (blobs.length) {
        const xTo = gsap.quickTo(blobs, "x", { duration: 1.5, ease: "power3" });
        const yTo = gsap.quickTo(blobs, "y", { duration: 1.5, ease: "power3" });

        window.addEventListener("mousemove", e => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xMovement = (clientX / innerWidth) * 100 - 50;
            const yMovement = (clientY / innerHeight) * 100 - 50;
            xTo(xMovement);
            yTo(yMovement);
        });
    }

    // --- 2. Hero Section Animation ---
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-section .button-primary');

    if (heroTitle && heroSubtitle && heroButton) {
        const heroTl = gsap.timeline({ delay: 0.2 });
        heroTl
            .from(heroTitle, { autoAlpha: 0, y: 20, duration: 1.0, ease: "power3.out" })
            .from(heroSubtitle, { autoAlpha: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.8")
            .from(heroButton, { autoAlpha: 0, y: 20, duration: 0.8, ease: "power3.out" }, "-=0.6");
    }

    // --- 3. Generic Card Fade-in Animation on Scroll ---
    const animateSectionCards = (selector) => {
        const cards = gsap.utils.toArray(selector);
        if (cards.length === 0) return;
        cards.forEach(card => {
            gsap.from(card, {
                autoAlpha: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                }
            });
        });
    };
    animateSectionCards('.pain-points-section .card');
    animateSectionCards('.service-card');
    animateSectionCards('.testimonial-card');


    // --- 4. "How It Works" Section Animation ---
    const processStepsContainer = document.querySelector('.process-steps');
    if (processStepsContainer) {
        gsap.to(processStepsContainer, {
            '--line-scale': 1,
            ease: "none",
            scrollTrigger: {
                trigger: processStepsContainer,
                start: "top 70%",
                end: "bottom 70%",
                scrub: true
            }
        });
        const steps = gsap.utils.toArray('.step');
        steps.forEach(step => {
            gsap.from(step, {
                opacity: 0,
                x: -30,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: step,
                    start: "top 85%"
                }
            });
        });
    }

    // --- 5. "Why Us" Section Comparison Cards Animation ---
    const whyUsSection = document.querySelector('.why-us-section');
    if (whyUsSection) {
        gsap.from(whyUsSection.querySelector('.old-way'), {
            scrollTrigger: {
                trigger: whyUsSection.querySelector('.old-way'),
                start: "top 80%",
            },
            autoAlpha: 0, x: -50, duration: 1, ease: "power3.out"
        });
        gsap.from(whyUsSection.querySelector('.zenops-method'), {
            scrollTrigger: {
                trigger: whyUsSection.querySelector('.zenops-method'),
                start: "top 80%",
            },
            autoAlpha: 0, x: 50, duration: 1, delay: 0.2, ease: "power3.out"
        });
    }

    // --- 6. Final CTA Section Animation ---
    const ctaSection = document.querySelector('.final-cta-section');
    if (ctaSection) {
        gsap.from(ctaSection.querySelectorAll('.cta-title, .cta-subtitle, .button-primary'), {
            autoAlpha: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ctaSection,
                start: "top 80%",
            }
        });
    }

    // --- 7. Beam Border Hover Animation (Corrected Version) ---
    const animatedCards = document.querySelectorAll('.service-card');
    animatedCards.forEach(card => {
        const borderAnimation = gsap.to(card, {
            "--rotation": "360deg",
            duration: 4,
            ease: "none",
            repeat: -1,
            paused: true
        });

        card.addEventListener('mouseenter', () => {
            borderAnimation.play();
        });
        card.addEventListener('mouseleave', () => {
            borderAnimation.pause();
        });
    });
});