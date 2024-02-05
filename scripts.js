const navbar = document.querySelector('.Navbar')
const allLi = document.querySelectorAll('li')

const SectionAbout = document.querySelector('.SectionCenter')
const SectionResume = document.querySelector('.SectionCenter2')
const SectionGallery = document.querySelector('.SectionCenter3')
const SectionCertificate = document.querySelector('.SectionCenter4')

const Img = document.querySelector('.Background')
const Header = document.querySelector('Header')

function Inicial(params) {
    Img.classList.remove('hidden1')
    Img.classList.add('show1')

    Header.classList.remove('hidden2')
    Header.classList.add('show2')

}
Inicial()

allLi.forEach((li, index) => {

    li.addEventListener('click', e => {
        navbar.querySelector('.ButtonNB').classList.remove('ButtonNB')
        li.classList.add('ButtonNB')

       if (index === 0) {
            SectionAbout.classList.remove('hidden')
            SectionAbout.classList.add('show')

            SectionResume.classList.remove('show')
            SectionResume.classList.add('hidden')

            SectionGallery.classList.remove('show')
            SectionGallery.classList.add('hidden')

            SectionCertificate.classList.remove('show')
            SectionCertificate.classList.add('hidden')
            
        }
         if (index === 1) {
            SectionAbout.classList.remove('show')
            SectionAbout.classList.add('hidden')

            SectionResume.classList.remove('hidden')
            SectionResume.classList.add('show')

            SectionGallery.classList.remove('show')
            SectionGallery.classList.add('hidden')

            SectionCertificate.classList.remove('show')
            SectionCertificate.classList.add('hidden')

        }
        if (index === 2) {
            SectionAbout.classList.remove('show')
            SectionAbout.classList.add('hidden')

            SectionResume.classList.remove('show')
            SectionResume.classList.add('hidden')

            SectionGallery.classList.remove('hidden')
            SectionGallery.classList.add('show')

            SectionCertificate.classList.remove('show')
            SectionCertificate.classList.add('hidden')

        }
        if (index === 3) {
            SectionAbout.classList.remove('show')
            SectionAbout.classList.add('hidden')

            SectionResume.classList.remove('show')
            SectionResume.classList.add('hidden')

            SectionGallery.classList.remove('show')
            SectionGallery.classList.add('hidden')

            SectionCertificate.classList.remove('hidden')
            SectionCertificate.classList.add('show')


        } 

    })
    
});