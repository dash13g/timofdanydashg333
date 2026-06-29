const questions = [
    {   
        question: "Какой тег используется для создания абзаца?",
        options: ["p", "div", "span", "br"],
        correct: 0
    },
    {
        question: "Какое свойство CSS используется для изменения цвета текста?",
        options: ["background-color", "color", "font-size", "border"],
        correct: 1
    },
    {
        question: "Что означает HTML?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Transfer Mail Language"],
        correct: 0
    },
    {
        question: "Какой язык используется для программирования поведения веб‑страницы?",
        options: ["CSS", "HTML", "JavaScript", "Python"],
        correct: 2
    },
  
    {
        question: "Какое CSS-свойство используется для изменения цвета текста внутри элемента?",
        options: ["text-color", "font-color", "color", "background-color"],
        correct: 2 // "color" — третий вариант, индекс 2
    },
    {
        question: "Как правильно объявить переменную, которая не может быть изменена позже в коде (константа)?",
        options: ["let myConst = 10;", "var myConst = 10;", "const myConst = 10;", "constant myConst = 10;"],
        correct: 2 // "const" — третий вариант
    },
    {
        question: "Какой тег определяет основную часть содержимого веб‑страницы?",
        options: ["body", "main", "content", "page"],
        correct: 0 // <body> — первый вариант
    },
    {
        question: "Какой метод массива позволяет добавить один или несколько элементов в конец массива?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correct: 0 // push() — первый вариант
    },
    {
        question: "Какое значение свойства display делает элемент невидимым и полностью убирает его из потока документа (освобождает место)?",
        options: ["display: hidden;", "display: invisible;", "display: none;", "display: 0;"],
        correct: 2 // display: none; — третий вариант
    }
];



let currentQuestion = 0;

function loadQuestion() {
    const q = questions[currentQuestion];
    document.getElementById('question').textContent = q.question;
    
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.style.display = 'block';
        label.innerHTML = `<input type="radio" name="answer" value="${index}"> ${option}`;
        answersDiv.appendChild(label);
    });
    
    document.getElementById('result').innerHTML = '';
    document.getElementById('result').className = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').disabled = false;
}

function checkAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
        alert('Пожалуйста, выберите ответ!');
        return;
    }
    
    const userAnswer = parseInt(selected.value);
    const q = questions[currentQuestion];
    const resultEl = document.getElementById('result');
    console.log(resultEl)
    
    if (userAnswer === q.correct) {
        resultEl.innerHTML = 'Правильно! Молодец!';
        resultEl.className = 'correct';
    } else {
        resultEl.innerHTML = `Неправильно! Правильный ответ: ${q.options[q.correct]}`;
        resultEl.className = 'incorrect';
    }
    
    // Блокируем выбор и показываем кнопку «Далее»
    document.querySelectorAll('input[name="answer"]').forEach(r => r.disabled = true);
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        document.getElementById('quiz-area').innerHTML = '<h2>Викторина завершена!</h2><p>Вы ответили на все вопросы.</p><button onclick="location.reload()">Начать заново</button>';
        return;
    }
    loadQuestion();
}

document.addEventListener('DOMContentLoaded', loadQuestion);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);
document.getElementById('next-btn').addEventListener('click', nextQuestion);
