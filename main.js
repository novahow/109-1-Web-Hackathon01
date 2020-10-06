var cells = document.getElementsByClassName("date")
var input = document.getElementById("cal-input")
var color = document.getElementById("cal-color")
var button = document.getElementById("cal-button")
var tked, prev, curn;
input.value = ''
color.value = '#b0b0b0'
button.addEventListener('click', () => {
	if(typeof tked != 'undefined'){
		gogo(input.value);
		input.value = '';
	}
})

input.addEventListener('keyup', event => {

  if (event.keyCode === 13 && event.target.value !== '')  {
	  	if(typeof tked != 'undefined'){
	  		gogo(event.target.value);
	  		event.target.value = '';
	  	}
	}
});

function tacke(cur, num) {

	if(typeof prev != 'undefined'){
		prev.style.backgroundColor = '';
		prev.style.color = "";
		//console.log(prev.innerHTML);
	}
	cur.style.backgroundColor = "#000000";
	cur.style.color = "#FFFFFF";
}
/*for(var i = 0; i < cells.length; i++){
	//console.log(i, cells.length);
	var t = cells[i];
	t.addEventListener('click', e => {
		tked = e.target;
		//console.log(e.target.id);
		tacke(e.target);
		prev = e.target;

	})
}*/
function cc(rr, num){
	tked = rr;
	curn = num;
	console.log(curn);
	tacke(rr, num);
	prev = rr;
}
function gogo(tx){
	if(typeof tked != 'undefined'){
		//var tp = document.createElement("DIV");
		tked.innerHTML = curn.toString() + `<br><span>${tx}</span>`;
		//tp.style.color = color.value;
		/*if(tked.childNodes.length > 1){
			tked.removeChild(tked.lastElementChild);
		}
		tked.appendChild(tp);*/
	}
	//console.log(tked.childNodes.length);
}
//Sets the page's theme. No need to modify
var themeButton = document.getElementsByClassName("ChooseTheme")
for(var i=0; i<themeButton.length; ++i) {
    themeButton[i].addEventListener('click', e => {
        document.body.setAttribute('class', e.target.id)
    }, false)
}