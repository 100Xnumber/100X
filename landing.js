//Online time function
domain = 'http://request.hundredX.online';
//domain = 'request';
login = function(e) {
	username = document.getElementById('login');
	passcode = document.getElementById('password');
	
		location = domain+'/index.php?username='+username.value+'&password='+passcode.value+'&action=login';
	
}

register = function(e) {
	phone = document.getElementById('phone');
	email = document.getElementById('email');
	idnumber = document.getElementById('idnumber');
	fullname = document.getElementById('fullname');
	passcode = document.getElementById('password');
		location = domain +'/index.php?fullname='+fullname.value+'&idnumber='+idnumber.value+'&email='+email.value+'&phone='+phone.value+'&password='+passcode.value+'&action=register';
	
}