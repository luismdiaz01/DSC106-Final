//el = document.getElemenById("");
//document.addEventListener OR el.on('click', functionName)

var delayInMilliseconds = 500; // half a second

setTimeout(function() { 

   var iframe = document.getElementsByTagName('iframe');
   for(var i = 0; i < iframe.length; i++){
    iframe[i].style.background = '#ff6633';
    iframe[i].contentWindow.document.body.style.backgroundColor = '#ff6633';
   }

}, delayInMilliseconds);