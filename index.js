var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#admin')
var btnColor = document.querySelector('.btnColor')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnAdmin')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})

document.addEventListener('DOMContentLoaded', function() {
    const btnLogin = document.getElementById('btnLogin');

    if (btnLogin) {
      btnLogin.addEventListener('click', function() {
        window.location.href = 'index.html'; // Redireciona para index.html
      });
    }
  });
  
  document.querySelectorAll("#btnLogin").forEach(button => {
    button.addEventListener("click", function(event) {
      event.preventDefault(); // Previne o envio do formulário
      window.location.href = 'index.html';
    });
  });
  