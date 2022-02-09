function expressionAdd(val){
	document.getElementById('exp').value+=val;
}

function clearInput(){
	document.getElementById('exp').value="";
}

function calculateExpression(){
	let expString=document.getElementById('exp').value;
	let finalResult=eval(expString);
	if(finalResult==undefined){
		alert("Please enter the right input");
		document.getElementById('exp').value="";
	}
	else{
	document.getElementById('exp').value=finalResult;
	history(expString,finalResult);
	}
}

function history(expstring,finalresult){
	historyString=expstring+"="+finalresult;
	document.getElementById('history').innerHTML+=historyString+'<br/>';	
}

function deleteHistory(){
	document.getElementById('history').innerHTML="";
}