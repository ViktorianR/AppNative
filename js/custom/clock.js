
    var Digital_time = function()
            {
                var clock = document.getElementById('clock'),
                    time = new Date(),
                    second = time.getSeconds(),
					anim_second = 0,
					anim_minutes = 0,
					anim_hours = 0,
                    minutes = time.getMinutes(),
                    hours = time.getHours();
				
				//-----------------------------------------------------------------------------------------Обработка секунд
				if(String(second).length < 2)
					{
						anim_second = "<img src='img/numbers_of_clock/0.png'>" + "<img src='img/numbers_of_clock/" + second + ".png'>";
					}
				else
					{
						anim_second = "<img src='img/numbers_of_clock/" + String(second)[0] + ".png'>" + "<img src='img/numbers_of_clock/" + String(second)[1] + ".png'>";
					}
				
				
				
				//-----------------------------------------------------------------------------------------Обработка минут
				if(String(minutes).length < 2)
					{
						anim_minutes = "<img src='img/numbers_of_clock/0.png'>" + "<img src='img/numbers_of_clock/" + minutes + ".png'>";
					}
				else
					{
						anim_minutes = "<img src='img/numbers_of_clock/" + String(minutes)[0] + ".png'>" + "<img src='img/numbers_of_clock/" + String(minutes)[1] + ".png'>";
					}
				
				
				//-----------------------------------------------------------------------------------------Обработка часов
				if(String(hours).length < 2)
					{
						anim_hours = "<img src='img/numbers_of_clock/0.png'>" + "<img src='img/numbers_of_clock/" + hours + ".png'>";
					}
				else
					{
						anim_hours = "<img src='img/numbers_of_clock/" + String(hours)[0] + ".png'>" + "<img src='img/numbers_of_clock/" + String(hours)[1] + ".png'>";
					}
				
				if(clock)
					{
						clock.innerHTML = anim_hours + "<img src='img/numbers_of_clock/pointes.png'>" + anim_minutes + "<img src='img/numbers_of_clock/pointes.png'>" + anim_second;
					}
            }
 	setInterval(Digital_time, 1000);
	warn();

	//-----------------------------------------------------------------------------------------Обработка часов
 	
	//-----------------------------------------------------------------------------------------Обработка часов
	 function warn()
	 	{
	 		var links = document.querySelectorAll('.menu a');
			
			for(var i = 0; i < links.length; i++)
				{
					links[i].addEventListener('mouseover', label, false);
					links[i].addEventListener('mouseout', fadeLabel, false);
				}
			
	 	}
	
	//-----------------------------------------------------------------------------------------Обработка часов
	function label()
		{
			var elem = this.id,
				wrn = document.querySelector("#warn"),
				logWrn = document.querySelector("#log-out-warn");
			
			switch(elem)
				{
					case "seconder-link":
						wrn.innerHTML = "Секундомер";
						wrn.style.display = "inline";
					break;
						
					case "timer-link":
						wrn.innerHTML = "Таймер";
						wrn.style.display = "inline";
					break;
						
					case "slider-link":
						wrn.innerHTML = "Слайдер";
						wrn.style.display = "inline";
					break;
						
					case "calc-link":
						wrn.innerHTML = "Калькулятор";
						wrn.style.display = "inline";
					break;
						
					case "dev-link":
						wrn.innerHTML = "Все о разработчике";
						wrn.style.display = "inline";
					break;
						
					case "less-link":
						wrn.innerHTML = "Уроки";
						wrn.style.display = "inline";
					break;
						
					case "log-link":
						wrn.innerHTML = "Последние вычисления";
						wrn.style.display = "inline";
					break;
						
					case "log-out":
						logWrn.innerHTML = "Выход";
						logWrn.style.display = "inline";
					break;
						
					case "info-link":
						logWrn.innerHTML = "Информация";
						logWrn.style.display = "inline";
					break;
					
				}
		}
	
	//-----------------------------------------------------------------------------------------Обработка часов
	function fadeLabel()
		{
			var elem = this,
				wrn = document.querySelector("#warn"),
				logWrn = document.querySelector("#log-out-warn");
			
				if(!elem.event)
					{
						wrn.style.display = "none";
						logWrn.style.display = "none";
					}
		}	


