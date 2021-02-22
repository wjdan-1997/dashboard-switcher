let checkbox =document.getElementById('myCheck');
let body = document.querySelector('body');
let card =document.querySelector('.cards');
let overviews = document.querySelector('.overview-card')
if(checkbox.checked == true){
    body.classList.remove('active');
    overviews.classList.remove('active');
    card.classList.remove('active');
}else {
    body.classList.add('active');
    overviews.classList.add('active');
    card.classList.add('active');
}

