function insertMessageAction(message) {
  // Acá va el código que toma el mensaje y lo inserta en la imagen
  
  var tamanio = imgCrypter.getDimensions();
  
  var binaryMessage = imgCrypter.stringToBinary(message);

  

  var z = 0;
  
  for(var i = 0; i < tamanio.width; i++) {
    for(var j = 0; j < tamanio.height; j++) {

      var pixelInfo = imgCrypter.getPixel(i,j);
      r = dec2bin(pixelInfo.r);
      g = dec2bin(pixelInfo.g);
      b = dec2bin(pixelInfo.b);
      r[r.length-1] = binaryMessage[z];
      g[g.length-1] = binaryMessage[z++];
      b[b.length-1] = binaryMessage[z++];
      // console.log("r: " + r +"g: " + g +"b: " + b);
      
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
