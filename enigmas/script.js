function level1() {
    console.log('enviando')
    const senha = require("../enigmas/senha.json")
    console.log('recebido')
    var resp = prompt("senha:")
    if (resp == senha.level1) {
        location.href="level2.htm"
    }
    else {
        alert("nope.")
    }
}