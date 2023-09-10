/** -=- Scroolto -=- **/ 

document.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = 0;

        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

/* -=- Scroll yo -=- */
let btnUP = document.querySelector('.scrollTop');

btnUP.addEventListener('click', function(){
    scrollToY(0)
})

document.addEventListener('scroll', function(){
    let cl = btnUP.classList;
    let threshold = window.innerHeight / 2;
    window.scrollY > threshold ? cl.add('buttonUP-open') : cl.remove('buttonUP-open');
});

function scrollToY(top){
    window.scrollTo({
        top,
        behavior: "smooth"
    })
}

/* -=- Button -=- */

var clr = document.querySelector("input");
var btn = document.querySelector("button");
clr.addEventListener("input", (ev) => {
    btn.style.setProperty( "--clr", ev.target.value);
});

setTimeout(() => {
    btn.classList.add( "over" );
    setTimeout(()=> {
        btn.classList.remove( "over" );
    },2500);
}, 500);