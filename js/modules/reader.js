var speed = document.querySelector('#speed_val'),
	start_read = document.querySelector('#read'),
	count_read = 0,
	
	scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	);

function checkUnder()
{	
		scrollHeight = Math.max(
		document.body.scrollHeight, document.documentElement.scrollHeight,
		document.body.offsetHeight, document.documentElement.offsetHeight,
		document.body.clientHeight, document.documentElement.clientHeight
	); 
}

function readerBook()
{
	var scrollCount = 0,
		under		= pageYOffset + innerHeight;

			if( under == scrollHeight)
				{
					clearInterval(count_read);
				}
			else if(pageYOffset >= 0)
				{
					scrollCount = pageYOffset;
					scroll(pageYOffset, scrollCount + Number(speed.value));
				}
}

function starterRead(e)
{
	e.preventDefault();
	clearInterval(count_read);
	count_read = setInterval(readerBook, 90);
}

setInterval(checkUnder, 10);

start_read.addEventListener('click', starterRead, false);