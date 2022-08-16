// simple javascrpt for modal class 
const modal = document.querySelector('.modal') ;
const loginBtn = document.querySelector('.login-btn');
const closeBtn = document.querySelector('.close');

// to open the modal form on click
loginBtn.addEventListener('click', function() {
   modal.style.display = 'block';

});

// to close the modal 
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// outside window
window.addEventListener('click' , outsideClick);

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none' ;
    }
}