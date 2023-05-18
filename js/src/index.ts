import Slider from './slider.js';

window.addEventListener('load', function () {
    const slider = new Slider(document.getElementById("img-slide")!);
    
    const slideActionBtns = document.querySelectorAll(".slide-btns > .action");
    slideActionBtns.forEach((btn, index) => {
        btn.addEventListener("click", (event) => {            
            if(index == 0) {
                slider.prev()
            } else if (index == 1) {
                slider.next()
            }
        })
    });

    const exhibitionList = document.getElementsByClassName('exhibition-card');
    for (let i = 0; i < exhibitionList.length; i++) {
        const exhibitionCard = exhibitionList[i];
        
        exhibitionCard.addEventListener('mouseover', (e) => {
            const selected = document.querySelector(".exhibition-card.active");
            const selectedImg = document.querySelector(".image-holder img.active");

            selected?.classList.remove('active');
            selectedImg?.classList.remove('active');

            exhibitionCard.classList.add("active");
            document.querySelectorAll(".image-holder img")[i].classList.add("active");
        })
    }
})