const classes = document.querySelectorAll('.class');

classes.forEach(clss => {
    clss.addEventListener('click', () => {
        if(!(clss.classList.contains('clicked'))){
            clss.classList.add('clicked');
            clss.getElementsByClassName('plus')[0].innerHTML = '-';
            clss.getElementsByClassName('details')[0].style.display = 'inline';
        }
        else{
            clss.classList.remove('clicked');
            clss.getElementsByClassName('plus')[0].innerHTML = '+';
            clss.getElementsByClassName('details')[0].style.display = 'none';
        }
    })
})
const img_slider = document.querySelector('img_slider');
const images = [
    'https://cdn.wallpapersafari.com/95/31/rG4sVg.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/644x364_JerseyClose.jpg',
    'https://lh3.googleusercontent.com/proxy/FYVurBsQXLIA9ar1DUMgOnW03s3QGLVkgbDnVifU6IBgy8yPGDxlLxfWezNqzzuZv22oTkcBmDKrZpPZS0bA1S72uSGql69x3BNqcLvqSIl9ZzqJ0-hV1Yr9J4i2MA',
    'http://img.weburbanist.com/wp-content/uploads/2017/09/concrete-3D-printing-644x364.jpg'
];

function changeImage(){
    img_slider.style.backgroundImage = 
}