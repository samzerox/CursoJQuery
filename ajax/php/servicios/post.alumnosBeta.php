<?php
// Incluir la clase de base de datos
include_once("../classes/class.Database.php");


$nombre = $_POST['txtnombre'];
$estado = $_POST['cmbestado'];

$sql = "INSERT INTO alumnos (nombre) VALUES ('$nombre')";

$hecho = Database::ejecutar_idu( $sql );

if ( $hecho ) {
	
	$respuesta = json_encode( 

				array('err' => false, 
					  'mensaje' => "Creado correctamente"
					  )
			);
}else{
	
	$respuesta = json_encode( 

				array('err' => true, 
					  'mensaje' => $hecho
					  )
			);
}





echo $respuesta;



?>