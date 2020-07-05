const body = document.querySelector('body')
var currentTheme = 'light'

function changeTheme(data) {
    console.log(data)
    body.classList.remove(currentTheme)
    currentTheme = data
    body.classList.add(data)
    localStorage.setItem('theme', data)
}

function initializedTheme() {
    const data = localStorage.getItem('theme')
    changeTheme(data)
}

initializedTheme()