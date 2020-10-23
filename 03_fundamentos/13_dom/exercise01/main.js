window.onload = function(e) {
    console.log('documento cargado')


    document.getElementsByClassName('buttons');
    document.getElementsByClassName('buttons')[0];

    console.log(document.querySelectorAll('div.buttons'));

    var x = document.evaluate("//div[@class='buttons']",document);
    console.log(x);
    
    // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'
}