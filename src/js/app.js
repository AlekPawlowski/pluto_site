// form
const newsletterForm = document.getElementById('newsletter_form');

newsletterForm.onsubmit = (e) => {
    e.preventDefault()
    console.info('event is prevented, now we can send some data or make some other actions');
};

// expanded content
const expandedContentHref = document.querySelectorAll('.expand_content a'),
    expandedElemnets = document.querySelectorAll('.expand_content .expandable');
[...expandedContentHref].forEach(element => {
    element.onclick = (e) => {
        e.preventDefault();
        // add active to current a tag and remove from other elements
        [...expandedContentHref].forEach(tag=> tag.classList.remove('active'));
        element.classList.add('active');
        // hide containers and show expanded current
        [...expandedElemnets].forEach(expandedEle => expandedEle.style.height = '0');
        const hiddenEle = element.parentNode.querySelector('.expandable');
        hiddenEle.style.height = 'fit-content';
    };

})

// slider 
const headSlider = new Splide('#head_slider', {
    perPage: 1,
    rewind: true,
});
headSlider.mount();

// go up btn
const goUpBtn = document.getElementById('go_up_btn');
const innerHeight = window.innerHeight;
let isBtnShowed = false;
console.log(innerHeight);

window.onscroll = (e) => {
    if (window.pageYOffset > innerHeight && !isBtnShowed) {
        goUpBtn.style.opacity = 1;
        goUpBtn.ontransitionend = (e) => e.target.visibility = 'visible';
        isBtnShowed = true;
    }
    if (window.pageYOffset < innerHeight && isBtnShowed) {
        goUpBtn.style.opacity = 0;
        goUpBtn.ontransitionend = (e) => e.target.visibility = 'hidden';
        isBtnShowed = false;
    }
}
goUpBtn.onclick = (e) => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}