// Init buttons
const hairButton    =   document.getElementById('hair-button')
const earsButton    =   document.getElementById('ears-button')
const eyesButton    =   document.getElementById('eyes-button')
const mouthButton   =   document.getElementById('mouth-button')
const neckButton    =   document.getElementById('neck-button')
const legButton     =   document.getElementById('leg-button')
const accButton     =   document.getElementById('accessories-button')
const bgButton      =   document.getElementById('background-button')

const accButtons    =   document.getElementById('accessories__buttons')
const styleButtons  =   document.getElementById('style__buttons')

const randButton    =   document.getElementById('random')
const dwnButton     =   document.getElementById('download')

// Init image parts
const bgPart      =   document.getElementById('image')
const hairPart    =   document.getElementById('hair-part')
const earsPart    =   document.getElementById('ears-part')
const eyesPart    =   document.getElementById('eyes-part')
const mouthPart   =   document.getElementById('mouth-part')
const neckPart    =   document.getElementById('neck-part')
const legPart     =   document.getElementById('leg-part')
const accPart     =   document.getElementById('acc-part')

// Init titles
const titleStyle  =   document.getElementById('controls__title-style')

// Image parts list
const hair = [
    { text: "Default", src: "./alpaca/hair/default.png" },
    { text: "Bang", src: "./alpaca/hair/bang.png" },
    { text: "Curls", src: "./alpaca/hair/curls.png" },
    { text: "Elegant", src: "./alpaca/hair/elegant.png" },
    { text: "Fancy", src: "./alpaca/hair/fancy.png" },
    { text: "Quiff", src: "./alpaca/hair/quiff.png" },
    { text: "Short", src: "./alpaca/hair/short.png" }
]

const eyes = [
    { text: "Default", src: "./alpaca/eyes/default.png" },
    { text: "Angry", src: "./alpaca/eyes/angry.png" },
    { text: "Naughty", src: "./alpaca/eyes/naughty.png" },
    { text: "Panda", src: "./alpaca/eyes/panda.png" },
    { text: "Smart", src: "./alpaca/eyes/smart.png" },
    { text: "Star", src: "./alpaca/eyes/star.png" }
]

const ears = [
    { text: "Default", src: "./alpaca/ears/default.png" },
    { text: "Tilt Backward", src: "./alpaca/ears/tilt-backward.png" },
    { text: "Tilt Forward", src: "./alpaca/ears/tilt-forward.png" }
]

const leg = [
    { text: "Default", src: "./alpaca/leg/default.png" },
    { text: "Bubble Tea", src: "./alpaca/leg/bubble-tea.png" },
    { text: "Cookie", src: "./alpaca/leg/cookie.png" },
    { text: "Game Console", src: "./alpaca/leg/game-console.png" },
    { text: "Tilt Backward", src: "./alpaca/leg/tilt-backward.png" },
    { text: "Tilt Forward", src: "./alpaca/leg/tilt-forward.png" }
]

const mouth = [
    { text: "Default", src: "./alpaca/mouth/default.png" },
    { text: "Astonished", src: "./alpaca/mouth/astonished.png" },
    { text: "Eating", src: "./alpaca/mouth/eating.png" },
    { text: "Laughing", src: "./alpaca/mouth/laugh.png" },
    { text: "Tongue", src: "./alpaca/mouth/tongue.png" }
]

const neck = [
    { text: "Default", src: "./alpaca/neck/default.png" },
    { text: "Thick", src: "./alpaca/neck/thick.png" },
    { text: "Bend Backward", src: "./alpaca/neck/bend-backward.png" },
    { text: "Bend Forward", src: "./alpaca/neck/bend-forward.png" }
]

const accessories = [
    { text: "None", src: "./alpaca/accessories/empty.png" },
    { text: "Earings", src: "./alpaca/accessories/earings.png" },
    { text: "Flower", src: "./alpaca/accessories/flower.png" },
    { text: "Glasses", src: "./alpaca/accessories/glasses.png" },
    { text: "Headphones", src: "./alpaca/accessories/headphone.png" }
]

const background = [
    { name: "Blue 50", color: "#5596f6" },
    { name: "Blue 60", color: "#2a7bf4" },
    { name: "Blue 70", color: "#2a5ca7" },
    { name: "Dark Blue 30", color: "#7a8faf" },
    { name: "Dark Blue 50", color: "#002966" },
    { name: "Dark Blue 70", color: "#00193d" },
    { name: "Green 50", color: "#9fd966" },
    { name: "Green 60", color: "#74bd29" },
    { name: "Green 70", color: "#6a9440" },
    { name: "Yellow 50", color: "#fcd33f" },
    { name: "Yellow 60", color: "#e6b60d" },
    { name: "Yellow 70", color: "#cf8e10" },
    { name: "Red 50", color: "#e85e23" },
    { name: "Red 60", color: "#cb4c15" },
    { name: "Red 70", color: "#9f370a" },
    { name: "Grey 40", color: "#cccccc" },
    { name: "Grey 70", color: "#666666" },
    { name: "Grey 80", color: "#333333" }
]

