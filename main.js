// file:///C:/Users/DELL/Desktop/HTML%20Instructions%20file/PRACTICE%20FOLDERS/Practice%20Project14-Balloon/index.html

// file:///C:/Users/DELL/Desktop/HTML%20Instructions%20file/PRACTICE%20FOLDERS/Practice%20Project18-house/index.html

// file:///C:/Users/DELL/Desktop/HTML%20Instructions%20file/PRACTICE%20FOLDERS/Practice%20Project16/index.html

// file:///C:/Users/DELL/Desktop/HTML%20Instructions%20file/PRACTICE%20FOLDERS/Practice%20Project17-Bootstrap-art/index.html


$(document).ready(function(){

    $('.bxslider').bxSlider({
        mode: "horizontal",
        moveSlides:1,
        slideMargin:40,
        infiniteLoop:true,
        minSlides:1,
        maxSlides:1,
        speed:1200,
    })
})


// const navLink = document.querySelectorAll('.nav ul li a');
// const sections = document.querySelectorAll('section');
// const pageHeight = window.pageYOffset;


// sections.forEach(section =>{
//     if(window.pageYOffset >= 0){
//         console.log('It is at this section', section.offsetTop , window.pageYOffset)
//     }
// })



const cardFront = document.querySelectorAll('.card-front');
const cardBack = document.querySelectorAll('.card-back');
const cardBtn = document.querySelectorAll('.navigation-btn');

cardBtn.forEach(btn =>{
    btn.addEventListener('click',()=>{
        btn.parentElement.parentElement.classList.toggle('change')
    })
})

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-wrapper');
const closeNav = document.querySelector('.close');

navToggle.addEventListener('click',()=>{
    nav.classList.add('show-nav');
})
closeNav.addEventListener('click',()=>{
    nav.classList.remove('show-nav');
})









// cardFront.forEach((card,index) =>{
//     if(card.classList.contains('front')){
//         card.classList.add('back');
//         card.classList.remove('front');
//         console.log(index,card)
//         cardBack.forEach(back =>{
//             back.classList.add('front');
//         })
//     }else if(card.classList.contains('back')){
//         cardBack.forEach(back =>{
//             back.classList.remove('front');
//             back.classList.add('back');
//         })
//         card.classList.remove('back');
//         card.classList.add('front');
//     }
// })