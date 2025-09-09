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
  
gsap.registerPlugin(ScrollTrigger);

gsap.from('.member > *', {
  x: -300,
  opacity: 0,
  duration: 0.9,
  stagger: 0.8,  
  scrollTrigger: {
    trigger: '.member',
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: true,
  }
});
// ============Player===============


gsap.from('.pd1 > *', {
  x: 300,
  opacity: 0,
  duration: 1.5,   
  stagger: 0.9,        
  ease: "power2.out",  
  scrollTrigger: {
    trigger: '.pd1',
    scroller: 'body',
    start: 'top 45%',  
    end: 'top 1%',    
    scrub: 1.5,       
      
  }
});
gsap.to("nav", {
  opacity: 1,
  backgroundColor: "#070a2993",
  scrollTrigger: {
      trigger: 'nav',
    scroller: 'body',
    start: 'top -30%',
    end: 'bottom bottom',
    scrub: 2,
  }
});
