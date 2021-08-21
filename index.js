const color = require('chalk');
var readLineSync = require("readline-sync");
var userName = readLineSync.question(color.black.bgYellowBright("HI THERE!, WHAT IS YOUR NAME?\n"))
console.log(color.green("WElCOME " + userName + " to KAUN BANEGA CROREPATI!\n" + "\nLETS PLAY!"));
var score = 0;

function quiz(question, answer) {
    var userAnswer = readLineSync.question(question);
    if (userAnswer === answer) {
        console.log("You are right!");
        score = score + 1;
    } else {
        console.log("you are wrong!");
    }
    console.log("score is: ", score);
    console.log("------------------");
}

var highScore = [{
        name: "Vikas",
        score: 10
    },

    {
        name: "Ayushi",
        score: 7
    },

    {
        name: "Ronit",
        score: 3
    }
]


var questions = [{
        question: color.yellowBright("\nWhich superhero is not a member of The avengers?\n") +
            color.yellowBright("a: superman\n") +
            color.yellowBright("b: ironman\n") +
            color.yellowBright("c: flash\n") +
            color.yellowBright("d: ironman\n"),
        answer: "a"
    },

    {
        question: color.blueBright(`
which programming language is in most demand?:
a: c++
b: java
c: react
d: basic\n`),
        answer: "c"
    },

    {
        question: color.cyanBright(`
which company is not in gaming business?:
a: microsoft
b: sony
c: nintendo
d: tesla\n`),
        answer: "d"
    },

    {
        question: color.whiteBright("Is Pluto considered a planet officialy? (yes or no)"),
        answer: "no"
    },

    {
        question: color.greenBright(`
which entrepreneur has a space company?:
a: sam altman
b: jeff bezos
c: bill gates\n`),
        answer: "b"
    },

    {
        question: color.magentaBright(`
Where was the corona virus first detected?:
a: Usa
b: Spain
c: China\n`),
        answer: "c"
    },

    {
        question: color.redBright(`
Pick the odd one out:
a: Maruti
b: Renault
c: Mahindra
d: BMW\n`),
        answer: "d"
    },

    {
        question: color.yellow.italic(`
Which one is an Indian brand?:
a: Jockey
b: Flying Machine
c: H&M
d: Zara\n`),
        answer: "b"
    },

    {
        question: color.yellowBright.bold(`
How many States in India:
a: 28
b: 29
c: 30
d: 22\n`),
        answer: "b"
    },

    {
        question: color.rgb(255, 136, 0)(`
Which one of these is a pc brand?:
a: OnePlus
b: Xiomi
c: Micromax
d: Dell\n`),
        answer: "d"
    }
];

for (i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer);
}
console.log(color.greenBright.bold("Awesome! Your Total Score is: ", score));


console.log(color.black.bold.bgYellowBright.underline("\nCheck out the High Scores:"))
for (j = 0; j < highScore.length; j++) {
    var currentScore = highScore[j]

    console.log(currentScore.name + ":", currentScore.score)
}