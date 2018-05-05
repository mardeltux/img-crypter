function insertMessageAction(message) {
  // Acá va el código que toma el mensaje y lo inserta en la imagen
  
  var tamanio = imgCrypter.getDimensions(); //guardo en memoria la dimension de la imagen
  
  var binaryMessage = imgCrypter.stringToBinary(message); //parseo el mensaje en binario

  

  var z = 0;
  
  for(var i = 0; i < tamanio.width; i++) {
    for(var j = 0; j < tamanio.height; j++) {

      //guardo la data, color, de cada pixel en memoria
      var pixelInfo = imgCrypter.getPixel(i,j);
      
      //parseo cada atributo de color a binario
      r = dec2bin(pixelInfo.r);
      g = dec2bin(pixelInfo.g);
      b = dec2bin(pixelInfo.b);
      
      //reemplazo el valor menos significativo de cada componente 
      //del color por cada bit del mensaje incrementando de vez en vez
      r[r.length-1] = binaryMessage[z];
      g[g.length-1] = binaryMessage[z++];
      b[b.length-1] = binaryMessage[z++];
      // console.log("r: " + r +"g: " + g +"b: " + b);
      
      
      //transformo el binario de cada componente del color a decimal
      var numeroR = 0;
      var numeroG = 0;
      var numeroB = 0;

      for (var k = 0; k < r.length; k++) 
      {
        numeroR += parseInt(r[k]) * Math.pow(2, (r.length - 1 - k));
        numeroG += parseInt(g[k]) * Math.pow(2, (r.length - 1 - k));
        numeroB += parseInt(b[k]) * Math.pow(2, (r.length - 1 - k));
      }
      
      
      // condicion que se repita mientras binaryMessage != ##
      // while(binaryMessage[z] != '#') {

     }
    //asigno en el pixel especifico, el mensaje ya cifrado en cada atributo
    imgCrypter.setPixel(i, j, { r: numeroR, g: numeroG, b: numeroB });
      }
  imgCrypter.applyChanges();

  console.log(imgCrypter.getDimensions());
}

function dec2bin(i){ 
  return (i<1) ? "" : dec2bin((i-(i%2))/2)+i%2; 
}

function getMessageAction() {
  // Acá va el código que lee la imagen y retorna el mensaje
  return "Mensaje de Ejemplo";
}
