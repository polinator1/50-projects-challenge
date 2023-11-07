const length = document.querySelector('#length')
const lengthResult = document.querySelector('#length-result')

length.addEventListener('change', (event) => {
    lengthResult.innerText = event.target.value
})