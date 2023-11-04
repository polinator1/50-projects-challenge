const result = document.querySelector('#result')
const passwordLength = document.querySelector('#length')
const passwordLengthResult = document.querySelector('#length-result')
const includeUpperCase = document.querySelector('#uppercase')
const includeLowerCase = document.querySelector('#lowercase')
const includeNumbers = document.querySelector('#numbers')
const includeSymbols = document.querySelector('#symbols')
const generateBtn = document.querySelector('#generate')
const copyBtn = document.querySelector('#copy')

// set default password length to 20
document.addEventListener('DOMContentLoaded', () => {
    passwordLength.value = 20
    passwordLengthResult.innerText = 20

    let onLoadLength = passwordLength.value
    let onLoadNumbers = includeNumbers.checked
    let onLoadSymbols = includeSymbols.checked
    let onLoadUpperCase = includeUpperCase.checked
    let onLoadLowerCase = includeLowerCase.checked
    result.value = generatePassword(onLoadNumbers, onLoadSymbols, onLoadLength, onLoadUpperCase, onLoadLowerCase)
})

//listen for password length change
passwordLength.addEventListener('change', (event) => {
    passwordLengthResult.innerText = event.target.value
})

// listen for copy button
copyBtn.addEventListener('click', () => {
    copy(result.value)
})

// listen for generate button
generateBtn.addEventListener('click', () => {
    const length = passwordLength.value
    const numbers = includeNumbers.checked
    const upperCase = includeUpperCase.checked
    const lowerCase = includeLowerCase.checked
    const symbols = includeSymbols.checked

    result.value = generatePassword(length, numbers, upperCase, lowerCase, symbols)
})

function generatePassword(length, numbers, upperCase, lowerCase, symbols) {
    let generatedPassword = ''
    let variationsCount = [numbers, symbols, upperCase, lowerCase].length

    for (let i = 0; i < length; i += variationsCount) {
        if (numbers) {
            generatedPassword += getRandomNumber()
        }
        if (symbols) {
            generatedPassword += getRandomSymbol()
        }
        if (upperCase) {
            generatedPassword += getRandomUpper()
        }
        generatedPassword += getRandomLower()
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase()
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function copy(text) {
    const input = document.createElement('input')
    input.setAttribute('value', text)
    document.body.appendChild(input)
    input.select()
    let copiedResult = document.execCommand('copy')
    document.body.removeChild(input)
    
    const alert = document.createElement("div")
    alert.classList.add("alert");
    alert.textContent = "Copied!"
    document.body.appendChild(alert)
    
    setTimeout(() => {
      document.querySelector('.alert').style.display = "none"
      document.body.removeChild(alert)
    }, 1000)
    return result;
}