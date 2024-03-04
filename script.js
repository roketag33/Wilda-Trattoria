const menuHamburger = document.querySelector(".menubg")
const navLinks = document.querySelector(".navlinks")

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})
// const chargement = document.querySelector(".chargement");


// setTimeout(function () {
//     $(".chargement");
// }, 3000);

// if (chargement === )
// chargement.display = none;
// else

// $(document).ready(function () {
//     $(chargement).fadeOut(5000, function () {
//         $(nosProduits).show(1000);
//     });
// })


setTimeout(function () {
    $('.chargement').fadeOut();
}, 4000);

//MAKE CLICKABLE div contact-btn-home
const contactBtnHome = document.querySelector("#contact-btn-home");
const contactBtncontact = document.querySelector("#contact-btn-contact");
const contactBtnlocalisation = document.querySelector("#contact-btn-localisation");
const contactBtnrecrutement = document.querySelector("#contact-btn-recrutement");

contactBtnrecrutement.addEventListener("click", () => {
  window.location.href = "mailto:wildatrattoria@gmail.com";
});

contactBtnlocalisation.addEventListener("click", () => {
    window.location.href = "https://goo.gl/maps/wNLeikvbGunC4SnM6";
    });
