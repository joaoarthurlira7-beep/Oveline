
        document.addEventListener('DOMContentLoaded', () => {

            /* -----------------------------------------------
               1. FAQ accordion
            ----------------------------------------------- */
            const faqItems = document.querySelectorAll('.faq-item');
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                question.addEventListener('click', () => {
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) otherItem.classList.remove('active');
                    });
                    item.classList.toggle('active');
                });
            });

            /* -----------------------------------------------
               2. Add .anim-el to section headings & key
                  elements throughout the page (non-hero)
            ----------------------------------------------- */
            const sectionTargets = [
                /* Stats */
                '.stat-item',
                /* Differentials */
                '.diff-subtitle', '.diff-title', '.diff-card', '.btn-differentials',
                /* About */
                '.about-subtitle', '.about-title', '.about-text', '.about-list', '.btn-about',
                /* Methodology */
                '.method-subtitle', '.method-title', '.method-text', '.btn-method', '.step-card',
                /* Products */
                '.section-header', '.product-card',
                /* Team */
                '.team-subtitle', '.team-title', '.team-card',
                /* FAQ */
                '.faq-subtitle', '.faq-title', '.faq-item',
                /* Footer */
                '.footer-top', '.footer-col'
            ];

            sectionTargets.forEach(selector => {
                document.querySelectorAll(selector).forEach((el, i) => {
                    if (!el.classList.contains('anim-el')) {
                        el.classList.add('anim-el');
                        el.dataset.delay = i * 80;
                    }
                });
            });

            /* -----------------------------------------------
               3. HERO: fade-in on load with stagger
            ----------------------------------------------- */
            const heroEls = document.querySelectorAll('[data-hero="true"]');
            heroEls.forEach(el => {
                const delay = parseInt(el.dataset.delay || 0);
                setTimeout(() => el.classList.add('is-visible'), delay + 100);
            });

            /* -----------------------------------------------
               4. SECTION elements: IntersectionObserver
                  fade-in when entering viewport
            ----------------------------------------------- */
            const nonHeroEls = document.querySelectorAll('.anim-el:not([data-hero="true"])');

            const enterObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const el = entry.target;
                    const delay = parseInt(el.dataset.delay || 0);
                    if (entry.isIntersecting) {
                        el.classList.remove('is-exiting');
                        setTimeout(() => el.classList.add('is-visible'), delay % 400);
                    }
                });
            }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

            nonHeroEls.forEach(el => enterObserver.observe(el));

            /* -----------------------------------------------
               5. HERO elements: blur-out as user scrolls
                  down (scroll-progress based)
            ----------------------------------------------- */
            const heroSection = document.querySelector('.hero');

            function onScroll() {
                if (!heroSection) return;
                const heroHeight = heroSection.offsetHeight;
                const scrollY = window.scrollY;
                const progress = Math.min(scrollY / (heroHeight * 0.55), 1);

                heroEls.forEach(el => {
                    if (progress > 0.01) {
                        const opacity = 1 - progress;
                        const blurVal = progress * 14;
                        const translateY = -progress * 20;
                        el.style.transition = 'none';
                        el.style.opacity = Math.max(0, opacity);
                        el.style.filter = `blur(${blurVal}px)`;
                        el.style.transform = `translateY(${translateY}px)`;
                    } else {
                        el.style.opacity = '';
                        el.style.filter = '';
                        el.style.transform = '';
                    }
                });
            }

            window.addEventListener('scroll', onScroll, { passive: true });
        });
    
