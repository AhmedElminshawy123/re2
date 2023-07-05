const btn=document.querySelector('header .container .bar i');
const slider=document.querySelector('.slider');

const close =document.querySelector('.slider .main-nav .close');
btn.addEventListener('click',()=>{
    slider.classList.add('active')
})
close.addEventListener('click',()=>{
    slider.classList.remove('active')
})
window.addEventListener('scroll',()=>{
    slider.classList.remove('active')
})

