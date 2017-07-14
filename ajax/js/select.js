(function(){


	$(document).ready(function(){


		$.ajax({
			type: 'POST',
			url : 'php/servicios/get.alumnos.php',
			dataType: 'json',
		})
		.done(function( data ){
			
			console.log("Correcto!");

			console.log( data ); // Se imprime en consola la api

			if (data.error) {
				alert("Algo raro paso");
				return;
			}

			data.alumnos.forEach( function(alumno, index){
				var content = "";
					content +='<tr id="fila' + alumno.id + '">';
					content +='<td>' + alumno.id + '</td>';
					content +='<td>' + alumno.nombre + '</td>';
					content +='<td class="text-center">';
					content +='<a href="actualizar.html?id=' + alumno.id + '" class="btn btn-primary"><i class="fa fa-edit"></i></a>';
					content +='</td>';
					content +='<td class="text-center">';
					content +='<a href="" data-nombre="' + alumno.nombre + '" data-id="' + alumno.id + '" class="btn btn-danger botEliminar"><i class="fa fa-trash-o"></i></a>';
					content +='</td>';
					content +='</tr>';

				$("#tblRegistros").append( content );
			});


		})
		.fail(function(){
			console.log("Fallo!");
		});


	});



$("body").on("click",".botEliminar",function( e ){



	e.preventDefault();
	var nombre = $(this).data("nombre");
	var id = $(this).data('id');

	swal({
	  title: "Estas seguro",
	  text: "De querer borrar a: " + nombre,
	  type: "warning",
	  showCancelButton: true,
	  confirmButtonColor: "#DD6B55",
	  confirmButtonText: "Si, Borralo!",
	  cancelButtonText: "Cancelar!",
	  closeOnConfirm: false,
	  closeOnCancel: true
	},
	function(isConfirm){
	  if (isConfirm) {

	  		borrarRegistro(id)
	    // swal("Deleted!", "Your imaginary file has been deleted.", "success");
	  } 
	});


});

function borrarRegistro(id){
		//cuando estamos seguros que deseamos eliminar el archivo

	
	// console.log(id);

	$.ajax({
			type: 'POST',
			url : 'php/servicios/post.eliminaalumno.php?id=' + id,
			dataType: 'json',
		})
		.done(function( data ){
			
			console.log("Correcto!");
			console.log( data ); // Se imprime en consola la api

			$("#fila"+ id).remove();

			swal("Deleted!", "Your imaginary file has been deleted.", "success");


	
		});

}




})();