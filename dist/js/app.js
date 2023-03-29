gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const scroller = ScrollSmoother.create({
    wrapper: '.scroll-wrapper',
    content: '.scroll-content',
    smooth: 1.5,
    effects: true,
})
