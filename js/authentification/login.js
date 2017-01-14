var sub = document.querySelector('#login_but'),
	err_log = 0,
	reg = document.querySelector('#registration');

function login()
	{
		var login = document.querySelector('#login').value,
			pass = document.querySelector('#pass').value,
			store = localStorage.length,
			sessionStart = false;

		if(login != "" && pass != "")
			{
				var user = "user_",
					warn = document.querySelector('#login-warn');
						
				for(var i = 0; i < store; i++)
					{
						var vrf = localStorage.user + i,
							ret = JSON.parse(localStorage.getItem(user + i));
						
						if(ret.login == login && ret.pass == pass)
							{
								sessionStart = true;
								var log_user = JSON.parse(localStorage.getItem(user + i)),
									userSess = JSON.stringify(log_user);
							}						
					}
				
				if(sessionStart == false)
					{	
						warn.style.color = "red";
						warn.innerHTML = `<i class="fa fa-times fa-2x" aria-hidden="true"></i><br /> Неверный логин или пароль`;
						err_log++;
					}
				else
					{	
						warn.style.color = "green";
						warn.innerHTML = `<i class="fa fa-check fa-2x" aria-hidden="true"></i><br /> Успех`;
						localStorage.setItem('session', sessionStart);
						localStorage.setItem('login_user', userSess);
						setInterval(open, 1000);					
					}
			}
	}

function Checker()
	{
		if(err_log == 3)
			{
				toRegist();
			}
	}

function toRegist()
	{
		location.assign('registration.html');
	}

function open()
	{
		location.replace('welcome.html');
	}

setInterval(Checker, 100);

sub.addEventListener('click', login, false);
reg.addEventListener('click', toRegist, false);




