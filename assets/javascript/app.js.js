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
  question: "What is the name of Quinns weapon?",
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