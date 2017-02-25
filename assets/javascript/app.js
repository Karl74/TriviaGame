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
		
// ////////// --- CREATES THE QUESTION ELEMENT AND TEXT --- ////////////////////		
		
		function postQuestion(tr){
		var playQuestion = $("<h1>");
		playQuestion.html(trivia[tr].question);
		$("#questionGoesHere").append(playQuestion);
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
			$("#buttonsHere").append(bnum);	 
		}

		function rightAnswerFunc(tr){
			var buttonRA = $("<button>");
			buttonRA.html(trivia[tr].rightAnsw);
			$("#buttonsHere").append(buttonRA);
		}

// ////////// --- CALL ANY THE FUNCTIONS TO CONSTRUCT THE TRIVIA WITH NI TIMER  --- ////////////////////	
		
		function callTheQuestion(tr){
			postQuestion(tr);
			fbutton1(tr);
			rightAnswerFunc(tr);
			fbutton2(tr);
			fbutton3(tr);
			displayTimer();
		}
	
// ////////// --- THIS IS THE GAME TIMER  --- //////////////////////////////////////////////		
				
 		var timeLeft = 5;
		$("#seconds").html(timeLeft);

		function displayTimer(){
			var count = setInterval(countBack,1000);
			function countBack(){
				timeLeft --;
				$("#seconds").html(timeLeft);
				if(timeLeft == 0) {
					clearInterval(count);
					//$("#allIsHere").html("ITS OVER!!!!!!!!!!!!!!!!!!!!!!!!!!");
				}
			}
		}//end of displaytimer

		
callTheQuestion(1);

});//end of readyfunction
