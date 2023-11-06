const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const rounds = document.querySelectorAll('.round')

currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > rounds.length) {
        currentActive = rounds.length
    }

    progressUpdate()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }

    progressUpdate()
})

function progressUpdate() {
    rounds.forEach((round, idx) => {
        if(idx < currentActive) {
            round.classList.add('active')
        } else {
            round.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (rounds.length - 1) * 100 + '%'

    if (currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === rounds.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}