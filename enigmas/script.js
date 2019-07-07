function level1() {
    (function () {
        $.getJSON("../senha.json", function(json) {
            var resp = prompt("senha:")
            if (resp == json.level1) {
                location.href="level2.htm"
            }
            else {
                alert("nope.")
            }})
        })()
}
function level2() {
    (function () {
        $.getJSON("../senha.json", function(json) {
            var resp = prompt("senha:")
            if (resp == json.level2) {
                location.href="faseTRI.htm"
            }
            else if (resp == "velha") {
                location.href="marrapais.htm"
            }
            else {
                alert("nope.")
            }
         })
    })()
}
function level3() {
    (function() {
        $.getJSON("../senha.json", function(json) {
            var resp = prompt("senha:")
            if (resp == json.level3) {
                location.href="vinagrete.htm"
            }
            else if (resp == "zubat") {
                alert("ta perto. siga a dica do título")
            }
            else if (resp == "macaco") {
                alert("não. não é macaco")
            }
            else {
                alert("nope.")
            }
        })
    })()
}
function decifra_me() {
    (function() {
        $.getJSON("../senha.json", function(json) {
            var resp = prompt("senha:")
            if (resp == json.esfinge) {
                location.href="_.htm"
            }
            else if (resp == "ketchup") {
                location.href="acerto.htm"
            }
            else if (resp != json.esfinge) {
                alert("nope.")
            }
        })
    })()
}
function acerto() {
    location.href="vinagrete.htm"
}
function nada() {
    $.getJSON("../senha.json", function(json) {
        var resp = prompt("senha")
        if (resp == json.nada) {
            location.href="pera_ae.htm"
        }
        else {
            alert("nope.")
        }
    })
}