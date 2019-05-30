function tocar() {
    var resp = window.prompt("hehe")
    if (resp.toLowerCase() === "sans") {
        document.getElementById('abajur').style.visibility = 'visible'
        window.alert("* Rápido! \n  se esconde lá atrás daquele abajur \n  muito conveniente!")

    }
}
function ligou() {
    window.document.body.style.backgroundColor =  'gold'
    window.document.body.style.color = 'black'
    window.document.getElementById('tescola').style.color = 'white'
    alert('* Ops! \n  você acabou ligando o abajur!')
}
function escola() {
    document.getElementById('escola').style.visibility = 'visible'
    alert('WOW! você achou a escola de bruxos!')
}