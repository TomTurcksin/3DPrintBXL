

// General info
//	const mailTT = "tom.turcksin@gmail.com";
//	const pricePerH = 17;
	/*
// Print time Price 
	const priceCteA =0.5;
	$priceCteB =0.5;
	$priceCteTau =24; 
// Print material prices
	$clientMaterialSwitch =10 ;// client material is free but an additional fixed cost should be added to the bill 
	$materialPrices = array ("natPLA"=>"0.05", "whitePLA"=>"0.05" ,"blackPLA"=>"0.05" ,"flexPLA"=>"0.10", "fluoGreenPLA"=>"0.05" , "whiteABS"=>"0.05", "clientMaterial"=>"0.00" ); //[euro/gr]
	$materialDescriptions = array ("natPLA"=>"Natural PLA: collor is white and a little bit opaque", 
	"whitePLA"=>"Collored PLA: White collor ", "blackPLA"=>"Collored PLA: Black Satin (glassy straines give it a shiny look) ",
	"flexPLA"=>"Flexible PLA: This natural collerd PLA is mixed with elastomeres giving it a rubber like feeling", 
	"fluoGreenPLA"=>"Fluorecent PLA: This natural collerd PLA is mixed with fluorecent pigments that produces a green afterglow for about a minute",
	"whiteABS"=>"Collored ABS: White collor", "clientMaterial"=>"Client material: a $clientMaterialSwitch [€] fixed cost is added for using the client material spool" );
	*/
	
function priceMaterial($material, $mass , $materialPrices, $clientMaterialSwitch){ 	/* $material("string"),  $mass(gr) */	
	if ($material == "clientMaterial"){
		return $clientMaterialSwitch;
	}else{
		return $mass*$materialPrices[$material];
	}
}

function test(){
	console.log(pricePerH*2)	
}

//test()

//window.document