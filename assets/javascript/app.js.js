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
