const form = document.getElementById('form');
const username = document.getElementById('username');
const name_id = document.getElementById('name_id');
const tel = document.getElementById('tel');
const email = document.getElementById('email');
const password = document.getElementById('password');
const pass_check = document.getElementById('pass_check');

form.addEventListener('submit', e => {
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue = username.value.trim();
    const name_idValue = name_id.value.trim();
    const telValue = tel.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const pass_checkValue = pass_check.value.trim();

    if(usernameValue === ''){
        setError(username, 'Kullanıcı adı boş bırakılamaz.');
    }
    else if(usernameValue.length <= 8){
        setError(username, 'Kullanıcı adı minimum 8 karekter olması lazım.')
    }
    else{
        setSuccess(username);
    }

    if(name_idValue === ''){
        setError(name_id, 'İsim ve Soyisminizi giriniz.');
    }
    else{
        setSuccess(name_id)
    }

    if(telValue === ''){
        setError(tel, 'Telefon numarası girmeniz lazım')
    }
    else if (telValue <= 10){
        setError(tel, 'Telefon numarsını yanlış girdiniz. Min 10 karakter olması lazım.');
    }
    else{
        setSuccess(tel);
    }

    if(emailValue === ''){
        setError(email, 'E-posta boş olamaz.');
    }
    else if(!isEmail(emailValue)){
        setError(email, 'Geçerli bir e-posta değil.');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Şifre boş bırakılamaz.');
    }
    else if(passwordValue <= 8){
        setError(password, 'Şifre 8 karakterden az olamaz.')
    }
    else{
        setSuccess(password);
    }

    if(pass_checkValue === ''){
        setError(pass_check, 'Şifre boş bırakılamaz.');
    }
    else if(pass_checkValue <= 8){
        setError(pass_check, 'Şifre 8 karakterden az olamaz.')
    }
    else if(passwordValue !== pass_checkValue){
        setError(pass_check, 'Şifre eşleşmiyor');
    }
    else{
        setSuccess(pass_check);
    }
}

function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function isEmail(email){
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}