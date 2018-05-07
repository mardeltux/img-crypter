function insertMessageAction(message) {
    // Acá va el código que toma el mensaje y lo inserta en la imagen
    var comienzo = "##";
    var final = "@@";
    var mensaje = comienzo + message + final;
    //parseo el mensaje en binario
    var binaryMessage = imgCrypter.stringToBinary(mensaje);
//    Se separa el mensaje para tener como recorrerlo
    var mensajeSeparado = binaryMessage.split();
    //guardo en memoria la dimension de la imagen
    var tamanio = imgCrypter.getDimensions();

    console.log("mensaje:  " + binaryMessage + " - " + typeof (binaryMessage));

    console.log(tamanio + "-" + tamanio.width + "-" + tamanio.height);
//    Indice que recorre la palaba en 
    var indicePalabra = 0;

    for (var fila = 0; fila < tamanio.width; fila++) {
        for (var columna = 0; columna < tamanio.height; columna++) {

            //guardo la data, color, de cada pixel en memoria
            var pixelInfo = imgCrypter.getPixel(fila, columna);
//          console.log(dec2bin(pixelInfo.r)+ " " +typeof (dec2bin(pixelInfo.r)));

            //parseo cada atributo de color a binario            
            rojoEnBinario = dec2bin(pixelInfo.r);
            verdeEnBinario = dec2bin(pixelInfo.g);
            azulEnBinario = dec2bin(pixelInfo.b);
            // console.log("r: " + rojoEnBinario +"g: " + verdeEnBinario +"b: " + azulEnBinario);

            
            //reemplazo el valor menos significativo de cada componente 
            // del color por cada bit del mensaje incrementando de vez en vez
            
            rojoAArray = rojoEnBinario.split("");
            rojoAArray.pop();
            rojoAArray.push(binaryMessage[indicePalabra]);
            rojo = rojoAArray.join("");
            rojoDecimal = parseInt(bin2dec(rojo));

            verdeAArray = verdeEnBinario.split("");
            verdeAArray.pop();
            verdeAArray.push(binaryMessage[indicePalabra++]);
            verde = verdeAArray.join("");
            verdeDecimal = parseInt(bin2dec(verde));

            azulAArray = azulEnBinario.split("");
            azulAArray.pop();
            azulAArray.push(binaryMessage[indicePalabra++]);
            azul = azulAArray.join("");
            azulDecimal = parseInt(bin2dec(azul));
            
//asigno en el pixel especifico, el mensaje ya cifrado en cada atributo
            imgCrypter.setPixel(fila, columna, {r: rojoDecimal, g: verdeDecimalde, b: azulDecimall});
        }
    }
//    imgCrypter.applyChanges();

//    console.log(imgCrypter.getDimensions());
}

function dec2bin(i) {
    return (i < 1) ? "" : dec2bin((i - (i % 2)) / 2) + i % 2;
}

function bin2dec(bin){
    return parseInt(bin, 2).toString(10);
}

function getMessageAction() {
    // Acá va el código que lee la imagen y retorna el mensaje
    return "Mensaje de Ejemplo";
}