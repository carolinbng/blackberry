
const showProducts = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-products')
        })
    }
}
showProducts('nav-toggle','nav-menu')
    

    



const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-products')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


    



const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

/*================Hintergrund ändern Header=======================*/
function scrollHeader(){
    const nav = document.getElementById('header')
     if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
   
window.addEventListener('scroll', scrollHeader)





function scrollTop(){
    const scrollTop = document.getElementById('scroll-top')
     if(this.scrollY >= 560) scrollTop.classList.add('scroll-top'); else scrollTop.classList.remove('scroll-top')
}
   
window.addEventListener('scroll', scrollTop)
   



/*================ Scroll Animation ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal(`.home_data, .home_img, 
.about_data, .about_img, 
.services_content, .products_content
.brand_data, .brand_img,
.contact_data, .contact_button
.footer_content`, {
    interval: 150
})