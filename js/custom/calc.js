//-------------------------------------------------------------------------	
var summ = document.querySelector('input[name="summ"]'),
	saver = document.querySelector('input[name="saver"]'),
//==========================================================================
	
//-------------------------------------------------------------------------
	numbers	 = document.querySelector('#numbers_calc'),
	operators	 = document.querySelector('#operators'),
//==========================================================================
	
//-------------------------------------------------------------------------Цифры
	one = document.querySelector('#one'),
	two = document.querySelector('#two'),
	three = document.querySelector('#three'),
	four = document.querySelector('#four'),
	five = document.querySelector('#five'),
	six = document.querySelector('#six'),
	seven = document.querySelector('#seven'),
	euth = document.querySelector('#euth'),
	nine = document.querySelector('#nine'),
	zero = document.querySelector('#zero'),	
//==================================================================================
	
//-------------------------------------------------------------------------Операторы		
	plus = document.querySelector('#plus'),
	sub = document.querySelector('#minus'),
	multiply = document.querySelector('#mult'),
	divided = document.querySelector('#divis'),
	equal = document.querySelector('#equal'),
	sign = document.querySelector('#sign'),
	square_root = document.querySelector('#sq'),
	clear = document.querySelector('#c'),
//================================================================================================

//-------------------------------------------------------------------------
	left_opnD = [],
	operator  = 0,
	right_opnD = [],
	
	elemes		= JSON.parse(localStorage.getItem("login_user")).calc_log;
	
//================================================================================================

//-------------------------------------------------------------------------Клики по кнопкам (цифры)
equal.addEventListener('click', difference, false);
numbers.addEventListener('click', InNumb, false);
operators.addEventListener('click', InOper, false);


function InNumb(e)
{
	var elem = e.target;
	if(elem.value)
		{
			summ.value += elem.value;
		}
}

function InOper(e)
{
	var elem = e.target;
	if(elem.value)
		{
			summ.value += elem.value;
			expression();
		}
}

function difference()
{
	var lastSym = summ.value;
		saver.value += lastSym;
		summ.value = "";
	
	ReadCalcLog(saver.value);

	var opVal = eval(saver.value);
		summ.value = opVal;
		left_opnD = [];
		saver.value = "";
}

function expression()
{
	var calcVal = summ.value;

	for(var i = 0; i < calcVal.length; i++)
		{
			left_opnD.push(calcVal[i]);
			if(calcVal[i] == "+" || calcVal[i] == "-" || calcVal[i] == "*" || calcVal[i] == "/" )
				{
					console.log("Знак!");
					operator = calcVal[i];
					break;
				}
		}

	saver.value = left_opnD.join("");
	summ.value = "";
}

//===================================================================================================

//======================================================================================
//-------------------------------------------------------------------------Очистить поле
clear.addEventListener('click', clearCalc, false);

function clearCalc()
	{
		summ.value = "";
		saver.value = "";
		left_opnD = [];
	}
//====================================================================================

//-------------------------------------------------------------------------Квадратный корень
square_root.addEventListener('click', squareRoot, false);

function squareRoot()
	{
		var eq = eval(summ.value);
		if(eq == "" || eq == undefined || !Number(eq))
			{
				summ.placeholder = "Некорректные данные";
			}
		else
			{
				summ.value = Math.sqrt(eq);
			}
	}
//==========================================================================================
//---------------------------------------------------------------------> ЛОГИ
function ReadCalcLog(s)
{	
	var UseMask = "user_",
		sessUser = JSON.parse(localStorage.getItem('login_user')),
		lenLog = elemes.length,
		calcLog  = s;
	
	if(lenLog < 5)
		{
			elemes.push(s);
		}
	else
		{
			elemes.push(s);
			elemes.shift();
		}
	

	for(var i = 0; i < localStorage.length; i++)
		{
			var elem = JSON.parse(localStorage.getItem(UseMask + i));

			if(sessUser.login == elem.login)
				{

					if(calcLog != "")
						{
							elem.calc_log = elemes;
						}

					var rem = JSON.stringify(elem),
						S_rem = JSON.stringify('login_user');

					localStorage.removeItem(UseMask + i);
					localStorage.setItem(UseMask + i, rem);

					localStorage.removeItem('login_user');
					localStorage.setItem('login_user', rem);
					
					break;

				}	
		}
}