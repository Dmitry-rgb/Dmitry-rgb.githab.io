function slider() {
    // Slider

    let slidIndex = 1, // Получаем элементы
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    function showSlides(n) {

        if (n > slides.length) { // Переход с последнего на первый и наоборот
            slidIndex = 1;
        } else if (n < 1) {
            slidIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none'); // Перебераем слайды и назначем стиль: display: none;
        // for(let i = 0; i < slides.length; i++) {  // То же самое что и forEach
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('dot-active')); // Перебераем кнопки и удаляем класс

        slides[slidIndex - 1].style.display = 'block'; // Назначем стиль индексу 0
        dots[slidIndex - 1].classList.add('dot-active'); // Добавляем класс индексу 0
    }
    showSlides(slidIndex);


    function plussSlide(n) {
        showSlides(slidIndex = slidIndex + n);
    };

    function curentSlide(n) {
        showSlides(slidIndex = n);
    };

    prev.addEventListener('click', function () {
        plussSlide(-1);
    });

    next.addEventListener('click', function () {
        plussSlide(1);
    });

    dotsWrap.addEventListener('click', function (event) { // Событие делегирования, при нажатии на точку, открывается определенный слайд
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                curentSlide(i);
            }
        }
    });
}

module.exports = slider;