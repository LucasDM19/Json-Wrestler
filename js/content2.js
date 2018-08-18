function aguardaUmPouco() { //function stateChange(newState)
    setTimeout(function(){
      //if(newState == -1){alert('VIDEO HAS STOPPED');}
      var teste = $(".mod-link").attr("href")
      console.log(teste);
    }, 5000); //Aguarda 5 segundos
}

aguardaUmPouco();