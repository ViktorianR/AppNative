var clear_but 		= document.querySelector('#clear'),
	user 	  		= document.querySelector('#login'),
	userPass 		= document.querySelector('#pass'),
	reg_log   		= document.querySelector('#register-login'),
	reg_pass  		= document.querySelector('#register-pass'),
	reg_pass_coin 	= document.querySelector('#pass-verific');

clear_but.addEventListener('click', clearForm, false);

//------------------------------------------------> Функция очистки полей ввода в формах регистрации и авторизации
function clearForm()
	{
		if(reg_log, reg_pass, reg_pass_coin)
			{
				var checkLogin = document.querySelector('#check-login'),
					checkPass = document.querySelector('#check-pass'),
					checkVerifPass = document.querySelector('#check-pass-coin');
				
				reg_log.value = "";
				reg_pass.value = "";
				reg_pass_coin.value = "";
				
				checkLogin.style.display = "none";
				checkPass.style.display = "none";
				checkVerifPass.style.display = "none";
				
			}
		else
			{
				user.value = "";
				userPass.value = "";	
			}
	}