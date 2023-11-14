document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    const sliderInputs = document.querySelectorAll('.slide-input');

    let index = 0;

    leftArrow.addEventListener('click', function () {
        if (index > 0) {
            index--; // Decrease the index once
            sliderInputs[index].checked = true;
        }
    });

    rightArrow.addEventListener('click', function () {
        if (index < sliderInputs.length - 1) {
            index++; // Increase the index once
            sliderInputs[index].checked = true;
        }
    });
});
