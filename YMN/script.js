// Получаем элементы DOM
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const userAnswerInput = document.getElementById('userAnswer');
const checkBtn = document.getElementById('checkBtn');
const newExampleBtn = document.getElementById('newExampleBtn');
const correctCountElement = document.getElementById('correctCount');
const totalCountElement = document.getElementById('totalCount');
const resultElement = document.getElementById('result');

// Переменные для хранения данных
let num1, num2, correctAnswer;
let correctCount = 0;
let totalCount = 0;

// Функция для генерации нового примера
function generateNewExample() {
    // Генерируем два случайных числа от 1 до 10
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;

    // Отображаем числа в примере
    num1Element.textContent = num1;
    num2Element.textContent = num2;

    // Очищаем поле ввода и результат
    userAnswerInput.value = '';
    resultElement.textContent = '';

    // Скрываем кнопку «Новый пример»
    newExampleBtn.classList.add('hidden');
}

// Функция проверки ответа
function checkAnswer() {
    const userAnswer = parseInt(userAnswerInput.value);

    // Увеличиваем счётчик попыток
    totalCount++;
    totalCountElement.textContent = totalCount;

    if (userAnswer === correctAnswer) {
        // Если ответ правильный
        resultElement.textContent = 'Правильно! Молодец!';
        resultElement.style.color = 'green';
        correctCount++;
        correctCountElement.textContent = correctCount;
    } else {
        // Если ответ неправильный
        resultElement.textContent = `Неправильно. Правильный ответ: ${correctAnswer}`;
        resultElement.style.color = 'red';
    }

    // Показываем кнопку «Новый пример»
    newExampleBtn.classList.remove('hidden');

    // Отключаем кнопку проверки, чтобы нельзя было нажимать несколько раз
    checkBtn.disabled = true;
}

// Обработчики событий
checkBtn.addEventListener('click', checkAnswer);
newExampleBtn.addEventListener('click', () => {
    generateNewExample();
    // Включаем обратно кнопку проверки
    checkBtn.disabled = false;
});

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', generateNewExample);
