/*///////////////////////LOGIN Y REGISTER///////////////////////*/
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

let entrar = false;

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");

  if(entrar){
    parrafo.innerHTML = "";
  }

  nombre.value = "";
  email.value = "";
  pass.value = "";
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");

  if(entrar){
    par.innerHTML = "";
  }

  nombreUs.value = "";
  passw.value = "";
});

/*obtenemos los valores que esten dentro de los campos de formRegister*/
const formRegister = document.getElementById('formRegister');
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const parrafo = document.getElementById('warnings');

const formLogin = document.getElementById('formLogin');
const nombreUs = document.getElementById('username');
const passw = document.getElementById('password');
const par = document.getElementById('warning');

//validacion Form Registrar
formRegister.addEventListener("submit", registerUser => {
  registerUser.preventDefault()
  let warnings = "";
  let regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  parrafo.innerHTML = "";
  //validacion nombre
  if(nombre.value.length <=0){
    warnings += `* Debes asignar un Nombre de usuario. <br>`
    entrar = true;
  }else if(nombre.value.length <=5){
    warnings += `* Nombre de usuario muy corto. <br>`
    entrar = true;
  }
  
  //validacion correo
  console.log(regexEmail.test(email.value))
  if(!regexEmail.test(email.value)){
    warnings += `* Correo elelctronico no valido. <br>`
    entrar = true;
  }

  //validacion contraseña
  if(pass.value.length <=0){
    warnings += `* Debes asignar una contraseña. <br>`
    entrar = true;
  }else if(pass.value.length <=5){
    warnings += `* Contraseña muy corta. <br>`
    entrar = true;
  }

  //parrafo
  if(entrar){
    parrafo.innerHTML = warnings
  }else{
    //alert("Enviado");
  }

});

//validacion Form Login
formLogin.addEventListener("submit", e => {
  e.preventDefault()
  let warnings = "";
  par.innerHTML = "";
  //validacion nombre
  if(nombreUs.value.length <=0){
    warnings += `* Debes colocar tu Nombre de usuario. <br>`
    entrar = true;
  }else if(nombreUs.value.length <=5){
    warnings += `* Nombre de usuario muy corto. <br>`
    entrar = true;
  }

  //validacion contraseña
  if(passw.value.length <=0){
    warnings += `* Colocar tu contraseña ya existente. <br>`
    entrar = true;
  }else if(passw.value.length <=5){
    warnings += `* Contraseña muy corta. <br>`
    entrar = true;
  }

  //parrafo
  if(entrar){
    par.innerHTML = warnings
  }else{
   // alert("Correcto");
  }
});

