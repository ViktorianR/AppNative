var fullname = document.querySelector('#fullname input'),
	secName  = document.querySelector('#second_name input'),
	age		 = document.querySelector('#age input'),
	lastDate = document.querySelector('#date_last'),
	now		 = document.querySelector('#now'),
	
	submit 	 = document.querySelector('#save-info');
	

submit.addEventListener('click', renameUser, false);


function defValues()
{
	var ren = JSON.parse(localStorage.getItem('login_user'));
	
	fullname.value = ren.name;
	secName.value = ren.secondName;
	age.value = ren.age;
}

function renameUser()
{
	var UseMask = "user_",
		sessUser = JSON.parse(localStorage.getItem('login_user')),
		val_name = fullname.value,
		val_age = age.value,
		val_Sname = secName.value;
	
	for(var i = 0; i < localStorage.length - 2; i++)
		{
			var elem = JSON.parse(localStorage.getItem(UseMask + i));
		
				if(sessUser.login == elem.login)
					{
						console.log(UseMask + i);

						if(val_name != "")
							{
								elem.name = val_name;
								sessUser.name = val_name;

							}
						if(val_Sname != "")
							{
								elem.secondName = val_Sname;
								sessUser.secondName = val_Sname;
							}
						if(val_age != "")
							{
								elem.age = val_age;
								sessUser.age = val_age;
							}
						
						var rem = JSON.stringify(elem),
							S_rem = JSON.stringify('login_user');
						
						localStorage.removeItem(UseMask + i);
						localStorage.setItem(UseMask + i, rem);
						
						localStorage.removeItem('login_user');
						localStorage.setItem('login_user', rem);
						
						userInfo();
					}	
		}
}

defValues();


