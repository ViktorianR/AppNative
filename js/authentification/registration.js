var sub = document.querySelector('#register-sub'),
	logInLink = document.querySelector('#log-in'),
	UniqId = localStorage.length,
	pattern = /^\d+$/,
	UseMask = "user_";

(function(){

	var pass = document.querySelector('#register-pass'),
		warn = document.querySelector('#login-warn'),
		patern = /^\d+$/;

	pass.addEventListener('keypress', filter, false);


	function filter(event) {
		var target = event.target,
			code;

		code = event.charCode || event.keyCode; //------------------------------->для firefox

		if(code < 32 || event.ctrlKey || event.altKey)
			{
				return;
			}

		var text = target.value + String.fromCharCode(code);

		if(text.search(patern) == -1)
			{
				event.preventDefault();
				pass.style.borderColor = "red";
				warn.innerHTML = "Только цифры";
				event.preventDefault();
			}
		else
			{
				pass.style.borderColor = "green";
				warn.innerHTML = "";
			}
	}
})();

function Reg()
	{
		var login = document.querySelector('#register-login').value,
			pass = document.querySelector('#register-pass'),
			valid_pass = document.querySelector('#pass-verific').value,
			warn = document.querySelector('#login-warn'),
			UniqId = localStorage.length;

			warn.innerHTML = "";
		
		if(login != "" && pass.value != "" && valid_pass == pass.value)
			{
				var user = "user_";

				for(var i = 0; i <= UniqId; i++)
					{
						var vrf = localStorage.user + i,
							ret = JSON.parse(localStorage.getItem(user + i)),
							valid = false;
							
						if(ret == null || ret.login != login)	
							{
								valid = true;
							}
						else
							{
								valid = false;
								warn.style.color = "red";
								warn.innerHTML = "Логин занят!";
								break;
							}
					}
				
			}
		else if(valid_pass != pass.value)
			{
				warn.innerHTML = "Пароли не совпадают!";
			}
		else if(login == "" || pass.value == "")
			{
				warn.innerHTML = "Поля не заполнены";
			}

		if(valid == true)
			{
				var obj = {

					'login': login,
					'pass': pass.value,
					'name': 'user',
					'secondName': 'userS',
					'age': '0',
					'lastDate': '0',
					'calc_log': []

				},

					Sobj = JSON.stringify(obj);

				localStorage.setItem(UseMask + UniqId, Sobj);
				warn.style.color = "green";
				warn.innerHTML = "Успех";

				setInterval(toLogin, 2000);
			}

	}

function toLogin()
{
	location.assign('login.html');
}

sub.addEventListener('click', Reg, false);
logInLink.addEventListener('click', toLogin, false);


