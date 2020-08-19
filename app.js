'use strict';




/*----------------------------------------GENERATOR FUNCTIONS----------------------------------------*/


function generateStart() {

    // generates HTML for startup page

    let start =
        `<div class="startup">
        <h3>Click below to test your knowledge of the Star Wars universe<br>May the Force be with you...</h3>
        <button class="begin" type="button">Begin</button>
    </div>`;

    return start;
}

function generateQuiz() {

    // generates HTML for quiz questions

    let question = STORE.quest[STORE.count];

    let quiz =
        `<div class="box">
        <div class="question"><h3>Question ${STORE.count + 1} of 5<br>${question.name}</h3></div>
        <form class="form">
            <input type="radio" id="answerOne" name="answer" value="${question.answers[0]}" required>
            <label for="answerOne">${question.answers[0]}</label><br>
            <input type="radio" id="answerTwo" name="answer" value="${question.answers[1]}">
            <label for="answerTwo">${question.answers[1]}</label><br>
            <input type="radio" id="answerThree" name="answer" value="${question.answers[2]}">
            <label for="answerThree">${question.answers[2]}</label><br>
            <input type="radio" id="answerFour" name="answer" value="${question.answers[3]}">
            <label for="answerFour">${question.answers[3]}</label><br>
            <button type="submit" id="submit">Submit</button>
        </form>
    </div>
    <footer>Current Score: ${STORE.correct} / ${STORE.count}</footer>`;

    return quiz;
}

function generateResults() {

    // generates HTML for results page

    let res =
        `<div class="game-over">
            <h2>Your Results:</h2>
            <h3>
                Correct: ${STORE.correct}<br>Incorrect: ${STORE.incorrect}<br>${STORE.message[STORE.correct]}
            </h3>
            <p>Click below to start again</p>
            <button class="reset" type="button">Retake Quiz</button>
        </div>`;

    return res;
}




/*----------------------------------------RENDER FUNCTIONS----------------------------------------*/


// when called, these functions update DOM with HTML from generators

function renderStart() {
    $('main').html(generateStart);
}
function renderQuiz() {
    $('main').html(generateQuiz);
}

function renderRes() {
    $('main').html(generateResults);
}




/*----------------------------------------EVENT LISTENER FUNCTIONS----------------------------------------*/


function handleClickStart() {

    // displays quiz questions once BEGIN is clicked from startup page

    $('main').on('click', '.begin', function (e) {
        renderQuiz();
    });
}

function handleClickReset() {

    // when RESET is clicked on results page, score & question count are refreshed and starts quiz over

    $('main').on('click', '.reset', function (e) {
        STORE.count = 0;
        STORE.correct = 0;
        STORE.incorrect = 0;
        renderStart();
    });
}

function handleClickSubmit() {

    // once quiz answer is submitted, checks for right/wrong answer and moves to next question
    // if the end of quiz is reached, displays results page

    $('main').on('submit', '.form', function (e) {
        e.preventDefault();
        let selection = $('input[name=answer]:checked').val();
        if (STORE.quest[STORE.count].isCorrect === selection) {
            STORE.correct++;
            alert('Correct!');
        } else {
            STORE.incorrect++;
            alert('Incorrect');
        }
        STORE.count++;
        if (STORE.count === STORE.quest.length) {
            renderRes();
        } else {
            renderQuiz();
        }
    });
}


function main() {

    // runs these functions when page loads

    handleClickReset();
    renderStart();
    generateStart();
    handleClickStart();
    handleClickSubmit();
}


$(main);