let flag = 2;
function control(x) {
    flag = flag + x;
    slideshow(flag)
}

function slideshow(num) {
    let slide = document.querySelectorAll(".slide")
    if (num == slide.length) {
        num = 0;
        flag = 0;
    }
    if (num < 0) {
        num = slide.length - 1;
        flag = slide.length - 1;
    }

    for (let y of slide) {
        for (let y of slide) {
            y.style.display = "none"
        }
        console.log(slide[num])
        slide[num].style.display = "block"
    }
}
slideshow(flag)

////////////////////////////////////////////

let burger = document.querySelector(".hamburger")
let navigation = document.querySelector(".navigationlink")
let header = document.querySelector("header")
burger.addEventListener("click", () => {
    console.log("hi")
    navigation.classList.toggle('display');
    header.classList.toggle("height")

})

/////////GSAP///////////////////////
let tl = gsap.timeline()
tl.from(".section8 img", {
    x: -100,
    // scale:0,
    delay: 1,
    opacity: 0,
    duration: 1,
    yoyo:false,
    // stagger:.2,
    scrollTrigger:{
        trigger:".section8 img",
        scroller:"body",
        // markers:true,
        // start:"top 60%",
        // end:"top 0%",
scrub:true,


    }  
    
})