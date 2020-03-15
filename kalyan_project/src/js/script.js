// slider
function slider(slide, prev, next) {
    let slidIndex = 1,
    items = document.querySelectorAll(slide),
        prevBtn = document.querySelector(prev),
        nextBtn = document.querySelector(next);


    function showSlides(n) {

        if (n > items.length) {
            slidIndex = 1;
        } else if (n < 1) {
            slidIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add('animated');
            item.style.display = "block";
        });


        items[slidIndex - 1].style.display = 'none';
    }
    showSlides(slidIndex);


    function plussSlide(n) {
        showSlides(slidIndex = slidIndex + n);
    };

    prevBtn.addEventListener('click', function () {
        plussSlide(-3);
    });

    nextBtn.addEventListener('click', function () {
        plussSlide(3);
    });
}

slider('.interier__sliderItem', '.prev', '.next');

// Tabs

const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = 'flex';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
};

tabs('.menu__tabs', '.menu__tab', '.menu__contentTab')
