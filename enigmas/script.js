function level1() {
    console.log('enviando')
    $.getJSON("senha.json", function(json) {
        console.log('recebido')
        console.log(json)
        var resp = prompt("senha:")
        if (resp == json.level1) {
            location.href="level2.htm"
        }
        else {
            alert("nope.")
        }})
}