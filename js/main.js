function mostrarData(){
	var nombre=document.getElementById("nombre").value;
	var apellido=document.getElementById("apellido").value;
  var email=document.getElementById("email").value;
  var direccion=document.getElementById("direccion").value;
  var telefono=document.getElementById("telefono").value;
  
  if (nombre.length==0 || nombre = "" || nombre = undefined ){
  var errorNombre=document.createElement("p");
  errorNombre.innerHTML= "Campo obligatorio. Escribe un nombre válido";                   
  return false;
  }
  if (apellido.length==0){
  var errorApellido=document.createElement("p");
  errorApellido.innerHTML="Campo obligatorio. Escribe un apellido válido";
  return false;
  }
  if (email.length==0){
  var errorEmail=document.createElement("p");
  errorEmail.innerHTML="Campo obligatorio. Escribe un correo válido";
  return false;
  }
  if (direccion.length==0){
  var errorDireccion=document.createElement("p");
  errorDireccion.innerHTML="Campo obligatorio. Escribe una dirección válid";            
  return false;
  }
  if (telefono.length==0){   
  var errorTelefono=document.createElement("p");
  errorTelefono.innerHTML="Campo obligatorio. Escribe un teléfono válido";   
  }
  document.getElementById("formularious").innerHTML.value;
return true;
}
mostrarData();

	/*
	 var formulario = document.getElementById("formularious"),
    comodin = true;
 
formulario.addEventListener("submit", function(event){
    event.preventDefault();
 
    var elementos = this.elements;
    for (var i in elementos){
        if (!elementos[i].value.length){
            alert("Debe de completar el campo " + elementos[i].name);
            comodin = false;
            break;
        }
    }
 
    if (comodin){
        this.submit();
    }
}, false);*/


