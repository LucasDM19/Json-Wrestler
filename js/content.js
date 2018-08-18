//Teste de mensagem
//alert("Ei, aqui eh a extensao do Chrome extension! QAP?")

var firstHref = $("a[href^='http']").eq(0).attr("href"); //log the URL of the first external link on the page
console.log(firstHref);