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
// let mpic1 = document.querySelector('.mpic');
// let gtp = document.querySelector('.gtp');
// let gtp1 = document.querySelector('.gtp1');
// let mpicblur1 = document.querySelector('.mpic-blur1');
// mpic1.addEventListener('mouseenter',()=>{
//     gtp.style.color='#0000ff';
//         gtp1.style.color='#0000ff';
//         mpicblur1.style.filter='opacity(100)'
// })
// mpic1.addEventListener('mouseleave',()=>{
//     gtp.style.color='white';
//         gtp1.style.color='white';
//         mpicblur1.style.filter='opacity(0)'
// })

gsap.registerPlugin(ScrollTrigger);

gsap.from('.member > *', {
  x: -300,
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