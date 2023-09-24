checkThis = function(e,f) {
	if(e.value=="00") {
		e.value = "0";
	}
	switch(f)
	{case "bet":
	if(e.value.length>3)
	{
		e.value = "";
	}
	break;
	case "amount":
	if(e.value.length>5)
	{
		e.value = "";
	}
	if(e.value==1)
	{
		e.value = "";
	}
	break;}
}

function shuffle(array) {
rate = new Date();
ra = rate+"";
ru = ra.split('GMT');
ri = ru[0].split(' ');
ro = ri[4].split(':');
st = ro[2]*1;
mt = ro[1]*1;
if(st<6) { ort =  1; } else if(st<12) { ort = 2; } else if(st<18) { ort = 3; } else if(st<24) { ort =  4; } else if(st<30) { ort =  5; } else if(st<36) { ort = 6; } else if(st<42) { ort = 7; } else if(st<48) { ort = 8; } else if(st<54) { ort = 9; } else if(st<60) { ort =  10; } else if(st<60) { ort =  12; }
	
let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

randomIndex = ort;
window.ort = ort;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}
window.ramt = 1;
ramount = function() {
prex = ort*ramt/5;
prex = prex +"";
yf = prex.split('.');
prex = yf[0]*4;
prex = prex+"";
if(prex.length>3) { prex = prex[1]  + prex[3] + "0"; 
prex1 = prex[1]  + prex[2] + "0";
prex = prex*1+prex1*1;
prex = prex + "";
if(prex[1]=="1" || prex[1]=="4" || prex[1]=="2") {
	prex[1] = "5";
	
} else if(prex[1]=="8" || prex[1]=="6" || prex[1]=="9")
{
	prex[1] = "0";
}
prex = prex[0] + prex[1] + "0";
prex = prex*1;
}
else if(prex.length>2) {
	if(prex[1]=="1" || prex[1]=="4" || prex[1]=="2") {
	prex[1] = "5";
	
} else if(prex[1]=="8" || prex[1]=="6" || prex[1]=="9")
{
	prex[1] = "0";
} 
pans = prex[0]*1 + prex[1]*1;
prex = pans + "00"; 
prex = prex[1] + "00"; }
else if(prex.length>1) { prex = prex[0] + "0"; }
else if(prex.length>0) { prex = "1" + prex[0]; }
prex = prex*1;
if(prex==0) { prex = 10000; }
if(ramt==10) { ramt++; }
ramt++;
		if(!prex)
		{ prex = 5000; }
		return prex;
}

window.ront = 10;
rnumber = function() {
		const ncx = [7,4,9,3,1,5,0,8,6,2];
		icx = shuffle(ncx);
		prex = icx[ront-1];
		prex=prex*ort+ront;
			prex = prex+"";
		if(ront==2 || ront==4 || ront==6 || ront==8 || ront==10) {
			
			prex=prex*1;
			prex=prex+30+ront;
		} else if(prex.length==2){
			prex=  prex[1]+prex[0];
			prex*1;
		}
		if(prex>100) {	prex=60+prex;	}
		if(prex>100) {	prex=100;	}
		
if(ront==1) { ront=11; }
		window.ront--;
		if(!prex)
		{ prex = 88; }
		return prex*1;
}

const user = ['Mandla D.','Victor N.','Sbusiso K.','Cherise B.','David V.','Clive H.','Bonginkosi M.','Bucie M.','Zinhle J.','Jeremiah D.','Nhlanhla S.','Mandisa A.','Neo F.','Lindiwe Z.','Lerato P.','Nhlonipho L.','Zamekile N.','Vuyiswa N.','Abraham M.','Mohammed R.','William R.','Sarah L.','Gareth M.','Lethabo B.','Wally H.','Bandile W.','Matthew R.','Dinesh P.','Joe G.','Johnathan L.','Brenda T.','Brandon H.','Lebo S.','Lebo M.','James P.','Millicent Q.','Linda D.','Precious M.','Bheki M.','Mduduzi N.','Simphiwe D.','Sphiwe K.','Sphiwe N.','Thami N.','Tebogo S.','Rajesh G.','Michael L.','Nicole O.','Shaun U.','Rita N.','Tina L.','Thokozani Z.','Zanele M.','Lindiwe N.','Siphesihle M.','Anthony M.','Malibongwe M.','Nomthandazo P.','Senzo H.','Thabo P.','Kabelo S.','Mapule T.','Godfrey M.','Thandazile L.','Frikki V.','Jacobus B.','Jane H.','Sizakele M.','Nomthandazo M.','Senzo M.','Thabo L.','Kabelo T.','Mapule S.','Godfrey T.','Thandazile H.','Jacobus V.','Jane E.','Sizakele U.'];

