var readlineSync = require("readline-sync");

 const chalk = require('chalk');
// console.log(chalk.blue.bgRed.bold.underline('Hello World'));

var score = 0;
var temp = 0;
var userName = readlineSync.question(chalk.blue("Welcome to the most interesting F.R.I.E.N.D.S quiz! May I have your name? "))
console.log(chalk.green("Hey "+userName+" let's see how well you know your favourite series..."))
sleep(2000);
console.log(chalk.red("Following you will see questions. To give answer just type the option that you feel is correct. \nBest of Luck!"))
sleep(4000);

var highScores = [
    {
        name : "Reedam",
        score : "9"
    },
    {
        name : "Ritu",
        score : "3"
    }
]

var questions = [
    {
        question : chalk.yellow("How many times was Ross legally divorced? \na) 1 time \nb) 2 times \nc) 3 times \n"),
        answer : "c"
    },
    {
        question : chalk.magenta("Where Carol met Susan? \na)At gym \nb) At central perk \nc)At college \n"),
        answer : "a"
    },
    {
        question : chalk.yellow("What were Ben\'s first words? \na)Mum \nb) Dad \nc)Hi \n"),
        answer : "c"
    },
    {
        question : chalk.magenta("What was Gunther\'s job before he worked at Central Perk? \na)A History professor \nb) A soap opera actor \nc)A fashion designer \n"),
        answer : "b"
    },
    {
        question : chalk.yellow("What was the name of the first restaurant Monica was head chef at? \na)Alessandro's \nb) Moondance Diner \nc)Iridium \n"),
        answer : "a"
    },
    {
        question : chalk.magenta("What job did Monica's older boyfriend Richard Burke have? \na) Dentist \nb) Ophthalmologist \nc) Sous chef \n"),
        answer : "b"
    },
    {
        question : chalk.yellow("Monica and Chandler adopted Erica's kid(s). How many kid(s) did she have? \na)Just one \nb) Twins \nc)Three \n"),
        answer : "b"
    },
    {
        question : chalk.magenta("Which of the following Chandler facts is false? \na)He has a third nipple \nb) He is missing a pinky toe \nc)He dated Phoebe as a kid \n"),
        answer : "c"
    },
    {
        question : chalk.yellow("How many times did Chandler and Janice break up during the entirety of Friends? \na)5 times \nb) Just once \nc)2 times \n"),
        answer : "a"
    },
    {
        question : chalk.magenta("How many sisters did Joey Tribbiani have? \na)3 \nb) 7 \nc)9 \n"),
        answer : "b"
    }
]

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

function play(question, answer){
    var userAnswer = readlineSync.question(question);

    if(userAnswer.toUpperCase() === answer.toUpperCase()){
        console.log("Yup, that correct!");
        score = score + 1;
    }
    else{
        console.log("Nope, the right anwer is option "+answer);
    }
    console.log("Your score would be-->"+score);
}

for(var i = 0 ; i<questions.length; i++){
    play(questions[i].question, questions[i].answer);
    sleep(2000);
}
sleep(1000);
console.log("Your aggregate score would be-->"+score);
sleep(2000);

for(var j = 0; j<highScores.length; j++){
    if(score >= highScores[j].score){
        temp = temp + 1;
    }
}

if (temp>0){
    console.log(chalk.blue("Hey, congratulations!! You just crossed the high scores. Send us the screenshot of this page and we will update our database!!!"));
}