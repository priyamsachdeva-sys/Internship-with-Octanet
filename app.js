let listcontainer = document.getElementById('list-container')

let inputbox = document.getElementById('input-box')
function addtask(){
    if(inputbox.value === ''){
        alert('Add Your Task')
    }
    else{
        let task = document.createElement('li')
        task.textContent = inputbox.value
        listcontainer.appendChild(task)

        let span = document.createElement('span');   
        span.textContent = '\u00d7';
        task.appendChild(span)

    }
    inputbox.value = ''
    savedata()
}
listcontainer.addEventListener('click',(el)=>{
    if(el.target.tagname == 'LI'){
        el.target.classlist.toggle('checked')
        savedata()
    }
    else if(el.target.tagname == 'SPAN'){
        el.target.parentElement.remove()
        savedata()
    }
})
function savedata(){
    localStorage.setItem("task",listcontainer.innerHTML)
}
function showdata(){
    listcontainer.innerHTML=localStorage.getItem('task')
}

showdata()