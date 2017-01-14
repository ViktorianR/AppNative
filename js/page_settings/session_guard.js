window.onload = function()
{
	if(!localStorage.login_user || !localStorage.session )
		{
			location.replace('login.html');
		}
	else
		{
			userInfo();
		}	
}

function userInfo()
{
	var stor = document.querySelector('#store_name'),
		inner = JSON.parse(localStorage.login_user);
	stor.innerHTML = inner.name + " " + inner.secondName;
	console.log(stor);
}