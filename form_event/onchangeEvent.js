var username = document.getElementById('username');

username.addEventListener('input', function(event){
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);
    username.value = currentValue;
});