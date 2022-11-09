const btn= document.querySelector('.btn')
const close= document.querySelector('.close')
const trailerContainer= document.querySelector('.trailer-container')
console.log(trailerContainer);




btn.addEventListener('click',()=>{
    trailerContainer.classList.remove("active");

});

close.addEventListener('click',()=>{
    trailerContainer.classList.add("active");
    trailerContainer.pause();
});
