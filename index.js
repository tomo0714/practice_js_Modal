// DOM
const a = document.getElementsByTagName('a');
const body = document.getElementsByTagName('body');

// fanction
function app(el) {
    body[0].append(el);
}

function appImg(el, img, href) {
    el.appendChild(img);
    img.setAttribute('src', href);
    img.width = 640;
    img.height = 420;
}

function fadeIn(el, duration) {
    el.style.visibility = 'hidden';
    el.style.visibility = 'visible';
    el.animate([{opacity: 0}, {opacity: 1}], duration);
}

function fadeOut(el, duration) {
    el.style.opacity = 1;
    el.style.transitionProperty = 'opacity';
    el.style.transitionDuration = duration + 'ms';
    el.style.opacity = 0;
    setTimeout(function (){
        el.remove();
    }, duration)
}

function modal(e) {
    e.preventDefault(); 
    // createElement  
    const bg = document.createElement('div');
    const photo = document.createElement('div');
    const img = document.createElement('img');
    bg.id = 'bg';
    photo.id = 'photo';
    // append
    app(bg);
    app(photo);
    const href = this.href;
    appImg(photo, img, href);
    // animation
    fadeIn(bg, 500);
    fadeIn(photo, 500);
    bg.addEventListener('click', function () {
        fadeOut(bg, 500);
        fadeOut(photo, 500);
    });
}

// event
for(let i = 0; i < a.length; i++) {
    a[i].addEventListener('click', modal);
}