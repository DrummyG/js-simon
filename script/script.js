// variabili globali
const testo = document.getElementById('app')
const caselle = document.getElementById('input')
const start = document.getElementById('start')
const compara = document.getElementById('compara')
let numeri = []
let mieiNumeri = []

// funzioni
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function generateNumber(){
    numeri = []
    while(numeri.length < 5){
        let numero = getRandomInt(1, 100)
        if (!numeri.includes(numero)){
            numeri.push(numero)
        }
    }
    console.log(numeri)
}

function combatti(){
    testo.innerHTML = `<div class="setter"></div>`
    for(let d = 1; d <= numeri.length; d++){
        let circle = document.createElement('input')
        circle.setAttribute('id', `${d}`)
        caselle.append(circle)

    }
}

function timer(){
    generateNumber()
    testo.innerHTML = `<div class="setter"></div>`
    caselle.innerHTML = ''
    for(let i = 0; i < numeri.length; i++){
        testo.innerHTML += `<p>${numeri[i]}</p>`
    }
    setTimeout( combatti, 30000)
}

function check(){
    const one = document.getElementById('1')
    const two = document.getElementById('2')
    const three = document.getElementById('3')
    const four = document.getElementById('4')
    const five = document.getElementById('5')
    mieiNumeri = []
    mieiNumeri.push(parseInt(one.value))
    mieiNumeri.push(parseInt(two.value))
    mieiNumeri.push(parseInt(three.value))
    mieiNumeri.push(parseInt(four.value))
    mieiNumeri.push(parseInt(five.value))
    console.log(mieiNumeri)
    for(let c = 0; c<numeri.length; c++){
        if(numeri[c] === mieiNumeri[c]){
            testo.innerHTML +=`<p>Corretto</p>`
        } else {
            testo.innerHTML +=`<p>Errato</p>`
        }
    }
}

// bottoni
start.addEventListener('click', timer)
compara.addEventListener('click', check)