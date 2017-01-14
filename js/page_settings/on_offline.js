var offline_menu = document.querySelector('#menu'),
	offline_body = document.querySelector('body'),
	offline_planet = document.querySelector('#column'),
	offline_anim_moon = document.querySelector('#moon_orbit'),
	offline_clock = document.querySelector('#clock'),
	offline_button_num = document.querySelectorAll('button[type="button"]'),
	offline_button_oper = document.querySelectorAll('.operation-box button'),
	offline_input = document.querySelectorAll('input[type="text"]'),
	
	offline_info  = document.querySelectorAll('.btn-info'),
	
	offline_well = document.querySelector('.well'),
	offline_info_form = document.querySelectorAll('.info_form table td'),
	
	offline_fullname = document.querySelector('#fullname'),
	offline_secName = document.querySelector('#second_name'),
	offline_age = document.querySelector('#age'),
	offline_dateLast = document.querySelector('#date_last'),
	offline_now = document.querySelector('#now'),
	
	
	offline_SInfo = document.querySelector('#save-info');
	
setInterval(checkConnect, 10);

function checkBrowser()
{
	var ua = navigator.userAgent;

	if(ua.search(/Chrome/) != -1) return "Google Chrome";
	if(ua.search(/Firefox/) != -1) return "Firefox";
	if(ua.search(/Opera/) != -1) return "Opera";
	if(ua.search(/Safari/) != -1) return "Safari";
	if(ua.search(/MSIE/) != -1) return "MSIE";

	return 'Не определен!';

}

function checkConnect()
{
	var brows = checkBrowser(),
		lan = navigator.onLine,
		connect = document.querySelector('#connect');
		

	if(brows == "Firefox" || brows == "Opera")
		{
			if(lan == false)
				{
					if(connect)
						{
							connect.style.color = "#01a305";
						}
					DefCheme();
					
				}
			else
				{
					if(connect)
						{
							connect.style.color = "red";
							connect.style.textShadow = "1px 1px 2px #000";
						}
					offlineSettColor();
				}
		}
	else
		{
			if(lan == false)
				{
					if(connect)
						{
							connect.style.color = "red";
							connect.style.textShadow = "1px 1px 2px #000";
						}
					offlineSettColor();
				}
			else
				{
					if(connect)
						{
							connect.style.color = "#01a305";
						}
					DefCheme();
				}
		}
}

function offlineSettColor()
{
	offline_menu.style.background = "#868686";
	offline_body.style.background = "#868686";
	
	if(offline_info_form)
		{
			for(var i = 0; i < offline_info_form.length; i++)
				{
					offline_info_form[i].style.background = "#2b2b2b";
				}
		}
	
	if(offline_well && offline_fullname && offline_secName && offline_age)
		{
			offline_well.style.background = "#444444";
			offline_well.style.textShadow = "2px 2px 3px black";
			
			offline_fullname.style.background = "#444444";
			offline_fullname.style.textShadow = "2px 2px 3px black";
			
			offline_secName.style.background = "#444444";
			offline_secName.style.textShadow = "2px 2px 3px black";
			
			offline_age.style.background = "#444444";
			offline_age.style.textShadow = "2px 2px 3px black";
		}
	
	if(offline_dateLast && offline_now)
		{
			offline_dateLast.style.background = "#444444";
			offline_dateLast.style.textShadow = "2px 2px 3px black";
			
			offline_now.style.background = "#444444";
			offline_now.style.textShadow = "2px 2px 3px black";
		}
	
	if(offline_SInfo)
		{
			offline_SInfo.style.background = "#5b5b5b";
			offline_SInfo.style.borderColor = "#5b5b5b";
		}
	
	if(offline_planet && offline_anim_moon)
		{
			offline_planet.style.backgroundImage = "url(../img/planeta-zemlya_offline.jpg)";
			offline_anim_moon.innerHTML = '<img src="img/moon_offline.png" alt="" />';
		}
	
	
	if(offline_clock && offline_button_num && offline_button_oper && offline_info)
		{
			offline_clock.style.background = "#3e3e3e";

			for(var i = 0; i < offline_button_num.length; i++)
				{
					offline_button_num[i].style.boxShadow = "5px 5px 5px #3e3e3e";
					offline_button_num[i].style.background = "#3e3e3e";
				}

			for(var j = 0; j < offline_button_oper.length; j++)
				{
					offline_button_oper[j].style.boxShadow = "5px 5px 5px #3e3e3e";
					offline_button_oper[j].style.background = "#3e3e3e";
				}
			
			for(var d = 0; d < offline_info.length; d++)
				{
					offline_info[d].style.boxShadow = "5px 5px 5px #3e3e3e";
					offline_info[d].style.background = "#3e3e3e";
				}

		}
	
	if(offline_input)
		{
			for(var k = 0; k < offline_input.length; k++)
				{
					offline_input[k].style.background = "#3e3e3e";
				}
		}

}

function DefCheme()
{
	offline_menu.style.background = "#3aa3e5";
	offline_body.style.background = "#3aa3e5";

	if(offline_input && offline_planet && offline_anim_moon)
		{
			for(var k = 0; k < offline_input.length; k++)
				{
					offline_input[k].style.background = "#2c65b7";
				}
			
			offline_planet.style.background = "url(../img/planeta-zemlya.jpg)";
			offline_anim_moon.innerHTML = '<img src="img/moon.png" alt="" />';
		}

	if(offline_clock && offline_button_num && offline_button_oper)
		{
			offline_clock.style.background = "#2c65b7";

			for(var i = 0; i < offline_button_num.length; i++)
				{
					offline_button_num[i].style.boxShadow = "5px 5px 5px #2c65b7";
				}

			for(var j = 0; j < offline_button_oper.length; j++)
				{
					offline_button_oper[j].style.boxShadow = "5px 5px 5px #2c65b7";
				}

		}
}