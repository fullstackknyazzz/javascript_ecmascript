function getUserData(userId) {
    return fetch(`https://example.com/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('User not found');
            }
            return response.json();
        })
        .then(data => data)
        .catch(error => {
            throw new Error(error.message);
        });
}

// Пример использования функции
getUserData(1)
    .then(user => console.log(user))
    .catch(error => console.error(error.message));




function saveUserData(user) {
    return fetch('https://example.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to save user data');
        }
    })
    .catch(error => {
        throw new Error(error.message);
    });
}

// Пример использования функции
const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
};

saveUserData(user)
    .then(() => console.log('User data saved successfully'))
    .catch(error => console.error(error.message));





function changeStyleDelayed(elementId, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
            element.style.backgroundColor = 'yellow'; // Измените стиль по вашему усмотрению
        } else {
            console.error(`Element with id "${elementId}" not found.`);
        }
    }, delay);
}

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'

