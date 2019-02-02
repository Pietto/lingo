var answer = 0;
var answer2 = 'incorrect';
var answer3 = 'incorrect';
var answer4 = 'incorrect';
var answer5 = 'incorrect';

var div1 = document.getElementById('inputs1');
var div2 = document.getElementById('inputs2');
var div3 = document.getElementById('inputs3');
var div4 = document.getElementById('inputs4');
var div5 = document.getElementById('inputs5');

var button = document.getElementById('button');
	button.onclick = check;

for(i=1; i<=5; i++){												//create test playingbord
	var tabicon = document.createElement("input");
	tabicon.setAttribute("class", "input"+i);
	tabicon.setAttribute("id", "input"+i);
	tabicon.setAttribute("maxlength", "1");
	div1.appendChild(tabicon);
}
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');
var input4 = document.getElementById('input4');
var input5 = document.getElementById('input5');

document.getElementById('input1').readOnly = true;					//prevents player from being able to change the given letter


	var list = ['WOORD','KAPOT','LENIG'];							//word list
	var word = list[Math.floor(Math.random()*list.length)]; 		//picks random word from array

	var splittedword = word.split("");								//splits the word
	console.log(splittedword);										//displays the word (only for trial purposes)

	var first	= splittedword[0];
	var second	= splittedword[1];
	var third	= splittedword[2];
	var fourth	= splittedword[3];
	var fifth	= splittedword[4];

	console.log(first+second+third+fourth+fifth);					//displays the word (only for trial purposes)

	document.getElementById('input1').value = first;				//displays first letter

function check(){
	var input2C = input2.value.toUpperCase();						//changes text to uppercase
	var input3C = input3.value.toUpperCase();
	var input4C = input4.value.toUpperCase();
	var input5C = input5.value.toUpperCase();

	console.log(first+input2C+input3C+input4C+input5C)

	//checks 2nd letter
	if(input2C == second){											//gives feedback if word is correct/incorrect
		input2.style='background-color: green';
		answer=answer+1;
		answer2 = 'correct';
	}else{
		input2.style='background-color: red'
	}
	//checks 3rd letter
	if(input3C == third){
		input3.style='background-color: green';
		answer=answer+1;
		answer3 = 'correct';
	}else{
		input3.style='background-color: red'		
	}
	//checks 4th letter
	if(input4C == fourth){
		input4.style='background-color: green';
		answer=answer+1;
		answer4 = 'correct';
	}else{
		input4.style='background-color: red'		
	}
	//checks 5th letter
	if(input5C == fifth){
		input5.style='background-color: green';
		answer=answer+1;
		answer5 = 'correct';
	}else{
		input5.style='background-color: red'		
	}

	input1.style='background-color: green';

	if(answer != 4){
		goagain();
	}else{
		alert('u won!')
	}
}

function goagain() {
	for(i=6; i<=10; i++){												//create test playingbord
		var tabicon = document.createElement("input");
		tabicon.setAttribute("class", "input"+i);
		tabicon.setAttribute("id", "input"+i);
		tabicon.setAttribute("maxlength", "1");
		div2.appendChild(tabicon);
	}
	document.getElementById('input6').value = first;
	if(answer2 == 'correct'){
		document.getElementById('input7').value = second;
	}else{}
	if(answer3 == 'correct'){
		document.getElementById('input8').value = third;
	}else{}
	if(answer4 == 'correct'){
		document.getElementById('input9').value = fourth;
	}else{}
	if(answer5 == 'correct'){
		document.getElementById('input10').value = fifth;
	}else{}
}