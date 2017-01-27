$(document).ready(function () 
{
	$("#btn-log").click(function() 
	{	
		var name=$("#name").val();
		var pasw=$("#password").val();
		$.ajax(
		{
			'url':'http://services.trainees.baabtra.com/LoginService/login.php',
			'DataType':'jsonp',
			'data':{email:name,password:pasw},
			success:function(data)
			
			{
								var responses=$.parseJSON(data);
								console.log(responses);
								console.log(responses[0].Msg);
								console.log(responses[0].ResponseCode);
								var rescode=responses[0].ResponseCode;
								var msg=responses[0].Msg;
								if(rescode=="200")
									{
										window.location.href='Myhome.html';
									}
								else if(rescode=="500")
								{
									//Password Incorrect!
									$("#name_div").hide();
									window.location.href='Errorpage.html?name='+name+'';
									
								}
								else if(rescode=="404")
								{
								//Email id does not exist
									$("#name_div").hide();
									window.location.href='Errorpage.html';
									
								}
			},
			error:function()
			{
				alert("error");
			}
		}		
		);
	});
	$("#btn-signup").click(function ()  
	{
		$("#this").attr('value', 'red');
		textValidation("fname","fnameVal","Enter the FName...","namediv");
		textValidation("lname","lnameVal","Enter the LName","namediv");
		mobileValidation("mobile","mobileVal","mobilediv");
		emailValidation("email","emailVal","emaildiv");
		passwordValidation("password","passwordVal","passworddiv");
		ageValidation("dob","dobVal","dobdiv");
	});	
});

function textValidation(id,location,msg,divlocation) 
{
	
	var name=$("#"+id).val();
	if(name=="")
		{
		
			display(msg,location,"red",divlocation);
			return false;
		}
	$("#"+location).html("");
	$("#"+divlocation).css('display', 'none');
}

function ageValidation(id,location,divlocation) 
{
	var date=$("#"+id).val();
	var cd=new Date();
	var d=new Date(date);
	var cyear=cd.getFullYear();
	var year=d.getFullYear();
	var age=cyear-year;
	if(age<14)
		{
		
			display("Age must greater than 13",location,"blue",divlocation);
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
	var email=$("#"+id).val();
	if(email=="")
		{
			display("Enter the Email",location,"red",divlocation);
			return false;
		}
}
function mobileValidation(id,location,divlocation) 
{
	var mobile=$("#"+id).val();
	if(mobile=="")
		{
			display("Enter the mobile number",location,"red",divlocation);
			return false;
		}
	else if(mobile.length<10||mobile.length>10||isNaN(mobile))
	{
		display("Please check your the  mobile number",location,"blue",divlocation);
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
		display("Please check your the  password",location,"blue",divlocation);
		return false;
	}
}
function textValidationalert(id) 
{
	
	var name=$("#"+id).val();
	
	if(name=="")
		{
			alert("Enter The Name");
			return false;
		}
}
function passwordValidationalert(id) 
{
	var password=$("#"+id).val();
	if(password=="")
		{
			alert("Enter The Password");
			return false;
		}
}
function display(msg,location,color,divlocation) 
{

	$("#"+location).html(msg);
	$("#"+location).css("color", color);
	$("#"+divlocation).css('display', 'block');
}