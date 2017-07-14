(function(){

	$.bigBox = function( opciones, callback){

		opciones = $.extend({

			fa:"fa-thumbs-o-up",
			titulo: undefined,
			contenido: undefined,
			boton: "Aceptar"



		}, opciones );

		if (opciones.titulo === undefined) {
			alert('El titulo es necesario');
			return;
		}

		if (opciones.contenido === undefined) {
			alert('El Contenido es necesario');
			return;
		}

		var contenido = "";

		contenido = '<div class="bigBox-Fondo"></div>'


		contenido += '<div class="bigBox-contenedor" align="center">';
		contenido += '<div class="bigBox-Cerrar">	<i class="fa fa-times"></i> </div>';
		contenido += '<div class="bigBox-Circulo"> <i class="fa ' + opciones.fa + ' fa-3x"></i></div>';
		contenido += '<div class="bigBox-Contenido">';
		contenido += '<span class="bigBox-Titulo">' + opciones.titulo + '</span>';
		contenido += '<span class="bigBox-Texto">' + opciones.contenido + '</span>';
		contenido += '</div>';
		contenido += '<button class="bigBox-Boton">' + opciones.boton + '</button>';
		contenido += '</div>';

		$("body").append( contenido );



			animar_entrada();




		//Funcion del boton cerrar
		$(".bigBox-Cerrar").on("click", function(){ //Si hace click en el body pero que este la clase bigBox-Cerrar, entonces dispara la funcion

			animar_salida();

			if (typeof callback == 'function') {
				callback('boton-cerrar');
			}

		});


		//Funcion del boton Principal
		$(".bigBox-Boton").on("click", function(){

			animar_salida();

			if (typeof callback == 'function') {
				callback('boton-principal');
			}

		});




		//Animar la entrada
		function animar_entrada(){

			var $fondo = $(".bigBox-Fondo");

			// $fondo.fadeIn(300);

			var $bigBox = $(".bigBox-contenedor");


			var anchoP = $(window).width();
			var altoP = $(window).height();
			
			var anchoB = $bigBox.width();
			var altoB = $bigBox.height();

			$bigBox.css({

				top: (altoP/2) - (altoB/2),
				left: (anchoP/2) - (anchoB/2),
			})







			$fondo.show();
			$bigBox.show();

			var tl = new TimelineMax();
				tl.to($fondo, 0.5, { opacity: 0.3} )
					.to($bigBox, 0.5, { opacity: 1}, "-=0.5" )
					.from($bigBox, 0.6,{y: "-=40", ease: Bounce.easeOut}, "-=0.5"); //Con esto va a epezar con -10px en el y y bajara a su posicion original


		}


		function animar_salida(){
			var $fondo = $(".bigBox-Fondo");


			var $bigBox = $(".bigBox-contenedor");


			var tl = new TimelineMax();
				tl.to($fondo, 0.3, { opacity: 0} )
					.to($bigBox, 0.3, { opacity: 0, onComplete: remover_bigBox}, "-=0.3" ); // onComplete: remover_bigBox esto llama a la funcion remover_bigBox cunado se complete
		}

		function remover_bigBox(){

			var $fondo = $(".bigBox-Fondo");

			var $bigBox = $(".bigBox-contenedor");


			$fondo.remove();
			$bigBox.remove();

		}


	};






})();