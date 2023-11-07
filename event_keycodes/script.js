const container = document.getElementById('container')

window.addEventListener('keydown', (event) => {
    container.innerHTML = `
    <div class="keycode">
    ${event.key === ' ' ? 'Space' : event.key} 
    <small>event.key</small>
    </div>

    <div class="keycode">
    ${event.keyCode}
    <small>event.keyCode</small>
    </div>

    <div class="keycode">
    ${event.code}
    <small>event.code</small>
    </div>
    `
})