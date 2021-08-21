(() => {

    const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('#next');
    const arrowPrevious = document.querySelector('#previous');
    let value = '';

    arrowNext.addEventListener('click', () => changePosition(1));
    arrowPrevious.addEventListener('click', () => changePosition(-1));

    const changePosition = (position) => {

        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);

        value = currentElement;
        value += position;

        if(value === 0 || value === Number(sliders.length + 1)) value = value === 0 ? sliders.length : 1;


        sliders[currentElement - 1].classList.toggle('slider__body--show');
        sliders[value - 1].classList.toggle('slider__body--show');

    }

})();