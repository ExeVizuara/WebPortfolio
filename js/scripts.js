// -MOSTRAR MENU-
const navMenu = document.getElementById('nav-menu'),
                navToggle = document.getElementById('nav-toggle'),
                navClose = document.getElementById('nav-cerrar')

// -VALIDACION-

// -MOSTRAR MENU-
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// -OCULTAR MENU-
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// -REMOVER MENU-
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// -MOSTRAR HEADER-
// const shadowHeader = () =>{
//     const header = document.getElementById('header')
//     this.scrollY >= 50 ? header.classList.add('shadow-header')
//                         : header.classList.remove('shadow-header')
// }
// window.addEventListener('scroll', shadowHeader)

// -SCRIPTS EMAIL-
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message'),
        contactEnviado = document.getElementById('mensaje-enviado')


const sendEmail = (e) =>{
    e.preventDefault()
    emailjs.sendForm(
        'service_cinaqei',
        'template_0cvanic', 
        '#contact-form', 
        'p6qJBOtNTBUkLtu-F'
    )
    .then(() =>{
        contactMessage.textContent = ' Mensaje enviado correctamente'
        contactEnviado.style.display = 'block'
        setTimeout(() =>{
            contactMessage.textContent = ''
            contactEnviado.style.display = 'none'
        }, 5000)

        contactForm.reset()
    }, () =>{
        contactMessage.textContent = ' ERROR: Mensaje no enviado'
    })
}

contactForm.addEventListener('submit', sendEmail)

// -SCROLL ARRIBA-
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// -MODO OSCURO-
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'
                    
if (selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// -SCROLL REVEAL-
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__perfil, .about__image, .contact__mail', {origin:'right'})
sr.reveal('.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data' , {origin: 'left'})
sr.reveal('.services__card, .projects__card', {interval: 100})

 



// -SCROLL ACTIVAR SECCIONES-
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = windows.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop -58,
                sectionId = current.getAttribute('id'),
                sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
windows.addEventListener('scroll', scrollActive)