// Render choices
function renderButtons(imagePart) {
    const buttons = []

    for (let i = 0; i < imagePart.length; i++) {

        if (imagePart != background) {
            const imagePartButton = `<button onclick="updateImage('${imagePart[i].src}')" class="button button__controls">${imagePart[i].text}</button>`
            buttons.push(imagePartButton)
        } else {
            const backgroundButton = `<button onclick="updateBg('${imagePart[i].color}')" class="button__color" name="${imagePart[i].name}"><span class="button__color_swatch" style="background:${imagePart[i].color}"></span></button>`
            buttons.push(backgroundButton)
        }
    }

    // Remove previous
    styleButtons.innerHTML = ''

    // Add new
    buttons.forEach(imagePartButton => {
        styleButtons.innerHTML += imagePartButton
    })

    // Active button states
    styleButtons.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            removeActiveStyle()
            button.classList.add('active')
    })
    })

    styleButtons.querySelectorAll('.button__color').forEach(button => {
        button.addEventListener('click', () => {
            removeActiveColor()
            button.classList.add('button__color_active')
        })
    })
}

// Update image parts
function updateImage(src) {
    if (src.includes('/hair/')) {
        hairPart.src = src
    }
    if (src.includes('/ears/')) {
        earsPart.src = src
    }
    if (src.includes('/eyes/')) {
        eyesPart.src = src
    }
    if (src.includes('/mouth/')) {
        mouthPart.src = src
    }
    if (src.includes('/neck/')) {
        neckPart.src = src
    }
    if (src.includes('/leg/')) {
        legPart.src = src
    }
    if (src.includes('/accessories/')) {
        accPart.src = src
    }
}

// Update background
function updateBg(color) {
    bgPart.style.backgroundColor = color
    bgPart.style.transition = ".2s ease-in"
}

// Remove active class from buttons
function removeActive() {
    accButtons.querySelectorAll('button').forEach(button => {
        button.classList.remove('active')
        styleButtons.classList.remove('active__colors')
    })
}
function removeActiveStyle() {
    styleButtons.querySelectorAll('button').forEach(button => {
        button.classList.remove('active')
    })
}
function removeActiveColor() {
    styleButtons.querySelectorAll('.button__color').forEach(button => {
        button.classList.remove('button__color_active')
    })
}

// Active button states
const buttonsData = [
    { button: hairButton, data: hair, title: 'Choose Hair:' },
    { button: earsButton, data: ears, title: 'Choose Ears:' },
    { button: eyesButton, data: eyes, title: 'Choose Eyes:' },
    { button: mouthButton, data: mouth, title: 'Choose Mouth:' },
    { button: neckButton, data: neck, title: 'Choose Neck:' },
    { button: legButton, data: leg, title: 'Choose Leg:' },
    { button: accButton, data: accessories, title: 'Choose Accessory:' },
    { button: bgButton, data: background, title: 'Choose Background:' }
]

buttonsData.forEach(buttonData => {
    const { button, data, title } = buttonData
    
    button.addEventListener('click', () => {
        renderButtons(data)
        removeActive()
        button.classList.add('active')
        titleStyle.innerHTML = title
        
        if (button === bgButton) {
            styleButtons.classList.add('active__colors')
        }
    })
})

// Randomize
function randomize() {
    const imageParts = [hair, eyes, ears, leg, mouth, neck, accessories]
    
    imageParts.forEach(part => {
        updateImage(part[Math.floor(Math.random() * part.length)].src)
    })
    updateBg(background[Math.floor(Math.random() * background.length)].color)
}
randButton.addEventListener('click', () => {
    removeActiveStyle()
    removeActiveColor()
    randomize()
})

// Download
dwnButton.addEventListener('click', () => {
    html2canvas(bgPart, {scale: 1}).then(function(canvas) {
        const fileName = "your-alpaca";
        const link = document.createElement("a");
        link.download = fileName + ".png";

        canvas.toBlob(function(blob) {
            link.href = URL.createObjectURL(blob);
            link.click();
        })
    });
})

// Init app
renderButtons(hair)
hairButton.classList.add('active')

// Dark mode
const html = document.getElementsByTagName('html')[0]
const themeButton = document.getElementById('theme')

function toggleTheme(theme) {
    if (html.dataset.theme != 'dark') {
        html.dataset.theme = theme
        themeButton.innerHTML = "<i class=\"fa-solid fa-lightbulb\"></i>"
    } else {
        html.dataset.theme = 'light'
        themeButton.innerHTML = "<i class=\"fa-solid fa-moon\"></i>"
    }
}