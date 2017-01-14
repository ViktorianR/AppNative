lessList.addEventListener('click', chsTempl, false);

function chsTempl(e)
	{
		var myTarget = e.target.name,
			box = document.querySelector('#lesson_container');

		getLessonTempl(myTarget, function(data)
			{
				console.log(data);
			});
		
		getLessonTempl(myTarget, function(data)
			{
				box.innerHTML = data;
			});
	}