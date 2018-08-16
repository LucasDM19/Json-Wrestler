
$(document).ready(function(){
   
   console.log('Alo, mundo!');
   
   //A cada 1 segundo verifica se as abas estão abetas
	setInterval(function(){	
      console.log('X Tumtum, ja peguei');
      
      chrome.tabs.query({},function(tabs){
			$(tabs).each(function(){
				var tab_id=this.id;
				if (this.url.includes('exchange/plus/football/inplay')) {
               var y = document.getElementsByClassName('mod-link');
               var aNode = y[0];
               console.log( aNode );
				}
			});
      });
   },1000)
   
});