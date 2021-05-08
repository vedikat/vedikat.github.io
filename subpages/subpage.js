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
const img_slider = document.querySelector('.img-slider');
const caption = document.querySelector('.caption');
const images = [
    'https://cdn.wallpapersafari.com/95/31/rG4sVg.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/7/72/644x364_JerseyClose.jpg',
    'http://img.weburbanist.com/wp-content/uploads/2017/09/concrete-3D-printing-644x364.jpg'
];
const captions = [
    'This is a nice looking pickle.',
    'This is a wonderful example of how education educates the educated.',
    'Chicken is an overrated source of protein.'
];

var i = 0;
function changeImage(){
    img_slider.getElementsByTagName('img')[0].src = images[i];
    caption.innerHTML = captions[i];
    i = (i + 1) % images.length;

    setTimeout('changeImage()', 3000);
}
changeImage();