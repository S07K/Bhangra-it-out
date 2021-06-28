if(window.innerWidth <= 1125 )
{
    document.querySelector("#nav-right ul").classList.add("nav-links");
    var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
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

// Get the modal
var modal1 = document.getElementById("Modal1");
var modal2 = document.getElementById("Modal2");

// Get the button that opens the modal
var btn1 = document.getElementById("Btn1");
var btn2 = document.getElementById("Btn2");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
  }

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
  }

// When the user clicks anywhere outside of the modal, close it
if(modal1.style.display == "block"){
    window.onclick = function(event) {
        if (event.target == modal1) {
          modal1.style.display = "none";
        }
      }
}

if(modal2.style.display == "block"){
    window.onclick = function(event) {
        if (event.target == modal2) {
          modal2.style.display = "none";
        }
      }
}
