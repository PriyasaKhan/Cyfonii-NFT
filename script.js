let a = document.querySelector('.wwe');

let b = document.querySelector('.p2');

b.addEventListener('mouseenter', () => {
    a.style.display= 'flex';
})


a.addEventListener('mouseleave', () => {
    a.style.display= 'none';
})      

// =========landing page===========

gsap.from(".hed span", {
  opacity: 0,
  y: 30,
  duration: 0.3,   
  ease: "power2.out",
  stagger: 0.12,
});


gsap.from(".hp, .btn2, .jh", {
  opacity: 0,
  y: 30,
  duration: 0.2,
  ease: "power2.out",
  stagger: 0.2,
  delay: 2        
});
// ============Player===============


gsap.registerPlugin(ScrollTrigger);

gsap.from('.pd1 > *', {
  x: 300,
  opacity: 0,
  duration: 1.5,      
  stagger: 0.3,       
  ease: "power2.out",  
  scrollTrigger: {
    trigger: '.pd1',
    scroller: 'body',
    start: 'top 70%',   
    end: 'top 20%',    
    scrub: 2,          
         
  }
});

// ==========road map===============
gsap.registerPlugin(ScrollTrigger);

gsap.from('.first-line > *', {
  x: 200,
  opacity: 0,
  duration: 0.9,
  stagger: 1.5,
  ease: "power2.out",
  scrollTrigger: {
    trigger: '.first-line',
    scroller: 'body',
    start: 'top 60%',
    end: 'top 20%',
    scrub: true, 
  }
});
gsap.from('.first-line2 > *', {
  x: -200,
  opacity: 0,
  duration: 0.3,
  stagger: 0.9,
  
  scrollTrigger: {
    trigger: '.first-line2',
    scroller: 'body',
    start: 'top 75%',
    end: 'top 20%',
    scrub: true, 
  }
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
    start: 'top 65%',
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
     start: 'top 65%',
    end: 'top 20%',
    scrub: true, 
  }
});
gsap.from('.right-f  > *', {
  x: 300,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.right-f ',
    scroller: 'body',
     start: 'top 65%',
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
    start: 'top 65%',
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
 start: 'top 65%',
    end: 'top 20%',
    scrub: true, 
  }
});

// ==========member=============
gsap.registerPlugin(ScrollTrigger);

gsap.from('.member > *', {
  y: 300,
  opacity: 0,
  duration: 0.9,
  stagger: 0.5,  
  scrollTrigger: {
    trigger: '.member',
    scroller: 'body',
    start: 'top 80%',
    end: 'top 20%',
    scrub: true,
    
  }
});


// ============about==============

gsap.registerPlugin(ScrollTrigger);

gsap.from('.about-rightside > *', {
  x: 300,
  opacity: 0,
  duration: 0.9,
  stagger: 0.5,  
  scrollTrigger: {
    trigger: '.about-rightside',
    scroller: 'body',
    start: 'top 75%',
    end: 'top 20%',
    scrub: true,
    
  }
});

// ============pic=============
// gsap.from('.cld  > *', {
//   x: -300,
//   opacity: 0,
//   duration: 0.5,
//   stagger: 1,
//   scrollTrigger: {
//     trigger: '.cld',
//     scroller: 'body',
//     start: 'top 85%',
//     end: 'top 10%',
//     scrub: true, 
   
//   }
// });

// =============Complete Solutions for your NFT==========

let s1 = document.querySelector('.s1');
let op = document.querySelector('.op');
let s2 = document.querySelector('#s2');
let op2 = document.querySelector('#op2');
let s3 = document.querySelector('#s3');
let op3 = document.querySelector('#op3');
let s4 = document.querySelector('#s4');
let op4 = document.querySelector('#op4');

s1.addEventListener('mouseenter',()=>{
op.style.color='white'
})
s1.addEventListener('mouseleave',()=>{
op.style.color='rgb(128 128 128 / 54%)'
})

s2.addEventListener('mouseenter',()=>{
op2.style.color='white'
})
s2.addEventListener('mouseleave',()=>{
op2.style.color='rgb(128 128 128 / 54%)'
})
s3.addEventListener('mouseenter',()=>{
op3.style.color='white'
})
s3.addEventListener('mouseleave',()=>{
op3.style.color='rgb(128 128 128 / 54%)'
})
s4.addEventListener('mouseenter',()=>{
op4.style.color='white'
})
s4.addEventListener('mouseleave',()=>{
op4.style.color='rgb(128 128 128 / 54%)'
})

gsap.registerPlugin(ScrollTrigger);

gsap.from('.dis1 > *', {
  x: -300,
  opacity: 0,
  duration: 1.2,       
  stagger: 0.3,        
  ease: "power2.out",  
  scrollTrigger: {
    trigger: '.dis1',
    scroller: 'body',
    start: 'top 80%',   
    end: 'top 20%',    
    scrub: 1.5,                
  }
});



// gsap.from('.ss1 img', {
//   y: -300,
//   opacity: 0,
//   duration: 0.9,
//   stagger: 0.5,  
//   rotate:360,
// });


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

  let bar = document.querySelector('#mnu');
  let bar2 = document.querySelector('.bar2');
  let cross = document.querySelector('#cross');

  bar.addEventListener('click', () => {
      bar2.style.display='flex';
  });

  cross.addEventListener('click', () => {
       bar2.style.display='none';
  });