function modal() {
    // Modal

    let more = document.querySelector('.more'), // Получаем элементы
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () { // Запускаем обработчик событий
        overlay.style.display = 'block'; // Меняем стиль
        this.classList.add('more-splash'); // Добавляем класс
        document.body.style.overflow = 'hidden'; // Меняем стиль
    });

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
    // modal in tabs

    let descriptionBtn = document.querySelectorAll('.description-btn');

    for (let i = 0; i < descriptionBtn.length; i++) {
        descriptionBtn[i].addEventListener('click', function () {
            overlay.style.display = 'block';
            descriptionBtn[i].classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    };
}

module.exports = modal;