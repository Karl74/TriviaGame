
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
	var guess = 0;
// ////////// --- CREATES THE PAGES ELEMENTS --- ///////////////////////////////////
	var youHave = $("<h1>");
		youHave.attr("class", "timeText")
		youHave.html("You have" + "  ");
		$("#allIsHere").append(youHave);

	var secondsTimer = $("<h1>");
		secondsTimer.attr("class", "timeText");
		$("#allIsHere").append(secondsTimer);

	var secondsLeft = $("<h1>");
		secondsLeft.attr("class", "timeText");
		secondsLeft.html(" seconds left more");
		$("#allIsHere").append(secondsLeft);

	var questionContainer = $("<div>");
		questionContainer.attr("class", "stuffHere");
		$("#allIsHere").append(questionContainer);

	var answersContainer = $("<div>");
		answersContainer.attr("class", "stuffHere");
		$("#allIsHere").append(answersContainer);
	
// ////////// --- CREATES THE QUESTION  TEXT --- ////////////////////		
		
		function postQuestion(tr){
		var playQuestion = $("<h1>");
		playQuestion.html(trivia[tr].question);
		questionContainer.append(playQuestion);
		}
									
// ////////// --- CREATES THE BUTTONS WITH ANSWERS  --- ////////////////////				
		function fbutton1(tr){
			var button1 = $("<button>");
			createButton(button1, 0, tr);
		}
		
		function fbutton2(tr){
			var button2 = $("<button>");
			createButton(button2, 1, tr);
		}

		function fbutton3(tr){
			var button3 = $("<button>");
			createButton(button3, 2, tr);
		}

		function createButton(bnum, an, tr) {
			bnum.html(trivia[tr].answers[an]);
			bnum.attr("id", "button"+an);
			bnum.attr("class", "answerButton");
			answersContainer.append(bnum);
			bnum.on("click", function(){
				sorry();
			});//close the on function
		}
				 

		function rightAnswerFunc(tr){
			var buttonRA = $("<button>");
			buttonRA.html(trivia[tr].rightAnsw);
			buttonRA.attr("class", "answerButton");
			answersContainer.append(buttonRA);
			buttonRA.on("click", function(){
				youNailIt();
			});//close the on function
		}

		

// ////////// --- CALL ALL THE FUNCTIONS TO CONSTRUCT THE TRIVIA WITH NO TIMER  --- ////////////////////	
		
		function questionZero(){
			postQuestion(0);
			//displayTimer();
			fbutton1(0);
			rightAnswerFunc(0);
			fbutton2(0);
			fbutton3(0);
		}

		function questionOne(){
			postQuestion(1);
			//displayTimer();
			fbutton1(1);
			fbutton2(1);
			fbutton3(1);
			rightAnswerFunc(1);
		}

		function questionTwo(){
			postQuestion(2);
			//displayTimer();
			fbutton1(2);
			fbutton2(2);
			rightAnswerFunc(2);
			fbutton3(2);
		}



// ////////// --- THIS IS THE SCREEN TIMER  --- //////////////////////////////////////////////		
				
 		var timeLeft = 30;
		secondsTimer.html(timeLeft);

		function displayTimer(){
			var count = setInterval(countBack,1000);
			function countBack(){
				timeLeft --;
				secondsTimer.html(timeLeft);
				if(timeLeft == 0) {
					clearInterval(count);
				}
			}
		}//end of displaytimer

// ////////////////--- GUESS RESPONSES ////////////////////////////////////////////
function timeIsOver(){
	$("#allIsHere").empty();
	var noTimePicture = $("<img>");
	noTimePicture.attr("src", "assets/images/notime.gif");
	$("#allIsHere").append(noTimePicture);
	setTimeout(callTheQuestion,2000);	
}

function youNailIt(){
	$("#allIsHere").empty();
	var noTimePicture = $("<img>");
	noTimePicture.attr("src", "assets/images/right.gif");
	$("#allIsHere").append(noTimePicture);
	setTimeout(callTheQuestion,2000);
}

function sorry(){
	$("#allIsHere").empty();
	var noTimePicture = $("<img>");
	noTimePicture.attr("src", "assets/images/giphy.gif");
	$("#allIsHere").append(noTimePicture);
	setTimeout(callTheQuestion,2000);
}

// ///////////////////////// FUNCTIONS STARTERS /////////////////////////////////////////




});//end of readyfunction
 