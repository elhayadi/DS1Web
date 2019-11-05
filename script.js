
const scr_total0 = document.getElementById('score-0');
const scr_total1 = document.getElementById('score-1');
const scr_current0 =document.getElementById('courent-0');
const scr_current1 =document.getElementById('courent-1');
const player1Class =document.querySelector('.panel-joueur-1');
const player0Class =document.querySelector(' .panel-joueur-0');
const LanceButton = document.querySelector(' .btn-lancer');
	//Qst1s
function Init(){
 scr_total1.innerHTML = 0;
 scr_total0.innerHTML = 0;
 scr_current0.innerHTML =0;
 scr_current1.innerHTML =0;
 player0Class.classList.toggle("actif");
 player1Class.classList.toggle("actif");
 document.getElementsByClassName('de')[0].style.display= "none";
}
Init();
