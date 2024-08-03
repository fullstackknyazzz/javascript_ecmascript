document.addEventListener('DOMContentLoaded', () => {
    // JSON данные
    const classes = [
        {
            id: 1,
            name: "Йога",
            time: "09:00 - 10:00",
            maxParticipants: 15,
            currentParticipants: 10
        },
        {
            id: 2,
            name: "Кардиотренировка",
            time: "10:30 - 11:30",
            maxParticipants: 20,
            currentParticipants: 20
        },
        {
            id: 3,
            name: "Пилатес",
            time: "12:00 - 13:00",
            maxParticipants: 12,
            currentParticipants: 5
        },
        {
            id: 4,
            name: "Функциональная тренировка",
            time: "13:30 - 14:30",
            maxParticipants: 10,
            currentParticipants: 8
        }
    ];

    // Функция для рендера занятий
    function renderSchedule() {
        const scheduleContainer = document.getElementById('schedule');
        scheduleContainer.innerHTML = ''; // Очищаем контейнер перед рендером

        classes.forEach(item => {
            const classCard = document.createElement('div');
            classCard.className = 'col-md-6 mb-4';

            classCard.innerHTML = `
                <div class="card ${item.currentParticipants >= item.maxParticipants ? 'full-class' : ''}">
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text"><strong>Время:</strong> ${item.time}</p>
                        <p class="card-text"><strong>Участники:</strong> ${item.currentParticipants} / ${item.maxParticipants}</p>
                        <button class="btn btn-primary enroll-btn" data-id="${item.id}" ${item.currentParticipants >= item.maxParticipants ? 'disabled' : ''}>Записаться</button>
                        <button class="btn btn-danger unenroll-btn" data-id="${item.id}">Отменить запись</button>
                    </div>
                </div>
            `;

            scheduleContainer.appendChild(classCard);
        });
    }

    // Функция для обновления состояния кнопок и участников
    function updateClass(id, action) {
        const classItem = classes.find(c => c.id === id);

        if (action === 'enroll' && classItem.currentParticipants < classItem.maxParticipants) {
            classItem.currentParticipants++;
        } else if (action === 'unenroll' && classItem.currentParticipants > 0) {
            classItem.currentParticipants--;
        }

        renderSchedule();
    }

    // Устанавливаем обработчики событий для записи и отмены записи
    document.getElementById('schedule').addEventListener('click', function(event) {
        if (event.target.classList.contains('enroll-btn')) {
            const id = parseInt(event.target.getAttribute('data-id'));
            updateClass(id, 'enroll');
        }

        if (event.target.classList.contains('unenroll-btn')) {
            const id = parseInt(event.target.getAttribute('data-id'));
            updateClass(id, 'unenroll');
        }
    });

    // Изначальный рендер занятий
    renderSchedule();
});