const sliderInputs = document.querySelectorAll('.w-slide-input');
let wIndex = 0;
let indexArray = [0, 1, 2, 1, 0];

document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.w-left-arrow');
    const rightArrow = document.querySelector('.w-right-arrow');

    let index = 0;

    leftArrow.addEventListener('click', function () {

        index = 0;
        while(true){
            if(sliderInputs[index].checked===true) break;
            index++;
        }

        if (index > 0) {
            index--; // Decrease the index once
            sliderInputs[index].checked = true;
        }
    });

    rightArrow.addEventListener('click', function () {

        index = 0;
        while(true){
            if(sliderInputs[index].checked===true) break;
            index++;
        }
        
        if (index < sliderInputs.length - 1) {
            index++; // Increase the index once
            sliderInputs[index].checked = true;
        }
    });

    setInterval(goToNextWSlide, 5000);

});

function goToNextWSlide() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    if(width < 600){
        sliderInputs[indexArray[wIndex]].checked = true;
        wIndex = (wIndex + 1) % 5;     
    }

};