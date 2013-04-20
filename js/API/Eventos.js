// JavaScript Document
//Cuando el documento este completamente cargado va hacer algo, capturamos el clic en el boton regEnviar
$(document).ready(function() {
		document.addEventListener("deviceready",function(){
		window.location.href='#login';

		$('#regEnviar').tap(function(){
			var nom = $('#regNom').val();
			var email=$('regEmail').val();
			var tel=$('regTel').val(); // obtiene el valor del registro telefono y lo guarda en tel
			if (nom != '' && email != '' && tel != ''){
				
					//para llamar a la ventana de confirmacióm
				navigator.notification.confirm("Nombre: "+ nom + "\n Email: " + email + " \n Telefono: " + tel,function(botones){
					switch(botones){
						case 1:
						navigator.notification.beep(5);
						break;
						case 2:
						navigator.notification.vibrate(2000);
						break;
					}
				}	,"titulo","Beep, Vibrar, salir");
				
			}
			else{
			navigator.notification.alert('Todos los campos son requeridos', null, 'Error de Registro', 'Aceptar');
			}		
		
	});
	},false);
	}); 
