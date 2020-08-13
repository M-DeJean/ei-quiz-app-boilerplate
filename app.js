'use strict';

function startUp() {
// displays HTML content on start-up. Renders quiz when button is clicked

    let start = `
    <div class="startup">
        <h3>Click below to test your knowledge of the Star Wars universe<br>May the Force be with you...</h3>
        <button class="begin" type="button">Begin</button>
    </div>`;

    $('main').html(start);

    $('main').on('click', '.begin', function(e) {
        render();
    });
}


function render() {
// generates html template from data in STORE object to render quiz

    let question = STORE.quest[STORE.count];

    let code = `
    <div class="box">
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
    </div>`;

    $('main').html(code);
}


function gameOver() {
// if question number = length of quiz, give user score and option to start over

    let endPage = `
    <div class="game-over">
        <h2>Your Results:</h2>
        <h3>
            Correct: ${STORE.correct}<br>Incorrect: ${STORE.incorrect}<br>${STORE.message[STORE.correct - 1]}
        </h3>
        <p>Click below to start again</p>
        <button class="reset" type="button">Retake Quiz</button>
    </div>`;

    if(STORE.count === STORE.quest.length - 1) {
        $('main').html(endPage);
    }
    $('main').on('click', '.reset', function (e) {
        STORE.count = 0;
        STORE.correct = 0;
        STORE.incorrect = 0;
        startUp();
    });
}


function nextQuestion() {
// listens for user submission. alerts correct or incorrect message

    $('main').on('submit', '.form', function(e) {
        e.preventDefault();
        let selection = $('input[name=answer]:checked').val();
        if(STORE.quest[STORE.count].isCorrect === selection) {
            STORE.correct++;
            alert('Correct!');
        } else {
            STORE.incorrect++;
            alert('Incorrect');
        }
        gameOver();
        STORE.count++;
        render();
    });
}


function main() {
// runs these functions when page loads
    startUp();
    nextQuestion();
    console.log(STORE.quest);
}


$(main);