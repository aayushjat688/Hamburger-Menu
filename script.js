const cross = document.querySelector('.cross')
const header = document.querySelector('.displer')
const ham = document.querySelector('.ham-manu')
cross.addEventListener('click',()=>{
    header.style.display = 'none'
    ham.style.display='block'
    
})
ham.addEventListener('click',()=>{
    header.style.display = 'block'
    ham.style.display='none'
})



