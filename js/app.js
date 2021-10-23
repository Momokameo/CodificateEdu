const usuario = document.getElementById("usuarioIN");
const contra = document.getElementById("contraIN");
const nombre = document.getElementById("nombreIN");
const correo = document.getElementById("correoIN");
const pin = document.getElementById("pinIN");
const formLogin = document.getElementById("formularioLogin");
const formSignup = document.getElementById("formularioSignup");
const parrafo = document.getElementById("warnings");

if (typeof(formLogin) === 'undefined') {
    formSignup.addEventListener("submit", e=>{
        e.preventDefault()
        let warnings = ""
        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        parrafo.innerHTML = ""
        if(nombre.value.length <6){
            alert("error")
        }

    })
}else {
    formLogin.addEventListener("submit", e=>{
        e.preventDefault()
        let warnings = ""
        let entrar = false
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        parrafo.innerHTML = ""
        if(usuario.value.length <6){
            warnings += `El nombre no es valido <br>`
            entrar = true
        }
        if(contra.value.length < 8){
            warnings += `La contraseña no es valida`
            entrar = true
        }
        if(entrar){
            parrafo.innerHTML = warnings
        }else{
            parrafo.innerHTML = "Enviado"
        }
    })
}



