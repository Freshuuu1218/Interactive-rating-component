const ratingState = document.querySelector('.rating');
const thanksState = document.querySelector('.thanks');
const rates = document.querySelectorAll('.circle');
const button = document.querySelector('#submit');
const ratingContainer = document.querySelector('.rating-value');

getValue()
function getValue(){
rates.forEach(rate =>{
    rate.addEventListener('click',()=>{ 
            for(let i=0; i<rates.length; i++){
            rates[i].classList.remove('clicked');
        }
        rate.classList.add('clicked'); 
    })
}
)}
button.addEventListener('click',()=>{
    ratingState.classList.add('vanish');
    thanksState.classList.remove('vanish');
    rates.forEach(rate =>{
        if(rate.classList.contains('clicked')){
            let rateSubmitted = rate.getAttribute('data-value');
            ratingContainer.innerHTML = `You selected ${rateSubmitted} out of 5`
        }
})
})

