function expressionAdd(val){
	document.getElementById('exp').value+=val;
}
function clearInput()
{
	document.getElementById('exp').value="";
}
function calculateExpression(){
	let expString=document.getElementById('exp').value;
	let finalResult=eval(expString);
	document.getElementById('exp').value=finalResult;
}