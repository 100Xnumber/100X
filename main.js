toggle = function(clas,e) {
	if(clas==".sidebets") {
		document.querySelector('.pastrounds').style.display = "none";
		document.querySelector('.prl').innerHTML = "Past Rounds";
	} else if(clas==".pastrounds") {
		document.querySelector('.sidebets').style.display = "none";
		document.querySelector('.sbl').innerHTML = "All Bets";
	} 
	
	qs = document.querySelector(clas);
	if(qs.style.display!=="block") {
	qs.style.display = "block";
	lt = e.innerHTML;
	e.innerHTML = 'Hide'; }
	else {
	qs.style.display = "none";
	e.innerHTML = lt; }
}


window.onpageshow = function() {
vate = new Date();
va = vate+"";
vu =va.split('GMT');
vi = vu[0].split(' ');
vo = vi[4].split(':');
svt = vo[2]*1;
mvt = vo[1]*1;
hvt = vo[0]*1;
if(svt<20) { xvt = 2; } else if(svt<40) { xvt = 1; } else if(svt<60) { xvt = 0; }
window.chv = Math.pow(45-hvt,5);
chv = chv + svt*svt;
window.chv = window.chv.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
document.getElementById('combal1').innerHTML = 'ZAR'+window.chv;

if(localStorage.getItem('balance'))
{ document.getElementById('balance').innerHTML = localStorage.getItem('balance'); }
	balanceControl();
	document.querySelector('#menu').addEventListener('blur',function(){
	document.querySelector('#menu').zIndex = '0';	
	});
	
	document.querySelector('#menu').addEventListener('focus',function(){
	document.querySelector('#menu').zIndex = '4';	
	});

	document.querySelector('#wallet').addEventListener('blur',function(){
	document.querySelector('#wallet').zIndex = '0';	
	});
	
	document.querySelector('#wallet').addEventListener('focus',function(){
	document.querySelector('#wallet').zIndex = '4';	
	});

	document.querySelector('#profile').addEventListener('blur',function(){
	document.querySelector('#profile').zIndex = '0';	
	});
	
	document.querySelector('#profile').addEventListener('focus',function(){
	document.querySelector('#profile').zIndex = '4';	
	});
	
	document.querySelector('.bet.adder').addEventListener('click',function(){
		if(document.getElementsByClassName('bet')[2].getAttribute('class')=='bet adder') {
			document.getElementsByClassName('bet')[2].setAttribute('class','bet');
			document.getElementsByClassName('bet')[3].setAttribute('class','bet adder');
		document.querySelector('.bet.adder').addEventListener('click',function(){
		if(document.getElementsByClassName('bet')[3].getAttribute('class')=='bet adder') {
			document.getElementsByClassName('bet')[3].setAttribute('class','bet');
			document.getElementsByClassName('bet')[4].setAttribute('class','bet adder');
			document.querySelector('.bet.adder').addEventListener('click',function(){
		if(document.getElementsByClassName('bet')[4].getAttribute('class')=='bet adder') {
			document.getElementsByClassName('bet')[4].setAttribute('class','bet');
		}  
	});
		}  
	});	
		}  
	});
	
	loadRound();
}
window.onloadstart = function() {

}

window.onload = function() {
	window.stopAll = false;
	document.querySelector('.pastrounds .list').innerHTML = localStorage.getItem('pastrounds');
	window.cssStyle = "";
}


bet = function(e,t) {
	if(window.stopAll==false) {
	var p = e.parentNode;
	var bb = p.querySelector('.status');
	var ab = p.querySelector('.status.autobut');
	var xn = p.querySelector('.heading').innerHTML;
	var bn = xn[xn.length-1];
	var av = p.querySelector('#amount'+bn);
	var nv = p.querySelector('#number'+bn);
	balance=document.getElementById('balance').innerHTML*1;
	amountx = av.value*1
	if(e.innerHTML=='Place Bet' && av.value>1 && av.value<10001 && nv.value!=="" && nv.value<101 && balance>=amountx)
	{
		af=document.getElementById('amount'+bn);
		newbal = balance - af.value;
		document.getElementById('balance').innerHTML = newbal +".00";
		balanceControl();
		e.innerHTML = 'Bet Placed';
		p.className += ' locked';
	} else 	if(e.innerHTML=='Automate Bet' && av.value>1 && av.value<10001 && nv.value!=="" && nv.value<101 && balance>=amountx)
	{	
		
		af=document.getElementById('amount'+bn);
		newbal = balance - af.value;
		document.getElementById('balance').innerHTML = newbal +".00";
		balanceControl();
		e.innerHTML = 'Automated Bet Placed';
		p.className += ' locked';
	} else {
		p.style.border="1px solid red";
		window.setTimeout(function() {
		p.style.border="";
		},2000);
	}
	}
}

cancelBet = function(e) {
if(window.stopAll==false) {
	fs = e.className.split(' ');
	if(fs[1]=="locked") {
	vvh = e.querySelector('.heading').innerHTML;
	bvn = vvh[vvh.length-1];
	dv = document.querySelector('#amount'+bvn).value;
	ans = document.getElementById('balance').innerHTML*1+dv*1;
	document.getElementById('balance').innerHTML=ans.toFixed(2);
	balance = document.getElementById('balance').innerHTML;
	balanceControl();
	e.className = e.getAttribute('class').replace(' locked','');
		e.querySelector('.status').innerHTML='Place Bet';
		e.querySelector('.status.autobut').innerHTML='Automate Bet';
	e.blur();
	}
	}
}

cancelAllBets = function() {
	
	e = document.getElementsByClassName('locked');
    cancelBet(e[4]);
    cancelBet(e[3]);
    cancelBet(e[2]);
    cancelBet(e[1]);
    cancelBet(e[0]);
   window.cssStyle = "";
	return "All bets have been cancelled.";
}

window.addEventListener("visibilitychange", function(event) {
  
			
	document.getElementById('eta').innerHTML = 'Next round starts in <font id="tts"></font> seconds.';
	document.getElementById('teta').innerHTML = 'Next round starts in <font id="tts2"></font> seconds.';
				//loadRound();
});





window.setInterval(function() {
window.cssStyle = "";
const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    eval(this.response);
	if(window.cssStyle.length>1)
	{
		document.getElementById('connection').style.display = "none";
	} else {
		
		document.getElementById('connection').style.display = "block";
	}
    //this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "responsive2.css");
xhttp.send();
},5000);

sync = function() {
rate = new Date();
ra = rate+"";
ru = ra.split('GMT');
ri = ru[0].split(' ');
ro = ri[4].split(':');
st = ro[2]*1;
met = ro[1]*1;
ht = ro[0]*1;
if(st<20) { xt = 2; } else if(st<40) { xt = 1; } else if(st<60) { xt = 0; }
window.chu = 1+xt*met*3.3333333+st+ht*1.5;
chu = chu + "";
cib = chu.split('.');
window.chu = cib[0]*1;
return window.chu;
}


window.addEventListener('blur',function() {
//
});
window.addEventListener('focus',function() {
//
});


expand = function(e) {
	var o = 0;
	var ow = document.getElementsByClassName('data');
	while(o<ow.length) {
	document.getElementsByClassName('data')[o].style.display = 'none';
	o++; }
	if(
	e.nextSibling.style.display == "none") {
	e.nextSibling.style.display = "block";
	} else {
	e.nextSibling.style.display = "block";
	}
}