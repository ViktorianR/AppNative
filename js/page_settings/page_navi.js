var log_out = document.querySelector('#log-out'),
	home_link = document.querySelector('#home-link'),
	lessons = document.querySelector('#less-link'),
	
	log_box	 = document.querySelector('#log_box'),
	logs	 = document.querySelector('#log-link');
	
log_out.addEventListener('click', logout, false);

if(home_link)
	{
		home_link.addEventListener('click', toHome, false);
	}
logs.addEventListener('click', showLogs, false);

function toHome()
{
	window.location.assign('index.html');
}

function logout()
{
	localStorage.removeItem('session');
	localStorage.removeItem('login_user');
	location.replace('login.html');
}

function showLogs(e)
{
	e.preventDefault();
	var gtlogs = JSON.parse(localStorage.getItem('login_user')).calc_log,
		logPlace = document.querySelector('.log_place');
	
		for(var i = 0; i < gtlogs.length; i++)
			{
				log_box.innerHTML += "<div>" + gtlogs[i] + "</div>";
			}
	
		
	if(logPlace.style.display == "block")
		{
			logPlace.style.display = "none";
			log_box.innerHTML = "";
		}
	else
		{
			logPlace.style.display = "block";
		}
}