(function(){

	var Latitude = 25.754883;
	var Longitude = -100.195467;


	$.ajax({
		type: 'GET',
		url : 'http://api.openweathermap.org/data/2.5/weather?lat='+ Latitude +'&lon=' + Longitude + "&units=metric&appid=9f50a805aa0089a1edd1829a5db029f0",
		dataType: 'jsonp'
	})
	.done(function( data ){
		
		console.log("Correcto!");

		console.log( data ); // Se imprime en consola la api

		var clima = data;
		var temp = data.main;
		var ico = data.weather
		var html = "";

		html += '<tr>';
		html += '<td>'+clima.name+'</td>';
		html += '<td>'+temp.temp+'</td>';
		html += '<td>'+temp.temp_max+'/'+temp.temp_min+'</td>';
		html += '<td>'+temp.humidity+'</td>';
		html += '<td>'+temp.pressure+'</td>';

		for (var i = 0; i < ico.length; i++) {
			html += '<td><img src="http://openweathermap.org/img/w/'+ico[i].icon+'.png"></td>';
		}
		
		html += '</tr>';

		$(".table").append(html);


	})
	.fail(function(){
		console.log("Fallo!");
	})
	.always(function(){
		console.log("Completo!");
	});








})();