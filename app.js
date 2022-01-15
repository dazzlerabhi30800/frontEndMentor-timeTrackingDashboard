const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');

link1.addEventListener('click', () => {
    link1.classList.toggle('active');
    link2.classList.remove('active');
    link3.classList.remove('active');
})
link2.addEventListener('click', () => {
    link2.classList.toggle('active');
    link1.classList.remove('active');
    link3.classList.remove('active');
})
link3.addEventListener('click', () => {
    link3.classList.toggle('active');
    link1.classList.remove('active');
    link2.classList.remove('active');
})



