$('#start').on('click', function () {
  // subwrapper will remove start button and replace with questions
  // $('#subwrapper').remove();
  game.start();
});

var questions = [{
  question: "What actor played Groot in Guardians of the Galaxy ",
  answers: [" Peter Quill   ", " Tom Seleck   ", " Van Diesel   ", " The Rock   ", " Mickey Mouse  "],
  correctAnswer: "Van Diesel   "
}, {
  question: " What singer was suppose to play a cameo role in Guardians of the Galasy II but sadly passed away?",
  answers: [" Billy Joel   ", " Prince   ", " David Bowie   ", " Tom Petty   "],
  correctAnswer: "David Bowie   "
}, {
  question: "Who is Quills father?",
  answers: [" Json   ", " Ego   ", " Staker   ", " Novo Prime   ", " Grott   "],
  correctAnswer: "Ego   "
}, {
  question: "What race is Taser Face part of?",
  answers: [" Humans   ", " Martians   ", " The borg   ", " The stark   " ],
  correctAnswer: "The Stark   "
}, {
  question: "What is the name of the exiled Ravenger that stole Quinn from Earth?",
  answers: [" Atila the Hun   ", " Ronan the Accuser   ", " Yondu Udonta   ", " Taserface   ", " Mr Ed   "],
  correctAnswer: "Yondu Udonta  "
}, {
  question: "What is the name of Yondy Udonta's weapon?",
  answers: [" The Red Arrow   ", " Arrowhead   ", " Mr Robinson   ", " Yaka Arrow   ", " Whistler   "],
  correctAnswer: "Yaka Arrow   "
}];

var game = {
    correct: 0,
    incorrect: 0,
    // seconds
    counter: 30,
    countdown: function () {
        // created counter function that will 'start' below
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is up");
            // this method will run when game is done
            game.done();
        }
    },
    start: function () {
        // insert time, 1000seconds
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">30</span> Seconds</h2>');
        $('#start').remove();
        for (var i = 0; i < questions.length; i++) {
            // append to subwrapper
            $('#subwrapper').append('<h2>' + questions[i].question + '</h2');
            // subloop
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type='radio' name='question-" +i+ "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }

        }
    },
    done: function(){
        $.each($("input[name='question-0']:checked"),function() {
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"),function() {
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"),function() {
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"),function() {
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"),function() {
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"),function() {
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h3>All done!</h3>");
        // print all correct and incorrect answers
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        // print questions not answered
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
