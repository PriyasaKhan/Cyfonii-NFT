let a = document.querySelector('.wwe');

let b = document.querySelector('.p2');

b.addEventListener('mouseenter', () => {
    a.style.display= 'flex';
})


a.addEventListener('mouseleave', () => {
    a.style.display= 'none';
})  

  let bar = document.querySelector('#mnu');
  let bar2 = document.querySelector('.bar2');
  let cross = document.querySelector('#cross');

  bar.addEventListener('click', () => {
      bar2.style.display='flex';
  });

  cross.addEventListener('click', () => {
       bar2.style.display='none';
  });
// =========faq section==============
gsap.registerPlugin(ScrollTrigger);

gsap.from('.faq1 > *', {
  x: -300,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.faq1',
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: true, 
  }
});
gsap.from('.left-f  > *', {
  x: -300,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.left-f ',
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: true, 
  }
});
gsap.from('.fl  > *', {
  x: -300,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.fl ',
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: true, 
  }
});
gsap.from('.c-left  > *', {
  x: -300,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.c-left ',
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: true, 
  }
});
gsap.to("nav", {
  opacity: 1,
  backgroundColor: "#070a29a7",
  scrollTrigger: {
      trigger: 'nav',
    scroller: 'body',
    start: 'top -30%',
    end: 'bottom bottom',
    scrub: 2,
  }
});







