// SCRIPT CONTROL DE COOKIES 
        
function controlcookies() {
    // si variable no existe se crea (al clicar en Aceptar)
    localStorage.controlcookie = (localStorage.controlcookie || 0);
     
    localStorage.controlcookie++; // incrementamos cuenta de la cookie
    cookie1.style.display='none'; // Esconde la política de cookies
}

// Viene del "onmouseover" del <div> que anuncia la Política de Privacidad
if (localStorage.controlcookie>0){
    document.getElementById('cookie1').style.bottom = '-50px';
}
