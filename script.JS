function Adicionei() {

var tarefa = document.getElementById('tarefaInput') // lista
var res = document.getElementById('div#res') 
var tarefalista = tarefa.value
var marcado = false

if (tarefalista.trim() !== "") {
   var paragrafo = document.createElement('p')
   paragrafo.innerText ='- ' + tarefalista
   var lista = document.getElementById('res')
   lista.appendChild(paragrafo)
   tarefa.value = ""
   
} else {
    window.alert('Você ainda não escreveu uma tarefa')   
}

    paragrafo.addEventListener('click', function() {
    if (marcado == false) {
     paragrafo.style.textDecoration = "line-through"
     marcado = true

    } else {
        paragrafo.style.textDecoration = ''
        marcado = false
    }
})
    paragrafo.addEventListener('dblclick', function() {
        lista.removeChild(paragrafo)
    })
}