const user1 = ['Thami N.','Tebogo S.','Rajesh G.','Mandla D.','Victor N.','Sbusiso K.','Cherise B.','David V.','Clive H.','Bonginkosi M.','Bucie M.','Zinhle J.','Zanele M.','Lindiwe N.','Siphesihle M.','Anthony M.','Malibongwe M.','Nomthandazo P.','Frikki V.','Jacobus B.','Jane H.','Sizakele M.','Israel J.','Jaco F.','Billy C.','Jess A.','Steven D.','Jaco L.','Jacob M.','Sherry B.','Heather K.','Jennifer A.','Mandy Q.','Mbalenhle N.','Jeremy V.','Kabelo M.','Jessica E.','Ezekiel G.','Julius D.','James E.','Orlando M.','Innocent M.','Agnes N.','April V.','Jafta M.','Snenhlanhla D.','Priscilla J.','Miriam k','Vivian U.','Thoriso S.','Nathan J.','Sthembile M.','Sthembiso B.','Richard M.','Jared N.','Slindile T.','Samson G.','Brad L.','Olwethu K.','Minenhle T.','Wendy C.','Langelihle J.','Lilian k','Vicky B.','Thoriso H.','Nathan L.','Sthembiso M.','Sthembiso B.','Richard M.','Jared N.','Slindile J.','Samson M.','Lilitha I.','Olwethu N.','Minenhle D.','Wendy M.'];
const user2 = ['Jeremiah D.','Nhlanhla S.','Mandisa A.','Neo F.','Lindiwe Z.','Lerato P.','Nhlonipho L.','Zamekile N.','Vuyiswa N.','Abraham M.','Zanele M.','Lindiwe N.','Siphesihle M.','Anthony M.','Malibongwe M.','Nomthandazo P.','Senzo H.','Thabo P.','Kabelo S.','Mapule T.','Godfrey M.','Thandazile L.','Mbalenhle N.','Jeremy V.','Kabelo M.','Jessica E.','Ezekiel G.','Sthembiso B.','Richard M.','Jared N.','Slindile T.','Samson G.','Brad L.','Olwethu K.','Minenhle T.','Princess M.','Tyler A.','Hayley P.','Happiness K.','Lucas J.','Ronnie D.','Nancy Q.'];
const user3 = ['Julius D.','James E.','Orlando M.','Innocent M.','Agnes N.','Mohammed R.','William R.','Sarah L.','Gareth M.','Lethabo B.','Wally H.','Bandile W.','Matthew R.','Dinesh P.','Joe G.','Joel M.','Nicholas M.','Nicole O.','Shaun K.','Shaun U.','Rita N.','Tina L.','Thokozani N.','Zanele D.','Zanele M.','Lindiwe N.','Siphesihle M.','Anthony M.','Malibongwe M.','Nomthandazo P.','Frikki V.','Jacobus B.','Jane H.','Sizakele M.','Senzo H.','Thabo P.','Kabelo S.','Mapule T.','Godfrey M.','Thandazile L.','Sthembiso B.','Richard M.','Jared N.','Slindile T.','Samson G.','Brandon J.','Brad L.','Olwethu E.','Olwethu K.','Minenhle T.','Jackie O.','Christina B.','Allen S.','Charlie V.','Abel M.','Amber M.','Taylor N.','Prince M.','Kate S.','Kate I.','Goodwin T.','Zacharia H.','Tracey W.','Tumelo P.','Noni P.','Sdumo N.','Qondile X.','Noxolo G.','Kenneth L.','Khehla O.','Mapule S.','Thabi D.','Ben W.','Innocentia J.','Given M.','Bontle M.','Nana K.','Naftan M.','Innocentia S.'];
const user4 = ['Johnathan L.','Brenda T.','Brandon H.','Lebo S.','Lebo M.','James P.','Millicent Q.','Linda D.','Precious M.','Bheki M.','Mduduzi N.','Simphiwe D.','Sphiwe K.','Sphiwe N.','Zanele M.','Lindiwe N.','Siphesihle M.','Anthony M.','Malibongwe M.','Nomthandazo P.','Senzo H.','Thabo P.','Kabelo S.','Mapule T.','Godfrey M.','Thandazile L.','April V.','Jafta M.','Snenhlanhla D.','Priscilla J.','Miriam k','Sthembiso B.','Richard M.','Jared N.','Slindile T.','Samson G.','Brad L.','Olwethu K.','Minenhle T.'
];

