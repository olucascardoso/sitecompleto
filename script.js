function disableOptions(questionName) {
    let options = document.getElementsByName(questionName);
    options.forEach(option => {
        if (!option.checked) {
            option.disabled = true;
        }
    });
}

function playsound() {
    let clicksound = document.getElementById('selecionasom');
    clicksound.play();
}

function SubmitQuiz() {
    let correctAnswers = {
        q1: "A",
        q2: "A",
        q3: "A",
        q4: "A",
        q5: "A",
        q6: "A",
        q7: "A",
        q8: "A",
        q9: "A",
        q10: "A",
    };

    let form = document.getElementById('quiz-form');
    let score = 0;

    for (let key in correctAnswers) {
        let userAnswers = form.elements[key].value;
        if (userAnswers === correctAnswers[key]) {
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas`;

    if (score === 10) {
        let sucessSound = document.getElementById('venceusom');
        sucessSound.play();
    } else {
        let errorSound = document.getElementById('perdeuSom');
        errorSound.play();
    }

    document.querySelector('button[type="button"]').disabled = true; 
    document.getElementById('retry-button').disabled = false; 
}

function resetQuiz() {
    let form = document.getElementById('quiz-form');
    form.reset();
    let options = form.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.disabled = false;
    });
    document.getElementById('result').innerHTML = '';
    document.querySelector('button[type="button"]').disabled = false; 
    document.getElementById('retry-button').disabled = true; 
}