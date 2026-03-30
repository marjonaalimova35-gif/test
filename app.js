// 1 Elementlarni chaqirish
const headerBars = document.querySelector('.headerBars')
const headerItems = document.querySelector('.headerItems')

// 2 Element bosilgan da function qushish
headerBars.addEventListener('click', () => {
 headerItems.classList.toggle('show')
})