dole = function() {
	listing = "";
	document.getElementById('userdb').innerHTML = "";
	window.list = document.querySelector('.sidebets .list');
	rate = new Date();
ra = rate+"";
ru = ra.split('GMT');
ri = ru[0].split(' ');
ro = ri[4].split(':');
st = ro[2]*1;
if((st/2)>25) {luser=user1;} 
else if((st/4)>10) {luser=user2;} 
else if((st/3)>10) {luser=user3;} 
else if((st/2)>10) {luser=user4;}
else {luser=user;} 

window.suse = shuffle(luser);
window.ii = 0;
	list.innerHTML = "";
//while(i<user.length) {  }
window.setTimeout(function() {
		window.serve = window.setInterval(function() {
		if(ii<user.length)
		{
			
			b1a = ramount();
	b1n = rnumber();
	b2a = ramount();
	b2n = rnumber();
	an = ii/3;
	an = an + "";
	az = an.split('.');
	bon="";
	anp = az[1]/2;
	anp = anp + "";
	azp = anp.split('.');
	bof="";
	playa = suse[ii];
	if(!playa) {	return;	}
	if(az[1]) 
	{
	b3a = ramount();
	b3n = rnumber();
	bon ='Bet 3: #'+b3n+' - ZAR'+b3a+' <font class="mulu"></font> <br/>';
	}
	if(azp[1]) 
	{
	b4a = ramount();
	b4n = rnumber();
	bof ='Bet 4: #'+b4n+' - ZAR'+b4a+' <font class="mulu"></font> <br/>';
	}
	
	div = document.createElement('div');
	div.style.display = "none";
	div.setAttribute('name',playa);
	div.setAttribute('class','playa');
	div.setAttribute('id','playa'+ii);
	div.innerHTML += '<amount>' +b1a+ '</amount>';
	div.innerHTML += '<amount>' +b2a+ '</amount>';
	div.innerHTML += '<number>' +b1n+ '</number>';
	div.innerHTML += '<number>' +b2n+ '</number>';
	if(az[1])
	{
	div.innerHTML += '<amount>' +b3a+ '</amount>';
	div.innerHTML += '<number>' +b3n+ '</number>';
	}
	if(azp[1])
	{
	div.innerHTML += '<amount>' +b4a+ '</amount>';
	div.innerHTML += '<number>' +b4n+ '</number>';
	}
	document.getElementById('userdb').appendChild(div);
	
	
	
	list.innerHTML = '<div class="listing" id="xod'+ii+'">'+playa+' - <font class="wina"></font><br/>Bet 1: #'+b1n+' - ZAR'+b1a+' <font class="mulu"></font> <br/> Bet 2: #'+b2n+' - ZAR'+b2a+' <font class="mulu"></font> <br/> '+bon+bof+' <b>> ZAR<font class="winz"></font>  </b></div>' + list.innerHTML ;
	
ii++; 	
		} else {
		window.clearInterval(window.serve);
		}
	},rayt);
},	1000);
	
	
}



