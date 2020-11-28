var readlineSync = require('readline-sync');
const chalk = require('chalk');

//question array list

var quesList = [{
  question: chalk.hex('#BDBDBD')("In which of these countries did manga originate?\n1. Korea\n2. Japan\n3. China\n4. Canada\n"),
  answer: 2
},

{
  question: chalk.hex('#BDBDBD')("Who is the first singer, reached  million followers on Twitter?\n1. Lady Gaga\n2. AR Rehman\n3. Arijit Singh\n4. All of the above\n"),
  answer: 1
},

{
  question: chalk.hex('#BDBDBD')("In Web series FRIENDS, who amoung them is vegetarian?\n1. Ross\n2. Joey\n3. Chandler\n4. Phoebe\n"),
  answer: 4
}
,{
  question: chalk.hex('#BDBDBD')("Which Latino artist/s saw their music video become the first video in YouTube history to reach 4bn views??\n1. Shakira\n2. Camila Cabello Brin\n3. Luis Fonsi and Daddy Yankee\n4. Eminem\n"),
  answer: 3
},{
  question:chalk.hex('#BDBDBD')("Name of the Space AirCraft Company Founded by Elon Musk?\n1. Galaxy X\n2. Star X\n3. Space X\n4. None\n"),
  answer: 3
}];

//DRIVER PROGRAM

var userName = readlineSync.question("Enter your Name: ");
console.log(chalk.red("Welcome " +userName+ " to the Pop Culture quiz\n"));
console.log();
console.log(chalk.bgRed("Instructions:")+chalk.black.bgWhite.bold("\n 1. Enter option number to select the answer.\n"));

var score = [];
function quizGame(quesObject){
  var gameScore = 0;
  
  for(i=0;i<quesObject.length;i++){
    var userAns = readlineSync.question(quesObject[i].question);
    if(userAns == quesObject[i].answer){
      gameScore = gameScore+1;
      console.log(chalk.bold.hex('#3485e4')("Correct Answer!!"));
    }else{
      console.log(chalk.bold.red("Sad! wrong answer, but you can surely try again"));
    }
    console.log("------------------------------");
  }
  score.push(gameScore);
  console.log(chalk.hex('#009688')("Thanks for playing: ",chalk.white.bgCyan.bold(userName)));
  console.log(chalk.hex('#009688')("your score is: "+gameScore+"/"+quesList.length));
  var max = score.reduce(function(a, b) {
    return Math.max(a, b);
  });
  console.log(chalk.green("your highest score is: "+ max + "🎊🎉"));

  var playAgain = readlineSync.question(chalk.black.bgWhite.bold("Want to play again?  [y/n] \n"));
  if(playAgain == "y"){
    quizGame(quesObject);
  }else{
    console.log("see you soon, Thanks for playing 🔰 ");
  }
}

//game calling function
quizGame(quesList);