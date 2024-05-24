var getul=document.getElementById('ul')
var inp=document.getElementById('floatingInput')
function add(){
    var li = document.createElement('li')
    var litext= document.createTextNode(inp.value)
    li.appendChild(litext)
    getul.appendChild(li)
    inp.value=''

    var update=document.createElement('button')
update.innerText='Update'
update.setAttribute('class','btn btn-primary')
update.setAttribute('onclick','upd(this)')
li.appendChild(update)

var deletLi=document.createElement('button')
deletLi.innerText='Delete'
deletLi.setAttribute('class','btn btn-dark')
deletLi.setAttribute('onclick','delLi(this)')
li.appendChild(deletLi)
}

function upd(e){
var updLi=prompt('update youre TODO.',e.parentNode.firstChild.textContent)
e.parentNode.firstChild.textContent=updLi
}





function delLi(e){
e.parentNode.remove()
}




function deletAll(){
    getul.innerHTML=''
}