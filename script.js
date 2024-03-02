let todoInputContainer = document.querySelector("#wishlist");
let addToDoButton = document.querySelector(".button");
let todo;
let todoList = [];
let todosContainer = document.querySelector(".container");

// ? creating function to create unique id
function uuid() {
    // universal unique identification
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (param) {
        let number = Math.random() * 16 | 0,
            randomNumber = param == 'x' ? number : (number & 0x3 | 0x8);
        return randomNumber.toString(16);
    })
}

addToDoButton.addEventListener("click", (event) => {
    event.preventDefault();
    // * Prevent default is used to prevent the form from doing the default action which is reloading the page after the button is clicked 

    todo = todoInputContainer.value;
    // * value is used to fetch the input field value which the user has enetered
    if (todoList.length >= 0 && todo.length > 0) {
        todoList.push({ id: uuid(), todo, isCompleted: false });
    }
    renderTodoList(todoList);
})

todosContainer.addEventListener("click", (event) => {
    let key = event.target.dataset.key;
    todoList = todoList.map((todo) => todo.id === key ? { ...todo, isCompleted: !todo.isCompleted } : todo)
    console.log(event.target)
    console.log(todoList)
    
})


function renderTodoList(todoList) {
    todosContainer.innerHTML = todoList.map(({ id, todo, isCompleted }) => 
`<div class="item-container">
    <div class="wrapper">
        <input type="checkbox" data-key=${id} name=${todo} id=${id}>
        <label for=${id} data-key=${id}>${todo}</label>    
    </div>
    <img src="./trash.svg" alt="delete button">
</div>`).join('')
}
