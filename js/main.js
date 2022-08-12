//Vender sidebar js

let arrow = document.querySelectorAll('.arrow');
let logoDetail = document.querySelector('.logo-details')

for (let i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener('click', function(e) {
        let arrowParent = e.target.parentElement.parentElement;
        console.log(arrowParent);
        arrowParent.classList.toggle('showMenu')
    });
}

let sidebar = document.querySelector('.sidebar');
let sidebarBtn = document.querySelector('.bx-menu');
console.log(sidebar, sidebarBtn);
sidebarBtn.addEventListener('click', function() {
    sidebar.classList.toggle('close');
    logoDetail.style.height = '1rem';
    // logoDetail.style.marginTop = '3rem';
});

function myFunction(x) {
    if (x.matches) { // If media query matches
        sidebar.classList.add('close');
    }
}
var x = window.matchMedia("(max-width: 600px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes