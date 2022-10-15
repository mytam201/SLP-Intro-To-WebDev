//tam: create 3 variables by id name in html
let addToDoButton = document.getElementById('new-task-submit');
let toDoContainer = document.getElementById('new-task-form');
let inputField = document.getElementById('new-task-input');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
})