//базовый URL
// export const BASE_URL = 'http://localhost:3001';
// export const BASE_URL = 'http://tshakhgn.beget.tech';

//валидация формы
interface ErrorTexts {
    [key: string]: string;
}

//валидация ошибок
export const validateErrors = (errors: ErrorTexts): boolean => {
    for (const key in errors) {
        if (errors[key].trim() !== '') {
            return false;
        }
    }
    return true;
};

//валидация логина
export const validateLogin = (login: string): string => {
    let errorMessage = '';

    const regex = /^[A-Za-z0-9_]+$/;

    if (!regex.test(login)) {
        errorMessage = 'Недопустимое значение для логина';
    }

    if (login.trim() === '') {
        errorMessage = 'Логин обязателен для заполнения';
    }

    return errorMessage;
};

//валидация пароля
export const validatePassword = (password: string): string => {
    let errorMessage = '';

    const regex = /^[A-Za-z0-9_]+$/;

    if (!regex.test(password)) {
        errorMessage = 'Недопустимое значение для пароля';
    }

    if (password.trim() === '') {
        errorMessage = 'Пароль обязателен для заполнения';
    }

    return errorMessage;
};

// Функция для форматирования даты
export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`; // Возвращаем форматированную строку
};
