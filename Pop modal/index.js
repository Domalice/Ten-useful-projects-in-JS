const openEl = document.getElementById('open')
const closeEl = document.getElementById('close')
const containerEl = document.getElementById('container')


openEl.addEventListener('click', () => {
    containerEl.classList.add('active')
})

closeEl.addEventListener('click', () => {
    containerEl.classList.remove('active')
})