function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  
    // for tablet smooth
    tablet: { smooth: true },
  
    // for mobile
    smartphone: { smooth: true }
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  
}
loco();
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    copyText.style.outline="none";
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
  } 
document.getElementById("btn").addEventListener("click",function()
{
    btn.textContent="Copied!";
})
gsap.from(".main-content h1",{
        y:200,
        ease: "power4.out",
        delay: 1,
        duration:2,
        skewY: 7,
        stagger: {
        amount: 0.3
        }
},"nan")
gsap.to(".main-content button",{
      opacity:1,
      delay: 1,
      duration:2,
      ease: "power4.out",
      scale:1,
},"nan")
gsap.to(".main-content img",{
   opacity:1,
   delay: 1,
   duration:2,
   ease: "power4.out",
   scale:1.1,
},"nan")
gsap.to(".main-content .name",{
   scale:1,
   opacity:1,
   delay: 1,
   duration:2,
   ease: "power4.out",
},"nan")
gsap.from(".header",{
       y:-300,
       duration:3,
       stagger: {
        amount: 0.7
        }
},"nan")
