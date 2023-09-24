spin = function() {
	window.mT = '';
	window.stopAll = true;
	document.getElementsByTagName('style')[0].innerHTML = '.bet.locked::after {content:"Bet Locked";} .bets .bet .status {color:dimgray;}';
		document.getElementById('eta').innerHTML = 100;
		
		kno = document.getElementById('eta').innerHTML;
		kno = 100;
		kno = kno*1;
		window.spinner = window.setInterval(function() {
			if(kno<100)  {
				kno++;
			} else {
			kno = 0;
			}
			document.getElementById('eta').innerHTML = kno;
			document.getElementById('teta').innerHTML = 'Random Selector';
			tableIT(mT);
			
		},1);
}

loadRound = function() {
	window.rayt = "";
	document.getElementById('eta').innerHTML = 'Next round starts in <font id="tts"></font> seconds.';
	document.getElementById('teta').innerHTML = 'Next round starts in <font id="tts2"></font> seconds.';
	date = new Date();
date = " " + date;
sc = date.split(' GMT');
scs = sc[0];
sec = scs[scs.length-2] + '' + scs[scs.length-1]
sec = sec.replace('00','0');
sec = 60 - sec*1;
if(sec<30)
{
	sk = 1*sec;
	document.querySelector('#tts').innerHTML = sk; 
	document.querySelector('#tts2').innerHTML = sk; 
} else
if(sec<60)
{
	sk = 1*sec;
	sk=sk-30;
	document.querySelector('#tts').innerHTML = sk; 
	document.querySelector('#tts2').innerHTML = sk; 
} 
if(sk<23)
{
	document.querySelector('#tts').innerHTML = sk; 
	document.querySelector('#tts2').innerHTML = sk; 
} 
window.realNO = sk;;
if(sk>23) 
{
	sk = sk-23;
window.realTime = sk*1000;
window.spinTime = realTime-4000;
if(spinTime<0) {
	spinTime = 0;
}
			copyLocked();
			spin();
			window.setTimeout(function() {
			 window.mT = random();
				document.getElementById('eta').innerHTML = mT;
				
				document.getElementById('eta').innerHTML = '<font id="winner">' + mT + '</font>';
				document.getElementById('teta').innerHTML = 'The winning number is <b>' + mT + '</b></font>';
				tableIT(mT);
			window.clearInterval(spinner);
			},spinTime*1+100);
			window.setTimeout(function() {
				loadRound();
				
	window.stopAll = false;
	document.getElementsByTagName('style')[0].innerHTML = '';
	breakBets();
			},realTime);

}	
else {
window.realTime = 7000;
	no = window.realNO;
		no = no*1;
		counter = window.setInterval(function() {
			if(no>0)  {
				no = no-1;
			} else {
				date = new Date();
date = " " + date;
sc = date.split(' GMT');
scs = sc[0];
sec = scs[scs.length-2] + '' + scs[scs.length-1]
sec = sec.replace('00','60');
sec = 60 - sec;
if(sec<30)
{
	sk = 1*sec;
	document.querySelector('#tts').innerHTML = sk; 
	document.querySelector('#tts2').innerHTML = sk; 
} else
if(sec<60)
{
	sk = 1*sec;
	sk=sk-30;
	document.querySelector('#tts').innerHTML = sk; 
	document.querySelector('#tts2').innerHTML = sk; 
} 

no = 30 - sk;
			}
		if(no==5 && !rayt)
		{
		rayt = 25;
		dole(); 
		} else if(no==8 && !rayt)
		{
		rayt = 50;
		dole(); 
		} else if(no==14 && !rayt)
		{
		rayt = 90;
		dole(); 
		} else if(no==17 && !rayt)
		{
		rayt = 150;
		dole(); 
		} else if(no==20 && !rayt)
		{
		rayt = 200;
		dole(); 
		}
			document.getElementById('tts').innerHTML = no;
			document.getElementById('tts2').innerHTML = no;
			non = 30-no;
			non = non*30;
			//document.getElementById('noloader').style.width = "calc(" + non + "%)";	
		if(no==0) {
			copyLocked();
			spin();
			window.clearInterval(counter);
			
			window.setTimeout(function() {
			window.mT = random();
				document.getElementById('eta').innerHTML = window.mT;
				document.getElementById('eta').innerHTML = '<font id="winner">' + mT + '</font>';
				document.getElementById('teta').innerHTML = 'The winning number is <b>' + mT + '</b></font>';
			window.clearInterval(spinner);
				tableIT(mT);
			},3000);
			window.setTimeout(function() {
				loadRound();
				
	window.stopAll = false;
	document.getElementsByTagName('style')[0].innerHTML = '';
	breakBets();
	//window.setTimeout(function() { putLocked(); },500);
			},realTime);
		}
		},1000);
}		
	
}

