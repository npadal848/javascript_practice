document.body.addEventListener('keydown', function(e){
    var keyCode = e.key;
    console.log(keyCode+' key clicked');
});

document.body.addEventListener('keyup', function(e){
    var keyCode = e.key;
    console.log(keyCode+' key up');
});

document.body.addEventListener('keypress', function(e){
    var keyCode = e.key;
    console.log(keyCode+' key pressed');
});