
var trivia = [{
	question:"This Greek goddess sprang from the head of Zeus fully formed: and clad in armor",
	rightAnsw: "Athena",
	answers: ["hera", "Aprodite", "Artemis"]},
	{
	question:  "This Greek Titan's name means time. He's also the father of Zeus." ,
	rightAnsw: "Kronos",
	answers: ["Hercules", "Atlas", "Metis"]
	},
	{
	question: "This Greek maiden and consort of Zeus was transformed into a cow and then tormented by a gadfly sent by Hera. ",
	rightAnsw: "Lo" ,
	answers: ["Europa", "Petra", "Leda"]
	},
	{
	question: "This formidable Greek hero was so precocious that he strangled serpents in his cradle." ,
	rightAnsw: "Herakles",
	answers: ["Theseus", "Sarpedon", "Perseus"]
	},
	{
	question: "These crazed female followers of the wine god Dionysos are described in a play by Euripides",
	rightAnsw: "Maenads" ,
	answers: ["Nymphs", "Muses", "Nereids"]
	},
];

$(document).ready(function(){
	
// 1. THE TIMER TEXTS ------ ////////////////////////////////////////////////

	var youHave = $("<h1>");
		youHave.attr("class", "screenTimerPart");
		youHave.html("You have - ");
		$("#screenTimerBox").append(youHave);

	var secondsTimer = $("<h1>");
		secondsTimer.attr("class", "screenTimerPart");
		$("#screenTimerBox").append(secondsTimer);

	var secondsLeft = $("<h1>");
		secondsLeft.attr("class", "screenTimerPart");
		secondsLeft.html("- seconds left.");
		$("#screenTimerBox").append(secondsLeft);

//  2. CREATES THE QUESTION  TEXT ------ //////////////////////////////		
		
		function postQuestion(tr){
			var playQuestion = $("<h1>");
			playQuestion.html(trivia[tr].question);
			$("#textQuestBox").append(playQuestion);
		}
								
//  3. CREATES THE BUTTONS WITH ANSWERS TEXT AND REACTION EVENT  ------ //////////////////////////////				
	
		function fbutton1(tr,qId){
			var button1 = $("<button>");
			qId.answers(button1, 0, tr);
		}
		
		function fbutton2(tr,qId){
			var button2 = $("<button>");
			qId.answers(button2, 1, tr);
		}

		function fbutton3(tr,qId){
			var button3 = $("<button>");
			qId.answers(button3, 2, tr);
		}

		function createButton(bnum, an, tr) {
			bnum.html(trivia[tr].answers[an]);
			bnum.attr("id", "button"+an);
			bnum.attr("class", "answerButton");
			$("#buttonsBox").append(bnum);
			bnum.on("click", function(){
				qId.rightGuess();
			});//close the on function
		}
				 
		function createRAButton(tr,qId){
			var buttonRA = $("<button>");
			buttonRA.html(trivia[tr].rightAnsw);
			buttonRA.attr("class", "answerButton");
			$("#buttonsBox").append(buttonRA);
			buttonRA.on("click", function(){
				qId.rightGuess();
				
			});//close the on function
		}


// ////////// --- THIS IS THE SCREEN TIMER  --- //////////////////////////////////////////////		
			
 		var timeLeft = 7;
		secondsTimer.html(timeLeft);

		function screenTimer(){
			var count = setInterval(countBack,1000);
			function countBack(){
				timeLeft --;
				secondsTimer.html(timeLeft);
				if(timeLeft == 0) {
					clearInterval(count);
					timeLeft =7;
				}
			}
		}//end of displaytimer

// ////////////////--- GUESS RESPONSES ////////////////////////////////////////////
function timeIsOver(){
	var noTimePicture = $("<img>");
	noTimePicture.attr("src", "assets/images/notime.gif");
	$("#gifsBox").append(noTimePicture);
	}

function youNailIt(){
	var noTimePicture = $("<img>");
	noTimePicture.attr("src", "assets/images/right.gif");
	$("#gifsBox").append(noTimePicture);
}

function sorry(){
	var noTimePicture = $("<img>");
	noTimePicture.attr("src", "assets/images/giphy.gif");
	$("#gifsBox").append(noTimePicture);
}


// ///////////////////////// OBJECTS /////////////////////////////////////////
var questionOne = {
		index: 0,

		game: function (){
						//this.triviaTimer ();
						postQuestion(0);
						screenTimer();
						fbutton1(0, questionOne);
						createRAButton(0, questionOne);
						fbutton2(0, questionOne);
						fbutton3(0, questionOne);
						//guess reaccion();
						//nextquestion();
					},

		answers: function (bnum, an, tr) {
						bnum.html(trivia[tr].answers[an]);
						bnum.attr("id", "button"+an);
						bnum.attr("class", "answerButton");
						$("#buttonsBox").append(bnum);
						bnum.on("click", function(){
							questionOne.wrongGuess();
						});//close the on function
					},

		rightGuess: function(){
						$("#textQuestBox").empty();
						$("#buttonsBox").empty();
						youNailIt();
						setTimeout(function(){
							$("#gifsBox").empty();
							questionTwo.game();
							}, 3000);
						},
		
		wrongGuess: function(){
						$("#textQuestBox").empty();
						$("#buttonsBox").empty();
						sorry();
						setTimeout(function(){
							$("#gifsBox").empty();
							questionTwo.game();
							}, 3000);
					},

		yourDone: function(){
						$("#textQuestBox").empty();
						$("#buttonsBox").empty();
						timeIsOver();
						setTimeout(function(){
							$("#gifsBox").empty();
							questionTwo.game();
							}, 3000);
					},



		triviaTimer: function(){
						setTimeout(this.yourDone(),90000)
					}

	}; //end of the object questionOne


var questionTwo = {
		index: 1,
		game: function launch(){
						postQuestion(1);
						screenTimer();
						fbutton1(1, questionTwo);
						fbutton2(1, questionTwo);
						fbutton3(1, questionTwo);
						createRAButton(1, questionTwo);
						//gameTimer ();
						//guess reaccion();
						//nextquestion();
					},

		answers: function (bnum, an, tr) {
						bnum.html(trivia[tr].answers[an]);
						bnum.attr("id", "button"+an);
						bnum.attr("class", "answerButton");
						$("#buttonsBox").append(bnum);
						bnum.on("click", function(){
							questionTwo.wrongGuess();
						});//close the on function
					},

		rightGuess: function(){
						$("#textQuestBox").empty();
						$("#buttonsBox").empty();
						youNailIt();
						setTimeout(function(){
							$("#gifsBox").empty();
							questionThree.game();
							}, 3000);
						},
		wrongGuess: function(){
						$("#textQuestBox").empty();
						$("#buttonsBox").empty();
						sorry();
						setTimeout(function(){
							$("#gifsBox").empty();
							questionThree.game();
							}, 3000);
		}
		
	}; //end of the object questiontwo;

var questionThree = {
		index: 2,
		game: function launch(){
						postQuestion(2);
						screenTimer();
						createRAButton(2, questionThree);
						fbutton1(2, questionThree);
						fbutton2(2, questionThree);
						fbutton3(2, questionThree);
						//gameTimer ();
						//guess reaccion();
						//nextquestion();
					}
}; //end of the object questiontwo;



questionOne.game();
//questionOne.rightGuess();


});//end of readyfunction
 