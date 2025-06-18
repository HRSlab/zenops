// js/animations.js - Versione Finale e Corretta

// js/animations.js - Versione con animazione Hero corretta e robusta

document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

  // --------------------------------------------------
    // 1. Animazione Hero Section (Versione Definitiva)
    // --------------------------------------------------
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButton = document.querySelector('.hero-section .button-primary');

    if (heroTitle && heroSubtitle && heroButton) {
        
        // Impostiamo lo stato iniziale di tutti gli elementi
        gsap.set(heroTitle, { autoAlpha: 0 });
        gsap.set(heroSubtitle, { autoAlpha: 0, y: 20 });
        gsap.set(heroButton, { autoAlpha: 0, y: 20 });
        
        // Creiamo una timeline per un controllo perfetto
        const heroTl = gsap.timeline({ delay: 0.3 });

        heroTl
            // 1. Facciamo apparire il titolo con un leggero zoom
            .to(heroTitle, {
                autoAlpha: 1,
                duration: 1.2,
                ease: "power3.out"
            })
            // 2. Facciamo apparire il sottotitolo
            .to(heroSubtitle, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.9") // Si sovrappone per un effetto più fluido
            // 3. Facciamo apparire il bottone
            .to(heroButton, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.7");
    }


    // --------------------------------------------------
    // 2. Animazione Pain Points Section
    // --------------------------------------------------
    const painPointsCards = document.querySelectorAll('.pain-points-section .card');
    if (painPointsCards.length) {
        gsap.to(painPointsCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".cards-grid",
                start: "top 85%",
            }
        });
    }
// js/animations.js

    // --- Animazione Services Section ---
    const serviceCards = gsap.utils.toArray('.service-card');

    if (serviceCards.length) {
        // Applichiamo un'animazione 'from' a ogni card
        serviceCards.forEach((card) => {
            gsap.from(card, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,      // L'animazione di ogni card parte quando la card stessa è visibile
                    start: "top 85%",   // Inizia quando l'85% della card entra nella schermata
                }
            });
        });
    }
    // --------------------------------------------------
    // 3. Animazione How It Works Section
    // --------------------------------------------------
    const processStepsContainer = document.querySelector('.process-steps');
    if (processStepsContainer) {
        const steps = gsap.utils.toArray('.step');
        
        const tlSteps = gsap.timeline({
            scrollTrigger: {
                trigger: processStepsContainer,
                start: "top 70%",
            }
        });

        tlSteps.to(processStepsContainer, { 
            '--line-scale': 1,
            duration: 1.5,
            ease: "power2.inOut"
        })
        .to(steps, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.3
        }, "-=1.2"); 
    }

    // --------------------------------------------------
    // 4. Animazione Why Us Section
    // --------------------------------------------------
    const whyUsSection = document.querySelector('.why-us-section');
    if (whyUsSection) {
        const oldWayCard = whyUsSection.querySelector('.old-way');
        const zenopsCard = whyUsSection.querySelector('.zenops-method');

        gsap.from(oldWayCard, {
            scrollTrigger: {
                trigger: whyUsSection,
                start: "top 80%",
            },
            opacity: 0, x: -50, duration: 1, ease: "power3.out"
        });

        gsap.from(zenopsCard, {
            scrollTrigger: {
                trigger: whyUsSection,
                start: "top 80%",
            },
            opacity: 0, x: 50, scale: 0.95, delay: 0.2, duration: 1, ease: "power3.out"
        });
    }
    
    // --------------------------------------------------
    // 5. Animazione Testimonials Section
    // --------------------------------------------------
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    if (testimonialCards.length) {
        gsap.to(testimonialCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".testimonials-grid",
                start: "top 85%",
            }
        });
    }
// js/animations.js

    // Animazione Final CTA Section
    const ctaSection = document.querySelector('.final-cta-section');
    if (ctaSection) {
        // Selezioniamo tutti gli elementi da animare
        const ctaElements = [
            ctaSection.querySelector('.cta-title'),
            ctaSection.querySelector('.cta-subtitle'),
            ctaSection.querySelector('.button-primary')
        ];

        gsap.to(ctaElements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2, // Effetto a cascata
            scrollTrigger: {
                trigger: ctaSection,
                start: "top 80%",
            }
        });
    }
}); // Unica parentesi di chiusura alla fine del file