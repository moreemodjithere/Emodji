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
