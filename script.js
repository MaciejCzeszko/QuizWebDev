const form = document.querySelector('#quiz-form');
const answers = Array.from(document.querySelectorAll('.answer'));
const questionItems = document.querySelectorAll('.question-item');
const alert = document.querySelector('#alert');

form.addEventListener('submit', e => {
    e.preventDefault();

    const checkedAnswers = answers.filter(answers => answers.checked);

    questionItems.forEach(questionItem => {
        questionItem.classList.add('incorrect');
        questionItem.classList.remove('correct');
    })

    checkedAnswers.forEach(answer => {
        const closestParent = answer.closest('.question-item');
        
        if(answer.value === "true"){
            closestParent.classList.add('correct');
            closestParent.classList.remove('incorrect');
        } else {
            closestParent.classList.remove('correct');
            closestParent.classList.add('incorrect');
        }
    })

    const allAnswered = checkedAnswers.length === questionItems.length;
    const allTrue = checkedAnswers.every(answer => answer.value === "true");

    if(allTrue && allAnswered) {
        alert.style.display = "flex";
        setTimeout(() => {
            alert.style.display = "none";
        }, 3000)
    }
})