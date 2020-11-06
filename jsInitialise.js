
// JS initialise 

// General info
	const mailAdr = "tom.turcksin@gmail.com";
	const pricePerH = 17; // euro/h
	const pricePerHsupport = 15; // euro/h

// Print time Price 
	const priceCteA =0.5;
	const priceCteB =0.5;
	const priceCteTau =24; 
	
// Print material prices
	const clientMaterialSwitch =10 ;// client material is free but an additional fixed cost should be added to the bill 
//		php: materialPrices = array ("natPLA"=>"0.05", "whitePLA"=>"0.05" ,"blackPLA"=>"0.05" ,"flexPLA"=>"0.10", "fluoGreenPLA"=>"0.05" , "whiteABS"=>"0.05", "clientMaterial"=>"0.00" ); //[euro/gr]
	const materialPrices = {"natPLA":0.05, "whitePLA":0.05, "blackPLA":0.05, "flexPLA":0.10, "fluoGreenPLA":0.05, "whiteABS":0.05, "clientMaterial":0.00 };
/*		php materialDescriptions = array ("natPLA"=>"Natural PLA: collor is white and a little bit opaque", 
	"whitePLA"=>"Collored PLA: White collor ", "blackPLA"=>"Collored PLA: Black Satin (glassy straines give it a shiny look) ",
	"flexPLA"=>"Flexible PLA: This natural collerd PLA is mixed with elastomeres giving it a rubber like feeling", 
	"fluoGreenPLA"=>"Fluorecent PLA: This natural collerd PLA is mixed with fluorecent pigments that produces a green afterglow for about a minute",
	"whiteABS"=>"Collored ABS: White collor", "clientMaterial"=>"Client material: a $clientMaterialSwitch [€] fixed cost is added for using the client material spool" );	 */	
	const materialDescriptions  ={"natPLA":"Natural PLA: it is white and a little bit opaque", "whitePLA":"Tinted PLA: White colour", 
	"blackPLA":"Tinted PLA: Black Satin (glassy straines give it a shiny look) ",
	"flexPLA":"Flexible PLA: This natural tinted PLA is mixed with elastomers giving it a rubber-like feeling", 
	"fluoGreenPLA":"Fluorescent PLA: This natural tinted PLA is mixed with fluorescent pigments that produce a green afterglow for about a minute",
	"whiteABS":"Tinted ABS: White", "clientMaterial":"If you provide your own material, there is of course no cost for the material, however a fixed cost is added to use your spool" };
	
	
/*  php	loop
function printOutMaterials(materialPrices, materialDescriptions ){
	if(count(materialDescriptions)==count(materialPrices)){
		echo ("<table>
			<thead>
				<tr>
					<th> Material  </th> 
					<th> Price  [€/gr] </th>
				</tr>	
			</thead>
			<tbody>");
				foreach($materialPrices as $x => $x_value) {	
				  echo ( "<tr> <td>" . $materialDescriptions[$x] . "</td> <td>" . $x_value . "</td> </tr>" );
				}
		echo ("		
			</tbody>
		</table> "); 
	}else {
		echo ("The number of material prices and material descriptions are not the same");
	}
} 	*/
/*//for(i in Object.keys(materialPrices)){console.log("<tr> <td> " + materialPrices[Object.keys(materialPrices)[i]])}
//for(i in Object.keys(materialPrices)){console.log("<tr> <td> " + materialDescriptions[i])}

for (var key in materialPrices) {
    // check if the property/key is defined in the object itself, not in parent
    if (materialPrices.hasOwnProperty(key)) {           
        console.log(key, materialPrices[key]);
    };
}
*/

function printOutMaterials(materialPrices, materialDescriptions ){
	if(Object.keys(materialDescriptions).length==Object.keys(materialPrices).length){
		//for (var key in materialPrices) {
		document.write(" <table>  <thead> <tr> 	<th> Material  </th> <th> Price  [€/gr] </th> </tr>	</thead> <tbody> ");
			for (i in Object.keys(materialPrices)) {	
				//if (materialPrices.hasOwnProperty(i)) { 
				    //document.write("<style type=\"text/css\">  td{paddingRight:20px;} </style> ") // the style tags seemingly do not work 
				    document.write( "<tr>  <td>" + materialDescriptions[Object.keys(materialDescriptions)[i]] + "</td> <td>" + materialPrices[Object.keys(materialDescriptions)[i]]+ "</td> </tr>" );
				//}
			}
		document.write(" </tbody>	</table> "); 
		//}
	}else {
		console.log("The number of material prices and material descriptions are not the same");
	}
}	
