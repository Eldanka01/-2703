let form = document.forms.form;
let rem = document.querySelector('.rem')
// let name = localStorage.getItem('current-user')
// console.log(localStorage.getItem('current-user'))
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = form.name.value;
    let password = form.password.value;
    if(localStorage.getItem(name) == password){
      localStorage.setItem('current-user', name);
      setTimeout(e=>location.href = 'index.html', 1500)
    }else{
        alert('Неверный логин или пароль')
    }
  });

rem.addEventListener('click', e=>{
    e.preventDefault();
    let x = prompt('Введите ваш логин для сброса пароля')
    localStorage.setItem('current-password', localStorage.getItem(name))
    console.log(localStorage.getItem('current-password'))
    if(localStorage.getItem(x)){
        alert('Вы сбросили пароль, пожалуйста, введите новый пароль, иначе старый пароль вернется после перезагрузки страницы!')
        localStorage.setItem(name, '')
        localStorage.setItem('current-user', x)
        localStorage.setItem('forget-password', true)
        window.location.href = 'profile.html'
    }

})

