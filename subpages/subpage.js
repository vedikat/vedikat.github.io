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
