gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const originalSpeeds = [];
const targets = gsap.utils.toArray('.reset-on-mobile');
targets.forEach(t => originalSpeeds.push(t.getAttribute('data-speed')))
const media = '(max-width: 599px)';
const mediaQueryList = window.matchMedia(media);

console.log(originalSpeeds);

const mm = gsap.matchMedia();

if (ScrollTrigger.isTouch !== 1) {
    const scroller = ScrollSmoother.create({
        wrapper: '.scroll-wrapper',
        content: '.scroll-content',
        smooth: 1.5,
        effects: true,
    })

    gsap.to('.hero', {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: 200,
            end: 820,
            scrub: true
        }
    })

    const galleryItemsLeft = gsap.utils.toArray('.gallery__side--left .gallery__item');

    galleryItemsLeft.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true
            }
        })
    })

    const galleryItemsRight = gsap.utils.toArray('.gallery__side--right .gallery__item');

    galleryItemsRight.forEach(item => {
        gsap.fromTo(item, {
            opacity: 0,
            x: 50
        }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                scrub: true
            }
        })
    })
}