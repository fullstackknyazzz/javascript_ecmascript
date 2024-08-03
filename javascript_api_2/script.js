// script.js

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slider-image');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Функция для обновления отображаемого изображения и активного индикатора
    function updateSlider(index) {
        images.forEach((img, i) => {
            img.classList.remove('active');
            indicators[i].classList.remove('active');
            if (i === index) {
                img.classList.add('active');
                indicators[i].classList.add('active');
            }
        });
    }

    // Обработчик для кнопки "Следующее изображение"
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider(currentIndex);
    });

    // Обработчик для кнопки "Предыдущее изображение"
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider(currentIndex);
    });

    // Обработчики для навигационных индикаторов
    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateSlider(currentIndex);
        });
    });

    // Инициализация слайдера
    updateSlider(currentIndex);
});
