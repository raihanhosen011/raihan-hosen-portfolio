/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener('click',() => {
    navMenu.classList.add('show-menu')      
  })  
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener('click',() => {
     navMenu.classList.remove('show-menu')
  })  
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.querySelector('.skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){ 
  let itemClass = this.parentNode.className

  for (let i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close'
  }

  if (itemClass == 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }

  if (itemClass == 'skills__content skills__open') {
     this.parentNode.className = 'skills__content skills__close'
  }
  
}

skillsHeader.forEach((el) => {
  el.addEventListener('click',toggleSkills)
})

/*==================== SERVICES MODAL ====================*/
const modalView = document.querySelectorAll('.service__modal'),
      modalBtn = document.querySelectorAll('.service__button'),
      modalClose = document.querySelectorAll('.service__modal-close')

let modal = function (modalClick) {
   modalView[modalClick].classList.add('active__modal')
}

modalBtn.forEach((modalBtn,i) => {
   modalBtn.addEventListener('click',() => [
     modal(i) 
   ])
})

modalClose.forEach((modalClose) => {
   modalClose.addEventListener('click',() => {
     modalView.forEach((modalView) => {
       modalView.classList.remove('active__modal')
     })
   })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container',{
   cssMode:true,
   loop:true,
   navigation:{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   pagination: {
      el : '.swiper-pagination',
      clickable:true
   }
})

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container',{
  loop:true,
  grabCursor:true,
  spaceBetween:48,
  pagination: {
     el : '.swiper-pagination',
     clickable:true,
     dynamicBullets:true,
  },
  breackpoints:{
    568:{
      slidesPerView: 2,
    }
  }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active__link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active__link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollTop(){
  const scrollTop = document.querySelector('.scroll__top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
