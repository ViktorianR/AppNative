//------------------------------------------------------------------------> Подгрузка темплейтов уроков
	function getLessonTempl(url, callback)
		{
			var c = callback || function(data){},
				xhr = new XMLHttpRequest();
			
			xhr.onreadystatechange = function()
			{
				if(xhr.readyState == 4 && xhr.status == 200)
					{
						c(xhr.responseText);
					}
			}
			
			if(url)
				{
					xhr.open('GET', '../templates/lesson_'+ url +'.html');
					xhr.send();
				}
		}
	//=========================================================================================
	//---------------------------------------------------------------------> Подключили футер
	function getFooter()
		{
			var xhr = new XMLHttpRequest(),
				foot = document.querySelector('#footer');

			xhr.open('GET','../components/footer/footer.html', false);
			xhr.send(null);
			foot.outerHTML = eval(`\`${xhr.responseText}\``);
		}

	getFooter();
	


