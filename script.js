const tl = gsap.timeline()
tl.to("#slide",{
    right:0,
    duration:0.5

})
tl.from("#slide h1",{
    x:50,
    opacity:0,
    delay:0.5,
    duration:0.5,
    stagger:0.3,

})
tl.pause();

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click",()=>{
    tl.play();
    close.style.display="inherit";
})
close.addEventListener("click",()=>{
    tl.reverse();
})