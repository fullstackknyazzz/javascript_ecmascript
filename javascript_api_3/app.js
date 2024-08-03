document.addEventListener('DOMContentLoaded', () => {
    const accessKey = 'Access_key'; // Замените на ваш ключ доступа Unsplash
    const apiUrl = 'https://api.unsplash.com/photos/random';
    const dailyImageElement = document.getElementById('daily-image');
    const photographerInfoElement = document.getElementById('photographer-info');
    const likeButtonElement = document.getElementById('like-button');
    const likeCountElement = document.querySelector('.like-count');
    const historyListElement = document.getElementById('history-list');

    // Получение случайного изображения из Unsplash
    async function fetchRandomImage() {
        try {
            const response = await fetch(`${apiUrl}?client_id=${accessKey}`);
            const data = await response.json();
            
            const { urls, user, id } = data;

            // Установка изображения и информации о фотографе
            dailyImageElement.src = urls.regular;
            photographerInfoElement.innerHTML = `Фото от <a href="${user.links.html}" target="_blank">${user.name}</a>`;

            // Работа с лайками
            const storedLikes = localStorage.getItem(`likes_${id}`) || 0;
            likeCountElement.textContent = storedLikes;

            // Сохранение фото в истории
            addToHistory({ url: urls.thumb, photographer: user.name });

        } catch (error) {
            console.error('Ошибка при получении изображения:', error);
        }
    }

    // Функция для добавления изображения в историю
    function addToHistory(photo) {
        let history = JSON.parse(localStorage.getItem('photoHistory')) || [];
        
        // Добавляем новое фото в историю
        history.unshift(photo);

        // Ограничиваем историю до 10 последних записей
        if (history.length > 10) history.pop();

        localStorage.setItem('photoHistory', JSON.stringify(history));
        renderHistory();
    }

    // Функция для отображения истории
    function renderHistory() {
        const history = JSON.parse(localStorage.getItem('photoHistory')) || [];
        historyListElement.innerHTML = '';

        history.forEach(photo => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item', 'd-flex', 'align-items-center');
            listItem.innerHTML = `
                <img src="${photo.url}" alt="${photo.photographer}">
                <span>${photo.photographer}</span>
            `;
            historyListElement.appendChild(listItem);
        });
    }

    // Обработчик нажатия кнопки "Лайк"
    likeButtonElement.addEventListener('click', () => {
        const currentLikes = parseInt(likeCountElement.textContent, 10);
        const newLikes = currentLikes + 1;
        likeCountElement.textContent = newLikes;

        const imageId = dailyImageElement.src.split('/').pop();
        localStorage.setItem(`likes_${imageId}`, newLikes);
    });

    // Инициализация приложения
    fetchRandomImage();
    renderHistory();
});
