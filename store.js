'use strict';
const STORE = {
    count: 0,
    correct: 0,
    incorrect: 0,
    finished: false, 
    quest: [
        {
            name: 'Which Star Wars movie was released first?',
            answers: ['Star Wars: Episode I - The Phantom Menace', 'Star Wars: Episode VII - The Force Awakens', 'Star Wars: Episode IV - A New Hope', 'Star Wars: Episode IX - The Rise of Skywalker'],
            isCorrect: 'Star Wars: Episode IV - A New Hope'
        }, {
            name: 'Whose DNA was used to create the Clone Troopers?',
            answers: ['Boba Fett', 'Han Solo', 'The Mandalorian', 'Jango Fett'],
            isCorrect: 'Jango Fett'
        }, {
            name: 'Which of these Sith Lords was once an apprentice of Yoda?',
            answers: ['Count Dooku', 'Darth Sidious', 'Darth Vader', 'Darth Maul'],
            isCorrect: 'Count Dooku'
        }, {
            name: 'What is the name of Han Solo’s ship?',
            answers: ['The Infinity Eagle', 'The Enterprise', 'The Millennium Falcon', 'The Silver Bullet'],
            isCorrect: 'The Millennium Falcon'
        }, {
            name: 'What is the color of Obi-Wan Kenobi’s Lightsaber?',
            answers: ['Blue', 'Green', 'Yellow', 'Purple'],
            isCorrect: 'Blue'
        }
    ],
    message: [
        'Are you a droid?','Unacceptable! Remember your training, young apprentice.', 'You can do better! Let the Force guide you.',  'Not bad, but you have yet to realize your true potential.', 'Very good! The Force is strong within you.', 'Master Yoda was right! You are the Chosen One!' 
    ]
};
