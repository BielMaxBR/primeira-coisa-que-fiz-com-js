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
                alert("nope")
            }
         })
    })()
}