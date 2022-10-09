// pegar o button botao
const button = document.querySelector('#botao')
// pegar o input
const input = document.querySelector('#input')
// pegar o botao_start
const button_start = document.querySelector('#botao_start')

const button_ultra = document.querySelector('#botao_ultra')

const button_mega = document.querySelector('#botao_mega')


//console log quando clicar no botao
button.addEventListener('click', function() {
    // pegar o valor do input
    const valor = input.value
    console.log(valor)
    //concatenar o valor do input com o link
    window.open('https://api.whatsapp.com/send?phone=5521995497141&text=' + valor)
    // window.open(f'https://www.google.com/search?q=,{valor}');
}
)

// ao passar o mouse pelo botao inverter a cor e depois voltar ao normal
button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#90EE90'
    button.style.color = 'black'
})

button.addEventListener('mouseout', function() {
    button.style.backgroundColor = 'green'
    button.style.color = 'white'
})



// forcar video a tocar automaticamente
const video = document.querySelector('video')
video.autoplay = true

button_start.addEventListener('mouseover', function() {
    button_start.style.backgroundColor = '#0dcaf0'
    button_start.style.color = 'white'
})

button_start.addEventListener('mouseout', function() {
    button_start.style.backgroundColor = 'white'
    button_start.style.color = '#0dcaf0'
})



button_ultra.addEventListener('mouseover', function() {
    button_ultra.style.backgroundColor = '#6f42c1'
    button_ultra.style.color = 'white'
})

button_ultra.addEventListener('mouseout', function() {
    button_ultra.style.backgroundColor = 'white'
    button_ultra.style.color = '#6f42c1'
})



button_mega.addEventListener('mouseover', function() {
    button_mega.style.backgroundColor = 'red'
    button_mega.style.color = 'white'
})

button_mega.addEventListener('mouseout', function() {
    button_mega.style.backgroundColor = 'white'
    button_mega.style.color = 'red'
})