//variables for quiz
let pos = 0;
let quiz = 0;
let quizStatus = 0;
let question = 0;
let choice = 0;
let choices = 0;
let answer1 = 0;
let answer2 = 0;
let answer3 = 0;
let answer4 = 0;
let correct = 0;
//question array
let questions = [
  ["?", "1", "2","3","4","answer"],
  [],
  [],
  [],
  [],
  [],
  []

];
function _(x){
  return document.getElementById(x);
}
function renderQuestion(){
  quiz =_("quiz");
  _("quizStatus").innerHTML = "Question "+(pos+1) +" of "+questions.length;
  question = questions[pos][0];
  answer1 = questions[pos][1];
  answer2 = questions[pos][2];
  answer3 = questions[pos][3];
  answer4 = questions[pos][4];
  quiz.innerHTML = "<h3>"+question+"</h3>";
  quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+answer1+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+answer2+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+answer3+"<br>";
  quiz.innerHTML += "<input type='radio' name='choices' value='D'> "+answer4+"<br><br>";
  quiz.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  alert("check");
}
window.addEventListener("load", renderQuestion, false);