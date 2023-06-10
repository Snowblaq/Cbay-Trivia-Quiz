const questions = [
     { question:"a. How long is an Olympic swimming pool (in meters)?",
        options:["10meters", "50meters", "30meters"], 
        answer: 1
     },
     { question:"b. What countries made up the original Axis powers in World War II?",
        options:["Italy,Portugal and Belgium", "Bahamas, Belgium and France", "Germany, Italy, and Japan"], 
        answer: 2
     },
     { question:"c. Which country do cities of Perth, Adelade & Brisbane belong to?",
        options:["France", "Germany", "Australia"], 
        answer: 1
     },
     { question:"d. What is CYNOPHOBIA?",
     options:["Fear of People", "Fear of heights", "Fear of dogs"],
     answer: 2
     },
     { question:"e. What is the name of the man who launched eBay back in 1995?",
     options:[" Pierre Omidyar", "Pierce Brosman", "Harvey Specter"], 
     answer: 0
     },
     { question:"f. What is the name of the biggest technology company in South Korea?",
     options:[" Itel", "Huawei", "Samsung"], 
     answer: 1
     },
     { question:"g. Which animal can be seen on the Porsche logo?",
     options:["Dog", "Horse", "Leopard"], 
     answer: 1
     },
     { question:"h. Who was the first woman to win a Nobel Prize (in 1903)?",
     options:["Maria Anthoinet", "Marie Don", "Marie Curie"], 
     answer: 2
     },
     { question:"i. Worship of Krishna is observed by which Religious Faith?",
     options:["Eckist", "Hinduism", "Budism"], 
     answer: 2
     },
     { question:"j. What is the common name for dried plums?",
     options:["Prunes", "Brains", "Grains"], 
     answer: 0
     },
     { question:"k. Which country consumes the most chocolate per capita?",
     options:["Switzerland", "Germany", "Republica Dominique"], 
     answer: 0
     },
     { question:"l. What was the first soft drink in space?",
     options:["Coca Cola", "Cola", "Manes"], 
     answer: 0
     },
     { question:"m. Which is the only edible food that never goes bad?",
     options:["Lime", "Lemon", "Honey"], 
     answer: 2
     },
     { question:"n. Which country invented ice cream?",
     options:["Japan", "China", "Spain"], 
     answer: 1
     },
     { question:"o. Which Disney Princess talks to the most animals?",
     options:["Cinderella", "SnowWhite", "Rapunzel"], 
     answer: 1
     },
     { question:"p. When Walt Disney was a child, which character did he play in his school function?",
     options:["Peter Pan", "Jack", "Shrek"], 
     answer: 0
     },
     { question:"q. Dump, floater, and wipe are terms used in which team sport?",
     options:["Squash", "Tennis", "Volleyball"], 
     answer: 2
     },
     { question:"r. How many points did Michael Jordan score on his first NBA game?",
     options:["15points", "20points", "16points"], 
     answer: 2
     },
     { question:"s. What's the fastest land animal?",
     options:["Cheetar", "Horse", "Deer"],
     answer: 0
     },
     { question:"t. In little red riding hood, who does the wolf dress up as?",
     options:["Mother", "Grandfather", "Grandmother"], 
     answer: 2
     },  
]
let activeQuestion = 0;
let score = 0;

const questionElement = document.getElementById("quiz");
const optionsElement = document.getElementById("options")
const submit = document.getElementById("submit")
const scoreElement = document.getElementById("score")

function showQuestion() {
    const activeQuizQuestion = questions[activeQuestions];
    questionElement.textcontent = activeQuizQuestion.question;

    optionsElement.innerHTML = "";
    for(let i = 0; i < activeQuestion.options.length; i++){
        const option = document.createElement(button)
        option.textcontent = activeQuestion.options[i];
        optionsElement.append(option);
    }
   }
   function seeAnswer(event){
      const chosenOption = event.target;
      const chosenAnswer = chosenOption.textcontent;
      const activeQuestion = questions[activeQuestion];
   //    if (activeQuestion.options[activeQuestion.answer]===chosenAnswer) {
   //       score++;
   //    }
       
   // activeQuestion ++;
   // if (activeQuestion < questions.length)
   // {loadQuestion();

   // }else {showResult()
   // }
      
   }  
   function showResult(){
      questionElement.textContent = "";
      optionsElement.innerHTML = "";
      submitButton.style,display = 'none';
      scoreElement.textContent = `Congratulation! your score is ${score}/${questions.length}`;
   }
   loadQuestion()














