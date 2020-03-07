/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    // Calc

    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('change', function () { // Событие срабатывает при выходе из фокуса и нажатии за пределами
        personsSum = +this.value; // записываем значене, которое пользователь ввел в перввй инпут
        total = (daysSum + personsSum) * 4000; // Формула калькулятора

        if (restDays.value == '') { // если пусто в инпуте с днями
            totalValue.textContent = 0; // то в общий тотал записываем 0
        } else if (persons.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total; // иначе результат формулы калькулятора
        }
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '') {
            totalValue.textContent = 0;
        } else if (restDays.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') { // Если не введен хоть один инпут
            totalValue.textContent = 0; // то 0
        } else {
            let a = total;
            totalValue.textContent = a * this.options[this.selectedIndex].value; // Иначе умнажаем на коэф выбранной опции
        }
    });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
    // Form

    let message = { // Создали объект со статусами
        loading: "Загрузка...",
        success: "Спасибо. Наш менеджер скоро с вами свяжиться",
        erorr: 'Ошибка'
    };

    let form = document.querySelector('.main-form'), // Получаем эементы
        input = document.querySelectorAll('input'),
        formBottom = document.getElementById('form'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status'); // Добовляем класс

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) { // Если мы отправляем форму, работаем с формой а не с кнопкой
            event.preventDefault(); // Отменяем стандартное поведение браузера, не перезагружаем стр.
            elem.appendChild(statusMessage); // Помещаем созданный элемент в конец нашей формы

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php'); // метод передачи данных; url
            // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // Настраиваем заголовок
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

            let formData = new FormData(elem); //  Создали объект, куда записались наши данные , который ввел пользователь, ключ со значением, ключ это атрибут name  в нашей верстке

            let obj = {};
            formData.forEach(function (value, key) {
                obj[key] = value;
            });

            let json = JSON.stringify(obj);

            request.send(json); // Тело нашей формы



            request.addEventListener('readystatechange', function () { // проверяем статус, в каком он состоянии
                if (request.readyState < 4) {
                    statusMessage.textContent = message.loading;
                } else if (request.readyState === 4 && request.status == 200) {
                    statusMessage.textContent = message.success;
                } else {
                    statusMessage.textContent = message.erorr;
                }
            });
            for (let i = 0; i < input.length; i++) { // Отчищаем инпут, после отправки
                input[i].value = '';
            }
        });
    };
    sendForm(form);
    sendForm(formBottom);
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    // Tabs
    let tab = document.querySelectorAll('.info-header-tab'), //Получаем элементы в нашем документе
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) { // По умолчанию будет включен первый таб с индэксом 0
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show'); // удаляем класс show
            tabContent[i].classList.add('hide'); // добавляем класс hide
        }
    }
    hideTabContent(1); // наш цикл запускается с индэкса 1

    function showTabContent(a) {
        if (tabContent[a].classList.contains('hide')) { // если .info-tabcontent содержит еще один класс hide
            tabContent[a].classList.remove('hide'); // то удалем его
            tabContent[a].classList.add('show'); // и добавляем класс show
        }
    }

    info.addEventListener('click', function (event) { // Запускаем обрабочтик событий использую делегирование событий, клик
        let target = event.target; // на что именно мы нажали, на какой элемент
        if (target && target.classList.contains('info-header-tab')) { // если мы нажали на родителя и на кнопку с классом info-header-tab
            for (let i = 0; i < tab.length; i++) { // то запусается цикл
                if (target == tab[i]) { // если мы нажали менно на наш таб
                    hideTabContent(0); // то сначало скрываем все
                    showTabContent(i); // потом показываем тот таб на который нажали
                    break; // останавливаем цикл
                }
            }
        }
    });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    //timer
    let deadline = '2020-02-27'; //указываем конечную дату таймера

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()), // Вычисляем deadline - текущая дата, время в милисекундах
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        return { //Взвращаем наши результаты в объект
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) { // Получаем элементы с нашего документа
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000); // тут мы сказали чтобы функция updateClock выполнялась через каждую секунду

        function updateClock() {
            let t = getTimeRemaining(endtime); //записываем результаты которые вернули в объект фунции getTimeRemaining в переменную t

            function addZero(num) { //Добавляем 0, формата 01-02-03
                if (num <= 9) {
                    return '0' + num;
                } else return num;
            };

            hours.textContent = addZero(t.hours); // записываем результаты в наш документ
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            if (t.total <= 0) { // Условие, если таймер закончился, чтобы не шел в минус, мы говорим чтобы все было по нулям
                clearInterval(timeInterval); // останавливаем setInterval
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }

    }

    setClock('timer', deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let calc = __webpack_require__(/*! ./parts/calc */ "./src/js/parts/calc.js"),
        form = __webpack_require__(/*! ./parts/form */ "./src/js/parts/form.js"),
        modal = __webpack_require__(/*! ./parts/modal */ "./src/js/parts/modal.js"),
        slider = __webpack_require__(/*! ./parts/slider */ "./src/js/parts/slider.js"),
        tabs = __webpack_require__(/*! ./parts/tabs */ "./src/js/parts/tabs.js"),
        timer = __webpack_require__(/*! ./parts/timer */ "./src/js/parts/timer.js");

    calc();
    form();
    modal();
    slider();
    tabs();
    timer();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map