(function(){

	var sbContador = 0;

	$.notificacion = function(opciones){
		opciones = $.extend({
			color: "red",
			img: undefined,
			titulo:"",
			subtitulo: ""
		}, opciones); 

		sbContador ++;
		var sbID = "sbID-" + sbContador;
	


		var html = "";
		// 

		if( $(".sb-topright").length === 0){
			html += '<div class="sb-topright"</div>';
			$("body").append(html);
		}

		html = "";
		html += '<div id= "' + sbID + '" class="notificacion-contenedor" style="background-color:'+opciones.color +'">';
		if(opciones.img != undefined){
			html += '<div class="notificacion-foto">';
			html += '<img src="' + opciones.img +'">';
			html += '</div>';
		}
		html += '<div class="notificacion-datos" >';
		html += '<span class="notificacion-titulo">' + opciones.titulo + '</span>';
		html += '<span class="notificacion-subtitulo">' + opciones.subtitulo + '</span>';
		html += '</div>';
		html += '<div class="notificacion-icono">';
		html += '<i class="fa fa-commenting-o fa-2x"></i>';
		html += '</div>';
		html += '</div>';
		
		$(".sb-topright").append( html );



		$("body").append(html);

		animar_entrada( sbID );

		setInterval(function(){
			animar_salida( sbID);
		}, 3000);



	};


	function animar_salida(){
		var $notificacion = $(".notificacion-contenedor");

		var tl = new TimelineMax();

			tl.to($notificacion, 1.6, {x: "+=100px"})
				.to($notificacion, 1, {opacity:0, onComplete: remover_notificacion }, "-=1.6");
	}



	function animar_entrada(){
		var $notificacion = $(".notificacion-contenedor");

		var tl = new TimelineMax();

			tl.from($notificacion, 1.6, {x: "+=100px", ease: Bounce.easeOut})
				.from($notificacion, 1.3, {opacity:0 }, "-=1.6");
	}


	function remover_notificacion(){
		$(".notificacion-contenedor").remove();
	}





})();