random = function() {
	
	re = (Math.random() * 100);
	re = re + " ";
	re = re.split('.');
	winno = re[0].replace(' ','');
	sync();
	if(!window.cssStyle) { document.getElementById('eta').innerHTML='Restoring Connection..'; cancelAllBets(); window.setTimeout(function() { location='';},2000); return 'Restoring Connection..';} 
	winno = window.cssStyle[window.chu];
	window.wheel = winno;
	winner(winno);
	return winno;
}

breakBets = function() {
	if(document.getElementsByClassName('locked')) {
	lck = document.getElementsByClassName('locked');
	i=lck.length-1;
		while(i>=0) {
	if(lck[i].querySelector('.status').innerHTML=="Bet Placed")
	{
		cl = lck[i].getAttribute('class');
		lck[i].querySelector('.status').innerHTML="Place Bet";
		lck[i].className = cl.replace(' locked','');
	} else if(lck[i].querySelector('.status.autobut').innerHTML=="Automated Bet Placed") {
	 e = lck[i].querySelector('.status.autobut');
		  p = e.parentNode;
	 bb = p.querySelector('.status');
	 ab = p.querySelector('.status.autobut');
	 xn = p.querySelector('.heading').innerHTML;
	 bn = xn[xn.length-1];
	 av = p.querySelector('#amount'+bn);
	 nv = p.querySelector('#number'+bn);
	balance = document.querySelector('#balance').innerHTML*1;
	avvv = av.value*1;
		if(balance>=avvv)
	{
		newbalance = balance-avvv;
		balance = newbalance.toFixed(2);
		document.querySelector('#balance').innerHTML = balance;
		balanceControl();
		//alert(document.querySelector('#balance').innerHTML)
	} else {
		cl = lck[i].getAttribute('class');
		lck[i].querySelector('.status.autobut').innerHTML="Automate Bet";
		lck[i].className = cl.replace(' locked','');
	}
	}
		//alert(avvv + ' ' + i + ' ' + p.outerHTML)	
	i=i-1;	}
}
}

balanceControl = function() {
	balancee = document.getElementById('balance');
	balance = balancee.innerHTML;
	bd = balance.split('.');
	decibalance = bd[0]; 
	//amount limits
	amz = document.querySelectorAll('input[min="5"]');
	nmz = document.querySelectorAll('input[min="0"]');
	c=0;
	while(c<amz.length) {
		amz[c].setAttribute('max',decibalance);
		if(decibalance==0) {
			amz[c].setAttribute('readonly','true');
			nmz[c].setAttribute('readonly','true');
		}
	
	c++; }
	
	localStorage.setItem('balance',balance);
}



