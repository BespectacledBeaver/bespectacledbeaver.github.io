document.addEventListener('DOMContentLoaded', function () {
    const leftArrow = document.querySelector('.w-left-arrow');
    const rightArrow = document.querySelector('.w-right-arrow');

    const sliderInputs = document.querySelectorAll('.w-slide-input');

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
