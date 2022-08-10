const toggle = document.getElementById('toggle')
const lab = document.getElementById('lab')

toggle.addEventListener('change', (e) => {
    document.body.classList.toggle('dark', e.target.checked)
    if(toggle.checked) {
        lab.innerText = '✨'
    } else {
        lab.innerText = '⭐'
    }
})