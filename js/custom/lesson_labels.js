var lessTitle = document.querySelector('#title_less'),
	lessList   = document.querySelector('#less-list');

lessList.addEventListener('mouseover', lessLabel, false);
lessList.addEventListener('mouseout', lessLabel, false);

function lessLabel(event)
	{
		var elem = event.target.name;
		
		switch(elem)
			{
				case "1": 
					lessTitle.innerHTML = "Введение";
				break;
					
				case "2":
					lessTitle.innerHTML = "Типы данных";
				break;
					
				case "3":
					lessTitle.innerHTML = "Циклы";
				break;
					
				case "4":
					lessTitle.innerHTML = "Массивы";
				break;
					
				case "5":
					lessTitle.innerHTML = "Функции";
				break;
					
				case "6":
					lessTitle.innerHTML = "Клиентский JavaScript";
				break;
					
				case "7":
					lessTitle.innerHTML = "Обработка ошибок";
				break;
					
				case "8":
					lessTitle.innerHTML = "DOM";
				break;
					
				case "9":
					lessTitle.innerHTML = "Геометрия документа";
				break;
					
				case "10":
					lessTitle.innerHTML = "Обработка событий";
				break;
					
				case "11":
					lessTitle.innerHTML = "Работа с протоколом HTTP";
				break;
					
				case "12":
					lessTitle.innerHTML = "Объекты";
				break;
					
				case "13":
					lessTitle.innerHTML = "Регулярные выражения";
				break;
				
				case "14":
					lessTitle.innerHTML = "GIT";
				break;
					
				default:
					lessTitle.innerHTML = "";
			}		
	}

	