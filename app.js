let question = document.querySelector('.question');
let gratitude = document.querySelector('.gratitude');
const btn = document.querySelector('button');
const ratings = document.querySelectorAll('.rating');
const rate = document.querySelector('.rate');

btn.addEventListener('click',() => {
    question.classList.add('hidden');
    gratitude.classList.remove('hidden');
});


ratings.forEach((rating) => {
    rating.addEventListener('click', () => { 
        const selected = document.querySelector('.selected-rating');
        if(selected){
            selected.classList.remove('selected-rating');
        }   
        rating.classList.add('selected-rating');
        rate.innerHTML = rating.innerHTML;
    });
});