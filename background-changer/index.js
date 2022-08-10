const btnEl = document.getElementById('btn')

btnEl.addEventListener('click', () => {
    document.body.style.background = randomBg()
})

function randomBg() {
   return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`
}