//----------------------------------------------------->Переменные счетчик и стартер
var counter = 0,
	started = 0,
	
	link_calc = document.querySelector('#calc-link'),
	link_timer = document.querySelector('#timer-link'),
	link_seconder = document.querySelector('#seconder-link'),
	link_slider = document.querySelector('#slider-link'),
	link_dev = document.querySelector('#dev-link'),
	
	calc = document.querySelector('.main'),
	timer = document.querySelector('#calc_box'),
	seconder = document.querySelector('#seconder_box'),
	slider = document.querySelector('#slider_box'),
	footer = document.querySelector('#footer'),
	
	calc_h = calc.offsetHeight - 90,
	timer_h = timer.offsetHeight + calc_h,
	seconder_h = seconder.offsetHeight + timer_h,
	slider_h = slider.offsetHeight + seconder_h,
	footer_h = footer.offsetHeight + slider_h,
	
	scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);


function checker()
	{	
		calc_h = calc.offsetHeight - 90;
		timer_h = timer.offsetHeight + calc_h;
		seconder_h = seconder.offsetHeight + timer_h;
		slider_h = seconder.offsetHeight + seconder_h;
		footer_h = footer.offsetHeight + slider_h,
			
		scrollHeight = Math.max(
			document.body.scrollHeight, document.documentElement.scrollHeight,
			document.body.offsetHeight, document.documentElement.offsetHeight,
			document.body.clientHeight, document.documentElement.clientHeight
		); 
	}

setInterval(checker, 10);

//----------------------------------------------------->Функция появления/скрытия кнопки "домой"
function HideUp()
	{
		var up = document.querySelector("#up");

		if(pageYOffset == 0)
			{
				up.style.display = "none";
			}
		else
			{
				up.style.display = "block";
			}
		
	}
setInterval(HideUp, 10);

//----------------------------------------------------->Функция кнопки "домой"
function ScrollUp()
	{
		var up = document.querySelector("#up");

		if(pageYOffset == 0)
			{
				clearInterval(started);
				counter = 0;
			}
		else if(pageYOffset > 0)
			{
				counter = pageYOffset;
				scroll(pageYOffset, counter - 50);
			}
	}

function toElem(x)
{
	
	var scrollCount = 20,
		under		= pageYOffset + innerHeight;
	
	switch(x)
		{
			case "calc-link":
				if( under == scrollHeight)
					{
						clearInterval(started);
					}
				else if(pageYOffset >= 0 && pageYOffset < calc_h)
					{
						scrollCount = pageYOffset;
						scroll(pageYOffset, scrollCount += 20);
					}
				else if(pageYOffset > calc_h + 20)
					{
						scrollCount = pageYOffset;
						scroll(pageYOffset, scrollCount - 20);
					}
				else if(pageYOffset >= calc_h)
					{
						clearInterval(started);
					}
			break;
				
			case "timer-link":
				if( under == scrollHeight)
					{
						clearInterval(started);
					}
				else if(pageYOffset >= 0 && pageYOffset < timer_h)
					{
						scrollCount = pageYOffset;
						scroll(pageYOffset, scrollCount += 20);
					}
				else if(pageYOffset > timer_h + 20)
					{
						scrollCount = pageYOffset;
						scroll(pageYOffset, scrollCount - 20);
					}
				else if(pageYOffset >= timer_h)
					{
						clearInterval(started);
					}
			break;
				
			case "seconder-link":
				if( under == scrollHeight)
					{
						clearInterval(started);
					}
				else if(pageYOffset >= 0 && pageYOffset < seconder_h)
					{
						scrollCount = pageYOffset;
						scroll(pageYOffset, scrollCount += 20);
					}
				else if(pageYOffset > seconder_h + 20)
					{
						scrollCount = pageYOffset;
						scroll(pageYOffset, scrollCount - 20);
					}
				else if(pageYOffset >= seconder_h)
					{
						clearInterval(started);
					}
				
			break;
				
			case "slider-link":

				if( under == scrollHeight)
					{
						clearInterval(started);
					}
				else if(pageYOffset >= 0 && pageYOffset < slider_h)
					{
						scrollCount = pageYOffset;
						scroll(pageYOffset, scrollCount += 20);
					}
				else if(pageYOffset >= slider_h)
					{
						clearInterval(started);
					}

			break;
				
			case "dev-link":
				if( under == scrollHeight)
					{
						clearInterval(started);
					}
				else if(pageYOffset >= 0 && pageYOffset < footer_h)
					{
						scrollCount = pageYOffset;
						scroll(pageYOffset, scrollCount += 20);
					}
				else if(pageYOffset >= footer_h)
					{
						clearInterval(started);
					}

			break;
		}
}

function starter(e)
{
	var elem = this.id;
	e.preventDefault();
	started = setInterval(toElem, 10, elem);
	
	console.log(elem);

}

//----------------------------------------------------->Событие кнопки "домой", запускает функцию
up.onclick = function()
	{
		clearInterval(started);
		started = setInterval(ScrollUp, 10);
	}

link_calc.addEventListener('click', starter, false);
link_timer.addEventListener('click', starter, false);
link_seconder.addEventListener('click', starter, false);
link_slider.addEventListener('click', starter, false);
link_dev.addEventListener('click', starter, false);



