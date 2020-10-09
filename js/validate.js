const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const toggle = document.getElementById('toggle');
const toggle2 = document.getElementById('toggle2');
const email = document.getElementById('email');
const username = document.getElementById('username');
const secure = document.getElementById('security');
const text_s = document.getElementById('text');
const text = document.getElementById('requestText');
const btn = document.getElementById('button');
		function showHide()
		{
			if(password.type === 'password')
			{
				password.setAttribute('type', 'text');
				toggle.classList.add('fa-eye-slash');
				toggle.classList.remove('fa-eye');
			}else
			{
				password.setAttribute('type', 'password');
				toggle.classList.add('fa-eye');
				toggle.classList.remove('fa-eye-slash');
			}
		}
		function showHide2()
		{
			if(password2.type === 'password')
			{
				password2.setAttribute('type', 'text');
				toggle2.classList.add('fa-eye-slash');
				toggle2.classList.remove('fa-eye');
			}else
			{
				password2.setAttribute('type', 'password');
				toggle2.classList.add('fa-eye');
				toggle2.classList.remove('fa-eye-slash');
			}
		}
		
		if(password.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(password2.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(email.value.length < 1)
		{
			btn. disabled = true;
		}
		if(username.value.length < 1)
		{
			btn. disabled = true;
		}
		
		
password.addEventListener('input', ()=>{
	var text = $("#password").parent().parent().parent().parent().find("#requestText");
	const passPattern =   /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
	password2.classList.remove('invalid');
	password2.classList.remove('valid');
	if(password.value.match(passPattern))
	{
			password.classList.add('valid_low');
			password.classList.remove('invalid');
			password.classList.remove('valid_normal');
			password.classList.remove('valid');
			secure.classList.add('low');
			secure.classList.remove('normal');
			secure.classList.remove('valid');
			text.html("");
			text_s.classList.add('low');
			text_s.classList.remove('good');
			text_s.classList.remove('normal');
			btn. disabled  = false;
		if(password.value.length > 10)
		{
			password.classList.add('valid_normal');
			password.classList.remove('invalid');
			secure.classList.add('normal');
			secure.classList.remove('low');
			text.html("");
			text_s.classList.add('normal');
			text_s.classList.remove('low');
			btn. disabled  = false;
			if(password.value.length > 16)
			{
				password.classList.add('valid');
				password.classList.remove('invalid');
				password.classList.remove('valid_normal');
				password.classList.remove('valid_low');
				secure.classList.add('valid');
				secure.classList.remove('low');
				secure.classList.remove('normal');
				text.html("");
				text_s.classList.add('good');
				text_s.classList.remove('low');
				text_s.classList.remove('normal');
				btn. disabled  = false;
					if(password.value.length > 20)
					{
			
						password.classList.add('invalid');
						password.classList.remove('valid');
						secure.classList.remove('low');
						text.css("color", "red");
						text.html("Пароль должен быть в районе 6-20 символов и <br> содержать 1 букву [a-z] | [A-Z] | цифру");
						password.classList.remove('valid_normal');
						password.classList.remove('valid_low');
						secure.classList.remove('valid');
						secure.classList.remove('low');
						secure.classList.remove('normal');
						text_s.classList.remove('good');
						text_s.classList.remove('low');
						text_s.classList.remove('normal');
						btn. disabled  = true;
			
					}else
					{
						password.classList.add('valid');
						password.classList.remove('invalid');
						password.classList.remove('valid_normal');
						password.classList.remove('valid_low');
						secure.classList.add('valid');
						secure.classList.remove('low');
						secure.classList.remove('normal');
						text.html("");
						text_s.classList.add('good');
						text_s.classList.remove('low');
						text_s.classList.remove('normal');	
						btn. disabled  = false;
					}
			}else
			{
				password.classList.remove('valid');
				password.classList.remove('invalid');
				password.classList.add('valid_normal');
				password.classList.remove('valid_low');
				secure.classList.remove('valid');
				secure.classList.remove('low');
				secure.classList.add('normal');
				text.html("");
				text_s.classList.remove('good');
				text_s.classList.remove('low');
				text_s.classList.add('normal');
				btn. disabled  = false;
			}
		}else
		{
			password.classList.add('valid_low');
			password.classList.remove('valid_normal');
			password.classList.remove('invalid');
			secure.classList.remove('normal');
			secure.classList.add('low');
			secure.classList.remove('valid');
			text.html("");
			text_s.classList.remove('normal');
			text_s.classList.add('low');
			btn. disabled  = false;
		}
	}else
	{
		password.classList.add('invalid');
		password.classList.remove('valid');
		secure.classList.remove('low');
		text.css("color", "red");
		text.html("Пароль должен быть в районе 6-20 символов и <br> содержать 1 букву [a-z] | [A-Z] | цифру");
		password.classList.remove('valid_low');
		password.classList.remove('valid_normal');
		secure.classList.remove('normal');
		secure.classList.remove('valid');
		text_s.classList.remove('low');
		text_s.classList.remove('normal');
		text_s.classList.remove('good');
		btn. disabled  = true;
	}
	if(password.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(password2.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(email.value.length < 1)
		{
			btn. disabled = true;
		}
		if(username.value.length < 1)
		{
			btn. disabled = true;
		}
	
	
});

password2.addEventListener('input', ()=>{
	var text = $("#password").parent().parent().parent().parent().find("#requestText");
			secure.classList.remove('low');
			secure.classList.remove('normal');
			secure.classList.remove('valid');
			text_s.classList.remove('low');
			text_s.classList.remove('good');
			text_s.classList.remove('normal');
	if(password.value === password2.value)
		{
			password2.classList.add('valid');
			password2.classList.remove('invalid');
			text.html("");
			btn. disabled  = false;
		}else
		{
			password2.classList.add('invalid');
			password2.classList.remove('valid');
			text.html("Пароли не совпадают");
			text.css("color","red");
			btn. disabled  = true;
		}
		if(password.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(password2.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(email.value.length < 1)
		{
			btn. disabled = true;
		}
		if(username.value.length < 1)
		{
			btn. disabled = true;
		}
});

email.addEventListener('input', ()=>{
	const text = $("#email").parent().parent().find("#requestText");
	const emailPattern =  /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
			secure.classList.remove('low');
			secure.classList.remove('normal');
			secure.classList.remove('valid');
			text_s.classList.remove('low');
			text_s.classList.remove('good');
			text_s.classList.remove('normal');
	
	if(email.value.match(emailPattern))
	{
		email.classList.add('valid');
		email.classList.remove('invalid');
		text.html("");
		btn. disabled  = false;
		
	}else
	{
		email.classList.add('invalid');
		email.classList.remove('valid');
		text.html("Введите правильный Email")
		text.css("color","red");
		btn. disabled  = true;
	}
	if(password.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(password2.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(email.value.length < 1)
		{
			btn. disabled = true;
		}
		if(username.value.length < 1)
		{
			btn. disabled = true;
		}
});

username.addEventListener('input', ()=>{
	const text = $("#username").parent().parent().find("#requestText");
			secure.classList.remove('low');
			secure.classList.remove('normal');
			secure.classList.remove('valid');
			text_s.classList.remove('low');
			text_s.classList.remove('good');
			text_s.classList.remove('normal');
	
	if(username.value.length > 5)
	{
			username.classList.add('valid');
			username.classList.remove('invalid');
			text.html("");
			btn. disabled  = false;
				
		if(username.value.length > 20)
		{
			username.classList.add('invalid');
			username.classList.remove('valid');
			text.html("Логин не должен быть больше 20 символов");
			text.css("color", "red");
			btn. disabled  = true;
		}else
		{
			username.classList.add('valid');
			username.classList.remove('invalid');
			text.html("");
			btn. disabled  = false;
		}
	}else
	{
		username.classList.add('invalid');
		username.classList.remove('valid');
		text.html("Логин не должен быть менее 5 символов");
		text.css("color" ,"red");
		btn. disabled  = true;
	}
	if(password.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(password2.value.length < 1)
		{
			btn. disabled = true;
		}
		
		if(email.value.length < 1)
		{
			btn. disabled = true;
		}
		if(username.value.length < 1)
		{
			btn. disabled = true;
		}
});

	function checkForm()
	{


	setTimeout('document.form.submit()',3000); //задерка

	}