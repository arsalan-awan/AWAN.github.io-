const herosection = document.querySelector(".section-hero");

// creating a responsive navbar component

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
    headerElem.classList.toggle("active");
});

// creating a response sticky navbar

const observer = new IntersectionObserver (
    (entries) => {
    const ent = entries[0];
    // console.log(ent);
    !ent.isIntersecting
   ? document.body.classList.add("sticky")
   : document.body.classList.remove("sticky");
},  
{
     root: null,
     threshold: 0,
    }
);

observer.observe(herosection);




// creating a portfolio tabbed component

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem =document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn"))return; 

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    // to find the number in data attr

    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) =>curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove("p-image-not-active"));
    
    //p_img_elem
    //p-btn--1
}); 

// swiper js code 

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
autoplay: {
    delay:2500,
    
},
     pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

const myjsmedia = (widthsize) => {
 if (widthsize.matches) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
   
      });
    }else{
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 2,
            spaceBetween: 30,
       
          });
        
    }
}

const widthsize = window.matchMedia("(max-width: 780px)");
// call listener funtion at run time
myjsmedia(widthsize);
// attach listener funtion on state change
widthsize.addEventListener("change", myjsmedia);


  // Scrool to top button

  const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrolltop-style");

scrollElement.innerHTML =` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scrollElement);

const scrolltop = () => {
    herosection.scrollIntoView({behavior:"smooth"});
};

scrollElement.addEventListener("click",scrolltop);



const worksection = document.querySelector('.section-work-data');
 const workObserver = new IntersectionObserver((entries, observer) => {
     const [entry] = entries;
     console.log(entry);

    if(!entry.isIntersecting) return;
    
   // animate number counter

const counterNum = document.querySelectorAll(".counter-numbers");

const speed = 200;

counterNum.forEach((curElem) => {

    const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);
       //console.log(targetNumber);
       const initialNum = parseInt(curElem.innerText);
       //console.log(initialNum);

       const incrementNumber =  Math.trunc(targetNumber / speed);
       //console.log(incrementNumber);

       if(initialNum < targetNumber) {
        curElem.innerText = `${ initialNum + incrementNumber}+`;

        setTimeout( updateNumber, 10);
       }
    };  



    updateNumber();
});
  
   observer.observe(worksection);



 }, {
    root : null,
    threshold: 0,
 });

workObserver.observe(worksection);














