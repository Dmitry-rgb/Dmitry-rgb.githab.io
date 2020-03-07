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