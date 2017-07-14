(function(){

	var $cajaRoja = $(".cajaRoja");

	$("#botTamano").on("click",function(){

		$cajaRoja.animate({
			width: "+=100px",
			height: "+=100px"
		}, function(){
			console.log("Termino la animacion del tamaño");

			// $(this).animate({
			// 	top: "-=100px"             //Se puede hacer de esta manera o de la de abajo
			// });
		})
			.animate({
				width: "-=100px",
				height: "-=100px"
			})
				.animate({
					opacity: 0.1
				},1500, function(){
					$(this).remove();
				} );
	});


})();