import axios from axios
const main = () => {
    const input = document.getElementById('url-field')
    const button = document.getElementById('submit-button')
    button.addEventListener('click', () => {
        console.log('click', input.value)
        axios.get() // todo
    })
    console.log('script running')
}

window.onload = main
