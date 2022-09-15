const newsletterForm = document.getElementById('newsletter_form');

newsletterForm.onsubmit = (e)=> {
    e.preventDefault()
    console.info('event is prevented, now we can send some data or make some other actions');
};


// go up btn
const goUpBtn = document.getElementById('go_up_btn');
const innerHeight = window.innerHeight;
let isBtnShowed = false;
console.log(innerHeight);

window.onscroll = (e) => {
    if(window.pageYOffset > innerHeight && !isBtnShowed){
        goUpBtn.style.opacity = 1;
        goUpBtn.ontransitionend = (e) => e.target.visibility = 'visible';
        isBtnShowed = true;
    }
    if(window.pageYOffset < innerHeight && isBtnShowed) {
        goUpBtn.style.opacity = 0;
        goUpBtn.ontransitionend = (e) => e.target.visibility = 'hidden';
        isBtnShowed = false;
    }
}
goUpBtn.onclick = (e)=> {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}