const css = document.querySelector('h3')
const color1 = document.querySelector('.color1')
const color2 = document.querySelector('.color2')
const color3 = document.querySelector('.color3')
const body = document.getElementById('gradient')
const button = document.querySelectorAll('button')
const rand = document.querySelector('.rand')
const left = document.querySelector('.left')
const right = document.querySelector('.right')


let randomColor = () => {
    let random = []
    for (let i=0; i<3;i++) {
       let ranCol = Math.floor(Math.random()*16777215).toString(16)
       random.push('#'+ranCol) 
    }

    color1.value =random[0]
    color2.value =random[1]
    color3.value =random[2]

    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ", " 
    + color3.value
    + ")"

    rand.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ", " 
    + color3.value
    + ")"

    left.style.background = 
    "linear-gradient(to left, "
    + color2.value
    + ", "
    + color1.value
    + ")"

    right.style.background = 
    "linear-gradient(to left, "
    + color3.value
    + ", "
    + color2.value
    + ")"

    css.textContent = body.style.background + ";";
}

let pickColor = () => {

    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ", " 
    + color3.value
    + ")"

    rand.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ", " 
    + color3.value
    + ")"

    left.style.background = 
    "linear-gradient(to left, "
    + color2.value
    + ", "
    + color1.value
    + ")"

    right.style.background = 
    "linear-gradient(to left, "
    + color3.value
    + ", "
    + color2.value
    + ")"

    css.textContent = body.style.background + ";";
}

let pickColorLeft = () => {
    
    body.style.background = 
    "linear-gradient(to left, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ", " 
    + color3.value
    + ")"

    rand.style.background = 
    "linear-gradient(to left, " 
    + color1.value 
    + ", " 
    + color2.value 
    + ", " 
    + color3.value
    + ")"

    left.style.background = 
    "linear-gradient(to right, "
    + color3.value
    + ", "
    + color2.value
    + ")"

    right.style.background = 
    "linear-gradient(to right, "
    + color2.value
    + ", "
    + color1.value
    + ")"

    css.textContent = body.style.background + ";";
    
    
}

button[0].addEventListener('click', randomColor)

button[1].addEventListener('click', pickColorLeft)

button[2].addEventListener('click', pickColor)

color1.addEventListener('input', pickColor)

color2.addEventListener('input', pickColor)

color3.addEventListener('input', pickColor)





