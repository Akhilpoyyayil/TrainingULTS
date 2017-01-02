function valLogin() 
{
	textValidationalert("name","nameVal");
	passwordValidationalert("password");
}

function signVal() 
{
	textValidation("fname","fnameVal","Enter the FName...","namediv");
	textValidation("lname","lnameVal","Enter the LName","namediv");
	mobileValidation("mobile","mobileVal","mobilediv");
	emailValidation("email","emailVal","emaildiv");
	passwordValidation("password","passwordVal","passworddiv");
	ageValidation("dob","dobVal","dobdiv");
}
function textValidation(id,location,msg,divlocation) 
{
	var name=document.getElementById(id).value;
	if(name=="")
		{
			display(msg,location,"red",divlocation);
			return false;
		}
}
function ageValidation(id,location,divlocation) 
{
	var date=document.getElementById(id).value;
	alert(date);
	var cd=new Date();
	var d=new Date(date);
	var cyear=cd.getFullYear();
	var year=d.getFullYear();
	var age=cyear-year;
	if(age<14)
		{
			display("Age must greater than 13",location,"red",divlocation);
			return false;
		}
	else if(date=="")
	{
		display("Select the DOB",location,"red",divlocation);
		return false;
	}
}
function emailValidation(id,location,divlocation) 
{
	var email=document.getElementById(id).value;
	if(email=="")
		{
			display("Enter the Email",location,"red",divlocation);
			return false;
		}
}
function mobileValidation(id,location,divlocation) 
{
	var mobile=document.getElementById(id).value;
	if(mobile=="")
		{
			display("Enter the mobile number",location,"red",divlocation);
			return false;
		}
	else if(mobile.length<10||mobile.length>10||isNaN(mobile))
	{
		display("Please check your the  mobile number",location,"red",divlocation);
		return false;
	}
}
function passwordValidation(id,location,divlocation) 
{
	var password=document.getElementById(id).value;
	
	if(password=="")
		{
		
			display("Enter the password",location,"red",divlocation);
			return false;
		}
	else if(password.length<8||password.length>13)
	{
		display("Please check your the  password",location,"red",divlocation);
		return false;
	}
}
function textValidationalert(id,id1) 
{
	var name=document.getElementById(id).value;
	if(name=="")
		{
			alert("Enter The Name");
			return false;
		}
}
function passwordValidationalert(id) 
{
	var password=document.getElementById(id).value;
	if(password=="")
		{
			alert("Enter The Password");
			return false;
		}
}
function display(msg,location,color,divlocation) 
{
	document.getElementById(location).innerHTML=msg;
	document.getElementById(location).style.color=color;
	document.getElementById(divlocation).style.display='block';
}