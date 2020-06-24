

document.addEventListener('DOMContentLoaded', firstQuery)
const heroTheatre = document.querySelector('.hero-theatre');
const theatreNavLink = document.querySelector('.theatre-nav-link');
const heroPhotgrphy = document.querySelector('.hero-photography');
const photgrphyNavLink = document.querySelector('.photography-nav-link');
const heroVideos = document.querySelector('.hero-videos');
const videosNavLink = document.querySelector('.videos-nav-link');
const heroMusic = document.querySelector('.hero-music');
const musicNavLink = document.querySelector('.music-nav-link');
const heroAboutUs = document.querySelector('.hero-about-us');
const aboutUsNavLink = document.querySelector('.about-us-nav-link');
const heroContact = document.querySelector('.hero-contact');
const contactNavLink = document.querySelector('.contact-nav-link');

function firstQuery(){
    const query1kPx = window.matchMedia("(min-width:1000px)");

    if (query1kPx.matches){
        
        theatreNavLink.addEventListener('mouseover', () => {
            heroTheatre.style.opacity = '1';
        });
        theatreNavLink.addEventListener('mouseout', () => {
            heroTheatre.style.opacity = '0';
        });

        
        photgrphyNavLink.addEventListener('mouseover', () => {
            heroPhotgrphy.style.opacity = '1';
        });
        photgrphyNavLink.addEventListener('mouseout', () => {
            heroPhotgrphy.style.opacity = '0';
        });

        videosNavLink.addEventListener('mouseover', () => {
            heroVideos.style.opacity = '1';
        });
        videosNavLink.addEventListener('mouseout', () => {
            heroVideos.style.opacity = '0';
        });

        musicNavLink.addEventListener('mouseover', () => {
            heroMusic.style.opacity = '1';
        });
        musicNavLink.addEventListener('mouseout', () => {
            heroMusic.style.opacity = '0';
        });

        aboutUsNavLink.addEventListener('mouseover', () => {
            heroAboutUs.style.opacity = '1';
        });
        aboutUsNavLink.addEventListener('mouseout', () => {
            heroAboutUs.style.opacity = '0';
        });

        contactNavLink.addEventListener('mouseover', () => {
            heroContact.style.opacity = '1';
        });
        contactNavLink.addEventListener('mouseout', () => {
            heroContact.style.opacity = '0';
        });

    }
};

console.log(heroMusic)