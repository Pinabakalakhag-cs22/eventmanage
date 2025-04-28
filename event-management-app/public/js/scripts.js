document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const eventForm = document.getElementById('eventForm');
    const registrationList = document.getElementById('registrationList');

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(registerForm);
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            alert(result.message);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(loginForm);
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            alert(result.message);
        });
    }

    if (eventForm) {
        eventForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(eventForm);
            const response = await fetch('/api/events', {
                method: 'POST',
                body: formData
            });
            const result = await response.json();
            alert(result.message);
        });
    }

    const loadRegisteredEvents = async () => {
        const response = await fetch('/api/registrations');
        const events = await response.json();
        registrationList.innerHTML = '';
        events.forEach(event => {
            const li = document.createElement('li');
            li.textContent = `${event.title} - ${event.date}`;
            registrationList.appendChild(li);
        });
    };

    loadRegisteredEvents();
});