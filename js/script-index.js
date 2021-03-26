

const btnNav = document.querySelector('#show-hide-menu'),
      NavMenuBgBlurr = document.querySelector('#NavMenu'),
      Navbar = document.querySelector('#navbars'),
      OpenCloseProfile = document.querySelector('#dropdown-profile'),
      ModalProfile = document.querySelector('.profile-modal'),
      ModalMasuk = document.querySelector('#Modal-Masuk'),
      btnOpenModalMasuk = document.querySelector('#btnOpenModalMasuk'),
      btnCloseModalLogin = document.querySelector('#btn-close-modal-login'),
      ModalRegister = document.querySelector('#Modal-Register'),
      btnOpenModalRegister = document.querySelector('#btnOpenModalRegister'),
      btnCloseModalRegister = document.querySelector('#btn-close-modal-register')

btnNav.addEventListener('click', ()=>{
    let CheckClassBgBlack = NavMenuBgBlurr.classList.contains("hidden")
    let NavbarMe = Navbar.classList.contains("hidden")
    CheckClassBgBlack ? NavMenuBgBlurr.classList.remove('hidden') : NavMenuBgBlurr.classList.add('hidden')
    NavbarMe ? Navbar.classList.remove('hidden') : Navbar.classList.add('hidden')
})

NavMenuBgBlurr.addEventListener('click', ()=>{
  NavMenuBgBlurr.classList.add("hidden")
  ModalProfile.classList.add('hidden')
})

OpenCloseProfile.addEventListener('click', ()=>{
  let CheckClassBgBlack = NavMenuBgBlurr.classList.contains("hidden")
  let CheckClassModalProfile = ModalProfile.classList.contains("hidden")
  CheckClassBgBlack ? NavMenuBgBlurr.classList.remove('hidden') : NavMenuBgBlurr.classList.add('hidden')
  CheckClassModalProfile ? ModalProfile.classList.remove('hidden') : ModalProfile.classList.add('hidden')
})

btnOpenModalMasuk.addEventListener('click', ()=>{ ModalMasuk.classList.remove('hidden') })

btnCloseModalLogin.addEventListener('click', ()=>{ ModalMasuk.classList.add('hidden') })

btnOpenModalRegister.addEventListener('click', ()=>{ ModalRegister.classList.remove('hidden') })

btnCloseModalRegister.addEventListener('click', ()=>{ ModalRegister.classList.add('hidden') })

const btnSlideDesc = document.querySelectorAll('.btn-slide-desc'),
      escDom = document.querySelector('.esc-dom')
      
const runSlideDesc = (slideItem = 1)=>{
        let elem = escDom.children

        if (slideItem == 1) {
            elem[0].classList.remove('hidden')
            elem[1].classList.add('hidden')
            elem[2].classList.add('hidden')
            elem[3].classList.add('hidden')
        } else if(slideItem == 2) {
            elem[0].classList.add('hidden')
            elem[1].classList.remove('hidden')
            elem[2].classList.add('hidden')
            elem[3].classList.add('hidden')
        } else if(slideItem == 3) {            
            elem[0].classList.add('hidden')
            elem[1].classList.add('hidden')
            elem[2].classList.remove('hidden')
            elem[3].classList.add('hidden')
        } else {
            elem[0].classList.add('hidden')
            elem[1].classList.add('hidden')
            elem[2].classList.add('hidden')
            elem[3].classList.remove('hidden')
        }    
}

for (let btn of btnSlideDesc) {
    btn.addEventListener('click', (e)=>{
        let slideItem = e.target.dataset.slide 
        runSlideDesc(slideItem)
    })
}

runSlideDesc()