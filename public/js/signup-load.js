const h1s = document.getElementsByTagName("h1")
const input = document.getElementsByTagName("input")

function addAnimationH1(element) {
    element.classList.add("fadeInLeft-animation", "signup-visible");
    element.classList.remove('signup-invisible');

}

function addAnimationInput(element) {
    element.classList.add("fadeInRight-animation", "signup-visible");
    element.classList.remove('signup-invisible');

}

window.onload = function() {
    for(let i = 0; i < h1s.length; i++) {
        setTimeout(() => {
            addAnimationH1(h1s[i]);
            addAnimationInput(input[i]);
        }, i * 500); // Change the delay time as needed
    }
}