var fullname = document.querySelector('#fullname'),
	secName  = document.querySelector('#second_name'),
	age		 = document.querySelector('#age'),
	lastDate = document.querySelector('#date_last'),
	now		 = document.querySelector('#now'),
	
	date	 = new Date(),
	hours	 = date.getHours(),
	minutes	 = date.getMinutes();

function welcome()
{
	var ren = JSON.parse(localStorage.getItem('login_user'));
	fullname.innerHTML = ren.name;
	secName.innerHTML  = ren.secondName;
	age.innerHTML	   = ren.age;
	now.innerHTML = "( " + hours + " : " + minutes + " )";
}

welcome();