function consulta() {
  /* Obtiene estado */
  var v_estado = document.getElementById("estadosinput").value;
  console.log ('Estado: '+v_estado);

/* Obtiene habito */
  var v_habito;
  if (document.getElementById('hab1').checked == true){
    var v_habito = 1;
  }
  else if (document.getElementById('hab2').checked == true){
    var v_habito = 2;
  }
  console.log ('Habito: '+v_habito);

  

    /* Obtiene Hojas, Envés (vellos)*/
    var v_hoen;
    if (document.getElementById('hoen1').checked == true){
      var v_hoen = 1;
    }
    else if (document.getElementById('hoen2').checked == true){
      var v_hoen = 2;
    }
    else if(document.getElementById('hoen3').checked == true){
      var v_hoen = 3;
    }
    else if(document.getElementById('hoen4').checked == true){
      var v_hoen = 4;
    }
    console.log ('Hojas, Envés: '+v_hoen); 

  /* Obtiene Flores*/
  var v_flores;
  if (document.getElementById('flor1').checked == true){
    var v_flor = 1;
  }
  else if (document.getElementById('flor2').checked == true){
    var v_flor = 2;
  }
  console.log ('Flores: '+v_flor);

  
//se obtiene la clasificacion
  fetch('http://localhost:3000/clasificacion/')//metodo fetch hace consulta(peticion)
	.then(response => response.json())//promesa, funcion flecha ejecuta una linea de codigo, funcion response
	.then(function contenido(info){//info resive la respuesta de response
    console.log(info);
    //filtro 1 
    var f_habito  = info.clasificacion.filter(function(elemento){
      //elemento se refiere al registro
      return (elemento.habito==v_habito);
    });
    console.log(f_habito);
    //filtro 2
    var f_estado  =f_habito.filter(function(elemento){
      //elemento se refiere al registro
      return (elemento.estados[0]==v_estado ||
        elemento.estados[1]==v_estado ||
        elemento.estados[2]==v_estado ||
        elemento.estados[3]==v_estado ||
        elemento.estados[4]==v_estado ||
        elemento.estados[5]==v_estado ||
        elemento.estados[6]==v_estado ||
        elemento.estados[7]==v_estado ||
        elemento.estados[8]==v_estado ||
        elemento.estados[9]==v_estado ||
        elemento.estados[10]==v_estado ||
        elemento.estados[11]==v_estado ||
        elemento.estados[12]==v_estado ||
        elemento.estados[13]==v_estado ||
        elemento.estados[14]==v_estado ||
        elemento.estados[15]==v_estado ||
        elemento.estados[16]==v_estado ||
        elemento.estados[17]==v_estado ||
        elemento.estados[18]==v_estado ||
        elemento.estados[19]==v_estado ||
        elemento.estados[20]==v_estado ||
        elemento.estados[21]==v_estado ||
        elemento.estados[22]==v_estado ||
        elemento.estados[23]==v_estado ||
        elemento.estados[24]==v_estado ||
        elemento.estados[25]==v_estado ||
        elemento.estados[26]==v_estado ||
        elemento.estados[27]==v_estado ||
        elemento.estados[28]==v_estado );
    });
    console.log(f_estado);

    //filtro 3 
    var f_vello  = f_estado.filter(function(elemento){
      //elemento se refiere al registro
      return (elemento.vello_hojas==v_hoen);
    });
    console.log(f_vello);

    //filtro 4
    var f_flor  = f_vello.filter(function(elemento){
      //elemento se refiere al registro
      return (elemento.color_flor==v_flor);
    });
    console.log(f_flor);


  });
//cierra fetch
}


/*///////////////////////LOGIN Y REGISTER///////////////////////*/
  /*
  detalleC = document.getElementById('Detalles').innerHTML += 

  '<div class="modal-container">'
   +    '<div class="modal modal-close">'
        +    '<div class="ptxt close">X'+'</div>'
         +   '<div class="headerr">'
            +    '<div href="#" class="ats LogoDetalle">'
              +      '<img src="img/LogoMadroñoDetalle.png">'
              +  '</div>'
          +  '</div>'
            
          +  '<div class="scrol">'
              +  '<div class="contentDetalle">'
                  +  '<div class="imgB">'
                      +  '<img src="img/teni.png" height="50%" width="50%" alt="">'
                  +  '</div>'
                  +  '<div class="t">'
                       + '<div class="h2txt">Nombre'+'</div>'
                      +  '<div class="ptxt">' +
                          +  'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                           +  'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                      +  '</div>'
                  +  '</div>'
                  +  '<div class="t">'
                      +  '<div class="h2txt">Nombre'+'</div>'
                      +  '<div class="ptxt">'
                          +  'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                          +  'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                      +  '</div>'
                  +  '</div>'
                  +  '<div class="t">'
                      +  '<div class="h2txt">Nombre'+'</div>'
                      +  '<div class="ptxt">'
                        +    'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                         +   'sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.sdfsdfgfdgsdgs gsdfgsdgsgg sdfgsdfgfdsgfdsg gddgsdfgsdg.'
                      +  '</div>'
                  +  '</div>'
              +  '</div>'
          +  '</div>'

      +  '</div><!---->'
  +  '</div>';*/
/*///////////////////////API PARA CONSULTAR LAS TARJETAS DE MADROÑOS Y DETALLES///////////////////////*/

