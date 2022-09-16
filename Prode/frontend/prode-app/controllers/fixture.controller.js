window.onload = function(){
    
    var usuario = localStorage.getItem("usuario");
    var rol = localStorage.getItem("rol");
    if(usuario == null || usuario == ""){
        alerta_error1("Debe loguearse!");
    }
}

function alerta_error1(mensaje){
    swal({ 
        title:'Atencion!',
        text:mensaje,
        icon:'error',
        button:'continuar'
     }).then(function(){
        window.location = 'index.html';
     });
    }