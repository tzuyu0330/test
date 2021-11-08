var prevScrollpos = window.pageYOffset;
let triggered = false;
function listing(){
    triggered = true;
    let lists = document.querySelectorAll('.info li');
    lists.forEach((item, i) => {
        item.style.opacity = 1; 
    }) 
}

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos >= window.innerHeight*2 && !triggered){
        listing()
    }
    let navbar = document.querySelector('.navbar');
    if (prevScrollpos > currentScrollPos) {
        navbar.style.opacity = 1;
    } else {
        navbar.style.opacity = 0;   
    }
  prevScrollpos = currentScrollPos;
}

let thumbnails = document.getElementsByClassName('thumbnail');
let activeImages = document.getElementsByClassName('active');

for(let i=0; i < thumbnails.length; i++){
    thumbnails[i].addEventListener('click', function(){
        if(activeImages.length > 0){
            activeImages[0].classList.remove('active')
        }
        this.classList.add('active');
        document.getElementById('featured').src = this.src;
    })
}
let isRotated = false;
let infoButton = document.querySelector('.more-info');
infoButton.addEventListener('click', function(){
    let image = document.querySelector('.info img');
    let collapse = document.querySelector('#collapse')
    isRotated = !isRotated;
    if(!isRotated){
        image.style.transform = 'rotateX(0deg)';
        collapse.classList.remove('visible');
        collapse.classList.add('hidden');
    }
        
    else{
        image.style.transform = 'rotateX(-180deg)';
        collapse.classList.remove('hidden');
        collapse.classList.add('visible');
    } 
})

let container = document.querySelector('.slideshow>.container');
let pus = document.querySelector('.slideshow img');
function effect(){
    pus.style.transform = 'scale(1)'
    pus.style.top = '15%';
    pus.style.left = '5%'
}
let isHovered = false;
container.addEventListener('mouseenter', effect)
if(isHovered){
    container.removeEventListener('mouseenter', effect);
}

let slider = document.querySelector('.slider');
let expandIcon = document.querySelector('.slider i');
let isFull = false;
expandIcon.addEventListener('click', () =>{
    let pus = document.querySelector('.slideshow img');
    if(!isFull){
        slider.style.width = '100vh';
        slider.style.height = '100vh';
        slider.style.margin = 'auto';
        pus.style.transform = 'scale(0.5)'
        pus.style.top = '-15%';
        pus.style.left = '-8%'
        
    }
    else {
        slider.style.width = '200px'
        slider.style.height = '100px'
        slider.style.margin = '0 0 0 auto';
        pus.style.transform = 'scale(1)'
        pus.style.top = '15%';
        pus.style.left = '5%'
    }
    isFull = !isFull;
})
