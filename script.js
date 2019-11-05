// ASMAA JITTOU - MOHAMED ELHAYADI
const scr_total0 = document.getElementById('score-0');
const scr_total1 = document.getElementById('score-1');
const scr_current0 =document.getElementById('courent-0');
const scr_current1 =document.getElementById('courent-1');
const player1Class =document.querySelector('.panel-joueur-1');
const player0Class =document.querySelector(' .panel-joueur-0');
const LanceButton = document.querySelector(' .btn-lancer');
const PassButton = document.querySelector(' .btn-passe');
const NvButton = document.querySelector(' .btn-new');
const imgDe = document.querySelector('.de');
const doc = document.querySelector('div');
	//Qst1s
function Init(){
 scr_total1.innerHTML = 0;
 scr_total0.innerHTML = 0;
 scr_current0.innerHTML =0;
 scr_current1.innerHTML =0;
 player0Class.classList.toggle("actif");
 player1Class.classList.toggle("actif");
 imgDe.style.visibility= "hidden";
}
Init();

//Qst2


function randomDe(){
 return(Math.floor(Math.random()*6 ) + 1);
}

var tempScore=0;
LanceButton.addEventListener("click", function (){
	
	const actifPlayer = document.querySelector('.actif .score-joueur-courent');
	let de =randomDe();
 var imgs = new Array("de-1","de-2","de-3","de-4","de-5","de-6");
	let src = imgs[de-1]+".png";
	imgDe.src=src;
	imgDe.style.visibility="visible";
	if(de==1){
		tempScore=0;
		player0Class.classList.toggle("actif");
		player1Class.classList.toggle("actif");
		imgDe.style.visibility= "hidden";
	}else{
	
	tempScore = tempScore + de;	
	}
	actifPlayer.innerHTML= tempScore;
	
});

//Qst3
function joueurSuivant(e){
	tempScore=0;
	const actifPlayercurr = document.querySelector('.actif .score-joueur-courent');
	const actifPlayertotal = document.querySelector('.actif .score-joueur');
	player0Class.classList.toggle("actif");
	player1Class.classList.toggle("actif");
	imgDe.style.visibility= "hidden";
   let sum = 0;
   sum=parseInt(actifPlayercurr.innerHTML)+parseInt(actifPlayertotal.innerHTML);
   actifPlayertotal.innerHTML=sum;
   actifPlayercurr.innerHTML=0;
   if(_isWining(sum)){
	   actifPlayertotal.innerHTML= "vainceur !!!";
	   PassButton.style.visibility= "hidden";
	   LanceButton.style.visibility= "hidden";
   }
}

PassButton.addEventListener("click", joueurSuivant);

//Qst4
var SCORE_MAX =30;

function _isWining( score ){
	if(score >= SCORE_MAX){
		return(true);
	}else{
		return(false);
	}
}

//Qst5
function Nouveau(){
	Init();
	PassButton.style.visibility= "visible";
	LanceButton.style.visibility= "visible";
}
NvButton.addEventListener("click",Nouveau);

//Qst6
const elmnew = document.createElement("input");
const elmnew1 = document.createElement("button");
doc.append(elmnew);
doc.append(elmnew1);