dola = function(w) {
	dr1a = (w*1)-3;
	dr1b = (w*1)+3;
	dr2a = (w*1)-2;
	dr2b = (w*1)+2;
	dr10a = (w*1)-1;
	dr10b = (w*1)+1;
	dr0 = w*1;
	xtotal = 0;
	py = document.getElementsByClassName('playa');
	x=0;
	
	while(x<py.length) {
		
		sbt = 0;
		sel = py[x].getElementsByTagName('number');
		sul = py[x].getElementsByTagName('amount');
		
		h=0;
		mu = document.getElementById('xod'+x).getElementsByClassName('mulu');
		while(h<sel.length) {
		sx = sel[h].innerHTML*1;
		su = sul[h].innerHTML*1;
		if(sx==dr1a || sx==dr1b) {
		xtotal += su*1;	
		sbt +=  su*1;
		mu[h].innerHTML = ' x 1';
		}
		if(sx==dr2a || sx==dr2b) {
		xtotal += su*2;	
		sbt += su*2;	
		mu[h].innerHTML = ' x 2';
		}
		if(sx==dr10a || sx==dr10b) {
		xtotal += su*10;	
		sbt += su*10;	
		mu[h].innerHTML = ' x 10';
		}
		if(sx==dr0) {
		xtotal += su*100;	
		sbt += su*100;	
		mu[h].innerHTML = ' x 100';
		}
		h++;}
		
		document.getElementById('xod'+x).querySelector('.winz').innerHTML = sbt;
		document.getElementById('xod'+x).querySelector('.wina').innerHTML = w;
		
		
	x++;}
	
}

copyLocked = function() {
	lok = document.getElementsByClassName('locked');
	k=0;
	while(lok.length>k)
	{
	hd = lok[k].querySelector('.heading').innerHTML;
	ahd = lok[k].querySelector('.amountin').value;
	nhd = lok[k].querySelector('.numbin').value;
		hdn = hd[hd.length-1];
		document.querySelector('#bb'+hdn).innerHTML = ahd + '[100x]' + nhd;
	k++; }
}


putLocked = function() {
	if(document.querySelector('#bb1').innerHTML.length>1) {
		va=document.querySelector('#bb1').innerHTML;
		wa=va.split('[100x]');
		am = wa[0];
		nu = wa[1];
		document.getElementsByClassName('bet')[0].querySelector('.amountin').value = am;
		document.getElementsByClassName('bet')[0].querySelector('.numbin').value = nu;
	}
	if(document.querySelector('#bb2').innerHTML.length>1) {
		va=document.querySelector('#bb2').innerHTML;
		wa=va.split('[100x]');
		am = wa[0];
		nu = wa[1];
		document.getElementsByClassName('bet')[1].querySelector('.amountin').value = am;
		document.getElementsByClassName('bet')[1].querySelector('.numbin').value = nu;
	}
	if(document.querySelector('#bb3').innerHTML.length>1) {
		va=document.querySelector('#bb3').innerHTML;
		wa=va.split('[100x]');
		am = wa[0];
		nu = wa[1];
		document.getElementsByClassName('bet')[2].querySelector('.amountin').value = am;
		document.getElementsByClassName('bet')[2].querySelector('.numbin').value = nu;
	}
	if(document.querySelector('#bb4').innerHTML.length>1) {
		va=document.querySelector('#bb4').innerHTML;
		wa=va.split('[100x]');
		am = wa[0];
		nu = wa[1];
		document.getElementsByClassName('bet')[3].querySelector('.amountin').value = am;
		document.getElementsByClassName('bet')[3].querySelector('.numbin').value = nu;
	}
	if(document.querySelector('#bb5').innerHTML.length>1) {
		va=document.querySelector('#bb5').innerHTML;
		wa=va.split('[100x]');
		am = wa[0];
		nu = wa[1];
		document.getElementsByClassName('bet')[4].querySelector('.amountin').value = am;
		document.getElementsByClassName('bet')[4].querySelector('.numbin').value = nu;
	}
	
		va=document.querySelector('#bb1').innerHTML="";
		va=document.querySelector('#bb2').innerHTML="";
		va=document.querySelector('#bb3').innerHTML="";
		va=document.querySelector('#bb4').innerHTML="";
		va=document.querySelector('#bb5').innerHTML="";
}













table = function() {
	tbl=document.getElementById('table');
	if(tbl.style.display=="block")
	{
		tbl.style.display="none";
	} else {
		tbl.style.display="block";
	}
}


