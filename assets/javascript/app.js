let myVar;
function startTimer() {
  myVar = setInterval(function(){myTimer()},1000);
  timelimit = maxtimelimit;
}
function myTimer() {
  if (timelimit > 0) {
    curmin=Math.floor(timelimit/60);
    cursec=timelimit%60;
    if (curmin!=0) { 
      curtime=curmin+" minutes and "+cursec+" seconds left"; 
    }else { 
      curtime=cursec+" seconds left"; 
    }
    $('timeleft').innerHTML = curtime;
  } else {
    $('timeleft').innerHTML = timelimit+' - Out of Time - Impeachment!!!';
    clearInterval(myVar);
  }
  timelimit--;
}
//golbal variables
let pos = 0;
let posNum; 
let choice; 
let correct = 0; 
let score = 0;
let maxtimelimit = 20;
let timelimit = maxtimelimit;  
//question array
let questions = [
  ["Who was the only President to serve more than two terms?", "Ulysses S. Grant", "Theodore Roosevelt","Franklin D. Roosevelt","George Washington","Franklin D. Roosevelt"],
    ["Who was the only President to serve two non-consecutive terms?", "Theodore Roosevelt", "Grover Cleveland", "Ronald Regan", "Woodrow Wilson", "Grover Clevland"],
    ["Who is the oldest elected President?", "Dwight Eisenhower", "Ronald Regan", "James Buchanan", "Donald Trump", "Donald Trummp"],
    ["Who was the first President to live in the White House?", "George Washington", "John Adams", "Andrew Jackson", "Thomas Jefferson", "John Adams"],
    ["Who was the first President to be born outside the contiguous United States?", "William Howard Taft", "Benjamin Harrison","Barrak Obama", "Franklin Pierce", " Barak Obama"],
    ["Who was the first President to appear on T.V.?", "Dwight Eisenhower", "John F. Kennedy", "Harry S. Truman", "Franklin D. Roosevelt", "Franklin D. Roosevelt"],
    ["Who was the first President to be impeached?", "Andrew Johnson", "Richard Nixon", "Calvin Coolidge", "Bill Clinton", "Andrew Johnson"],
    ["How many Presidents signed the Declaration of Independence?", "1", "2", "4", "None", "2"],
    ["Who is the only Presidentnt to earn his Masters of Business Administration?", "Woodrow Wilson", "George H.W. Bush", "George W. Bush", "Bill Clinton", "George W. Bush"],
    ["Prior to the Capitol Building in Washington D.C., where were the Presidential inaugrations held?", "Federal Hall, New York", "Monticello, North Carolina", "Independence Hall, Pennsylvania", "Faneuil Hall, Massachusetts", "Federal Hall, New York"]
  
   
];
let answers = []
//chose a new question in array
let questionOrder = [];
function setQuestionOrder() {
 questionOrder.length = 0;
 for (var i=0; i<questions.length; i++) { 
   questionOrder.push(i);
 }
 questionOrder.sort(randOrd);  
 pos = 0;  
 posNum = questionOrder[pos];
}
//randomly choose question
function $(check) { return document.getElementById(check); }
function randOrd() { return (Math.round(Math.random())-0.5); }
function renderResults(){
  let test = $("test");
  test.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
  $("test_status").innerHTML = "Term Completed";
  $('timeleft').innerHTML = '';
  setQuestionOrder();
  correct = 0;
  clearInterval(myVar);
  return false;
}
//questions box 
function renderQuestion() {
  let test = $("test");
  $("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  let question = questions[posNum][0];
  let choiceA = questions[posNum][1];
  let choiceB = questions[posNum][2];
  let choiceC = questions[posNum][3];
  let choiceD = questions[posNum][4]; 
  test.innerHTML = "<h3>"+question+"</h3>";
  test.innerHTML += "<label><input type='radio' name='choices' value='A'> "+choiceA+"</label><br>";
  test.innerHTML += "<label><input type='radio' name='choices' value='B'> "+choiceB+"</label><br>";
  test.innerHTML += "<label><input type='radio' name='choices' value='C'> "+choiceC+"</label><br>";
  test.innerHTML += "<label><input type='radio' name='choices' value='d'> "+choiceD+"</label><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
  timelimit = maxtimelimit;
  clearInterval(myVar);
  startTimer();
}
//check to see if answers are correct
function checkAnswer(){
  let choices = document.getElementsByName("choices");
  console.log(choices);
  for (var i=0; i<choices.length; i++) {
    if (choices[i].checked) { choice = choices[i].value; }
  }
  score++;
  if (choice == [posNum][5] && timelimit > 0) {
     correct++; }
  pos++;  
  posNum = questionOrder[pos];
  if (pos < questions.length) {
     renderQuestion(); 
  
  } else { 
    renderResults(); }
}

window.onload = function() {
  setQuestionOrder();
  renderQuestion();
}

console.log("[posNum][5]");
console.log("correct");


// //variables for quiz
// let pos = 0;
// let quiz = 0;
// let quizStatus = 0;
// let question = 0;
// let choice = 0;
// let choices = 0;
// let answer1 = 0;
// let answer2 = 0;
// let answer3 = 0;
// let answer4 = 0;
// let correct = 0;
// let myVar;
// function startTimer() {
//   myVar = setInterval(function(){myTimer()},1000);
//   timelimit = maxtimelimit;
// }
// function myTimer() {
//   if (timelimit > 0) {
//     curmin=Math.floor(timelimit/60);
//     cursec=timelimit%60;
//     if (curmin!=0) { curtime=curmin+" minutes and "+cursec+" seconds left"; }
//               else { curtime=cursec+" seconds left"; }
//     $_('timeleft').innerHTML = curtime;
//   } else {
//     $_('timeleft').innerHTML = timelimit+' - Out of Time - no credit given for answer';
//     clearInterval(myVar);
//   }
//   timelimit--;
// }

// //question array
// let questions = [
//   ["Who was the only President to serve more than two terms?", "Ulysses S. Grant", "Theodore Roosevelt","Franklin D. Roosevelt","George Washington","Franklin D. Roosevelt"],
//   ["Who was the only President to serve two non-consecutive terms?", "Theodore Roosevelt", "Grover Cleveland", "Ronald Regan", "Woodrow Wilson", "Grover Clevland"],
//   ["Who is the oldest elected President?", "Dwight Eisenhower", "Ronald Regan", "James Buchanan", "Donald Trump", "Donald Trummp"],
//   ["Who was the first President to live in the White House?", "George Washington", "John Adams", "Andrew Jackson", "Thomas Jefferson", "John Adams"],
//   ["Who was the first President to be born outside the contiguous United States?", "William Howard Taft", "Benjamin Harrison","Barrak Obama", "Franklin Pierce", " Barak Obama"],
//   ["Who was the first President to appear on T.V.?", "Dwight Eisenhower", "John F. Kennedy", "Harry S. Truman", "Franklin D. Roosevelt", "Franklin D. Roosevelt"],
//   ["Who was the first President to be impeached?", "Andrew Johnson", "Richard Nixon", "Calvin Coolidge", "Bill Clinton", "Andrew Johnson"],
//   ["How many Presidents signed the Declaration of Independence?", "1", "2", "4", "None", "2"],
//   ["Who is the only Presidentnt to earn his Masters of Business Administration?", "Woodrow Wilson", "George H.W. Bush", "George W. Bush", "Bill Clinton", "George W. Bush"],
//   ["Prior to the Capitol Building in Washington D.C., where were the Presidential inaugrations held?", "Federal Hall, New York", "Monticello, North Carolina", "Independence Hall, Pennsylvania", "Faneuil Hall, Massachusetts", "Federal Hall, New York"]

// ];
// function _(x){
//   return document.getElementById(x);
// }
// function renderQuestion(){
//   quiz =_("quiz");
//   if(pos >= questions.length){
//     quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
//     _("quizStatus").innerHTML = "Quiz Completed";
//     return false;
//   }
//   _("quizStatus").innerHTML = "Question "+(pos+1) +" of "+questions.length;
//   question = questions[pos][0];
//   answer1 = questions[pos][1];
//   answer2 = questions[pos][2];
//   answer3 = questions[pos][3];
//   answer4 = questions[pos][4];
//   quiz.innerHTML = "<h3>"+question+"</h3>";
//   quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+answer1+"<br>";
//   quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+answer2+"<br>";
//   quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+answer3+"<br>";
//   quiz.innerHTML += "<input type='radio' name='choices' value='D'> "+answer4+"<br><br>";
//   quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
// }
// //function to check if answers are correct
// function checkAnswer(){
//   choices = document.getElementsByName("choices");
//   for(var i =0; i<choices.length; i++){
//     if(choices[i].checked){
//       choice = choices[i].value;
//     }
//   }
//   //does the chosen answer equal the correct answer
//   if(choice == questions[pos][5]){
//   correct++;
//   }
//   //moves to next question
//   pos++;
//   renderQuestion();
// }
