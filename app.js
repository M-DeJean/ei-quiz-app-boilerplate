'use strict';

function startUp() {
// displays HTML content on start-up. Renders quiz when button is clicked

    let start = `
    <div class="startup">
        <h3>Click below to test your knowledge of the Star Wars universe...may the Force be with you.</h3>
        <button type="button">Begin</button>
    </div>`;

    $('main').html(start);

    $('main').on('click', '.startup', function(e) {
        render();
    });
}


function render() {
// generates html template from data in STORE object to render quiz

    let question = STORE.quest[STORE.count];

    let code = `
    <div class="box">
        <div class="question">${question.name}</div>
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
        <h2>Quiz Results</h2>
        <h3>
            Correct:${STORE.correct}<br>Incorrect:${STORE.incorrect}<br>${STORE.message[STORE.correct]}
        </h3>
        <p>Click below to test your knowledge again</p>
        <button type="button">Retake Quiz</button>
    </div>`;

    if(STORE.count === STORE.quest.length - 1) {
        $('main').html(endPage);
    }
    $('main').on('click', '.game-over', function (e) {
        STORE.count = 0;
        render();
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
/**
 *
 * Technical requirements:
 *
 * Your app should include a render() function, that regenerates the view each time the store is updated.
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 *
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)