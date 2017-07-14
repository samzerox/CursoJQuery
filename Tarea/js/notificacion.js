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

		console.log( $(".sb-topright").length );

		if( $(".sb-topright").length === 0){
			html += '<div class="sb-topright"</div>';
			$("body").append(html);
		}

		html = '';
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



		animar_entrada( sbID );

		setInterval(function(){
			animar_salida( sbID);
		}, 3000);



	};


	function animar_salida( sbID){

		var $notificacion = $("#" + sbID);

		var tl = new TimelineMax();

			tl.to($notificacion, 1, {x: "+=200px"})
				.to($notificacion, 1, {opacity:0, onComplete: remover_contenido, onCompleteParams:[sbID] }, "-=1")
				.to($notificacion, 0.8, { height: "0px", marginTop: "0px", onComplete: remover_notificacion, onCompleteParams: [sbID]});
	}



	function animar_entrada( sbID){
		var $notificacion = $("#" + sbID);

		var tl = new TimelineMax();

			tl.from($notificacion, 1, {x: "+=100px", ease: Bounce.easeOut})
				.from($notificacion, 1, {opacity:0 }, "-=1");
	}

	function remover_contenido( sbID ){
		$("#"+ sbID).find("div").remove();
	}


	function remover_notificacion( sbID ){
		$("#"+ sbID).remove();
	}





})();