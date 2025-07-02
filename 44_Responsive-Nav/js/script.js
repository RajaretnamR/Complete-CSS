document.addEventListener('DOMContentLoaded',()=>{
    const sideNav=document.querySelector('.side-nav');
    const btnNav=document.querySelector('#btnNav');
    const overLayScreen=document.querySelector('.nav-overlay');

    btnNav.addEventListener('click', ()=>{
        sideNav.classList.add('open');
    });

    overLayScreen.addEventListener('click', ()=>{
        sideNav.classList.remove('open');
    });
});