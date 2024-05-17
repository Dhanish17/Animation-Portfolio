function revealToSpan(){
document.querySelectorAll(".reveal")
.forEach(function(elem){

    let parent = document.createElement("span");
    let child = document.createElement("span");

    parent.classList.add("parent");
    child.classList.add("child");

    child.innerHTML= elem.innerHTML;
    parent.appendChild(child);

    elem.innerHTML ="",
    elem.appendChild(parent);

})
}

revealToSpan();

var tl = gsap.timeline();
tl
.from(".child span",
    {
        x : 100,
        duration : 1.4,
        stagger :.2,
        
        ease: Circ.easeInOut

    }
)


.to(".parent .child",
    {
        y : "-100%",
        duration : 1.5,
        ease: Circ.easeInOut

    }
)

.to("#loader",
    {
       height : 0,
        duration : 1,
        ease: Power3.easeInOut

    }
)

.to("#green",
    {
       height : "100%",
        duration : 1,
        delay :-1.5,
        top : 0,
        ease: Power3.easeInOut

    }
)
.to("#green",
    {
       height : "0%",
        duration : 1,
        top : 0,
        delay : -.26,
        ease: Power3.easeInOut

    }
)

var crsr = document.querySelector("#main")

var h4all = document.querySelectorAll('.bgc')
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.backgroundColor="#14CF93"
    })

})
h4all.forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
       
        crsr.style.backgroundColor="#f1f1f1"
    })

})


