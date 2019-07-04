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
  ["Who was the only President to serve more than two terms?", "Ulysses S. Grant", "Theodore Roosevelt","Franklin D. Roosevelt","George Wsahington","Franklin D. Roosevelt"],
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
function _(x){
  return document.getElementById(x);
}
function renderQuestion(){
  quiz =_("quiz");
  if(pos >= questions.length){
    quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    _("quizStatus").innerHTML = "Quiz Completed";
    pos =0;
    correct =0;
    return false;
  }
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
//function to check if answers are correct
function checkAnswer(){
  choices = document.getElementsByName("choices");
  for(var i =0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  //does the chosen answer equal the correct answer
  if(choice == questions[pos][5]){
  correct++;
  }
  //moves to next question
  pos++;
  renderQuestion();
}
window.addEventListener("load", renderQuestion, false);
//is the player on the last question