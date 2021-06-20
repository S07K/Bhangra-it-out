if(window.innerWidth <= 1125 )
{
    document.querySelector("#links").classList.add("nav-links");
}

const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links div");

    
    burger.addEventListener("click", function slide() {
        //Toggle Navlinks
        nav.classList.toggle("nav-active");

        //Transform Links
        navLinks.forEach((link, i)=>{
            if(link.style.animation){
                link.style.animation = "";
            }
            else{
                link.style.animation = 'navLinkFade 1.5s ease forwards' ;
            }
        });

        //burger animation
        burger.classList.toggle("toggle")
    });

}
navslide();


var nav = document.querySelector(".navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
       nav.classList.add("scrolled");
    }
    else 
    {
        nav.classList.remove("scrolled");
    }
    },false); 