winner = function(w) {
	cate = new Date();
ca = cate+"";
cu = ca.split('GMT');
ci = cu[0].split(' ');
co = ci[4].split(':');
cst = co[2]*1;
cmt = co[1]*1;
	
	dr1a = w*1-3;
	dr1b = w*1+3;
	dr2a = w*1-2;
	dr2b = w*1+2;
	dr10a = w*1-1;
	dr10b = w*1+1;
	dr0 = w*1;
	xtotal = 0;
	listing = "";
	ck = document.getElementsByClassName('locked');
	i=0;
		hun = "";
		hump = "";
		rec = "";
		recs = "";
		rc = 0;
		while(i<ck.length) {
			sbt = 0;
		sel = ck[i].querySelector('input[min="0"]');
		sul = ck[i].querySelector('input[min="5"]');
		sx = sel.value*1;
		su = sul.value*1;
		hp = su;
		mb = ' x 0 ';
		huh=i*1+1;
		if(sx==dr1a || sx==dr1b) {
		xtotal += su*1;	
		sbt +=  su*1;
		document.getElementById('hun'+huh).innerHTML = 'ZAR'+hp+' x 1';
		document.getElementById('hun'+huh).style.display = 'block'; 
		mb = ' x 1 ';
		ck[i].innerHTML = hun + ck[i].innerHTML;
		}
		if(sx==dr2a || sx==dr2b) {
		xtotal += su*2;	
		sbt += su*2;	
		document.getElementById('hun'+huh).innerHTML = 'ZAR'+hp+' x 2';
		document.getElementById('hun'+huh).style.display = 'block';
		mb = ' x 2 ';
		ck[i].innerHTML = hun + ck[i].innerHTML;
		}
		if(sx==dr10a || sx==dr10b) {
		xtotal += su*10;	
		sbt += su*10;	
		document.getElementById('hun'+huh).innerHTML = 'ZAR'+hp+' x 10';
		document.getElementById('hun'+huh).style.display = 'block'; 
		mb = ' x 10 ';
		ck[i].innerHTML = hun + ck[i].innerHTML;
		}
		if(sx==dr0) {
		xtotal += su*100;	
		sbt += su*100;	
		document.getElementById('hun'+huh).innerHTML = 'ZAR'+hp+' x 100';
		document.getElementById('hun'+huh).style.display = 'block'; 
		mb = ' x 100 ';
		ck[i].innerHTML = hun + ck[i].innerHTML;
		}
		hump[i]=hp; 
		hj=ck[i].querySelector('.heading').innerHTML;
		cbn = hj[hj.length-1];
		
		listing += '<div class="listing">Bet '+cbn+': #'+sx+' - ZAR'+su+' '+mb+' > ZAR'+sbt+' </div>';
		i++; }
		
		
		
		hue = document.getElementsByClassName('hun');
		
		ball = document.getElementById('balance');
		balance = ball.innerHTML*1;
		balance = (xtotal*1)+(balance*1);
		
		if((document.getElementById('balance').innerHTML*1)<balance) {
			
		let kaching = document.getElementById('tone');
		kaching.play();
		document.getElementById('balance').className = "won";
		window.setTimeout(function() {
		document.getElementById('balance').className = "";
		f=0;
		df = document.getElementsByClassName('hun');
		while(df.length>f) {
			df[f].style.display = "none";
		f++;	}
		},2000);
		}
		document.getElementById('balance').innerHTML = balance.toFixed(2);
		
		if(listing.length>0) {
			date = new Date();
		document.querySelector('.pastrounds .list').innerHTML = '<div class="listing">Winning 100X number: '+ w + ' <br/><text class="smalldate">'+ cu[0] +'</text></div>' + listing + '<div class="split"></div>' + document.querySelector('.pastrounds .list').innerHTML; 
		localStorage.setItem('pastrounds',document.querySelector('.pastrounds .list').innerHTML);
		}
		
		dola(w);
		putLocked();
}

tableIT = function(u) {
	tab = document.getElementById('table');
	tab.querySelector('.r1').innerHTML = naT(u-3);
	tab.querySelector('.r2').innerHTML = naT(u-2);
	tab.querySelector('.r3').innerHTML = naT(u-1);
	tab.querySelector('.r4').innerHTML = u;
	tab.querySelector('.r5').innerHTML = naT(u*1+1);
	tab.querySelector('.r6').innerHTML = naT(u*1+2);
	tab.querySelector('.r7').innerHTML = naT(u*1+3);
}

naT = function(en) {
	if(en==-3 || en==-2 || en==-1 || en==101 || en==102 || en==103)
	{
		return " ";
	} else {
		return en;
	}
}