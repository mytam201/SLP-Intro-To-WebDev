window.addEventListener('load', () => {
    //create variables
    const form1 = document.querySelector("#new-task-form1");
    const input1 = document.querySelector('#new-task-input1');
    const list_el1 = document.querySelector("#tasks1");

    const form2 = document.querySelector("#new-task-form2");
    const input2 = document.querySelector('#new-task-input2');
    const list_el2 = document.querySelector("#tasks2");

    const form3 = document.querySelector("#new-task-form3");
    const input3 = document.querySelector('#new-task-input3');
    const list_el3 = document.querySelector("#tasks3");

    const form4 = document.querySelector("#new-task-form4");
    const input4 = document.querySelector('#new-task-input4');
    const list_el4 = document.querySelector("#tasks4");

    form1.addEventListener('submit', (e) => {
        e.preventDefault();

        const task1 = input1.value;

        //need add input alert later (notification if there's no input from user)
        const task_el1 = document.createElement("div");
        task_el1.classList.add("task");

        const task_content_el1 = document.createElement("div");
        task_content_el1.classList.add("content");
        task_content_el1.innerText = task1;

        task_el1.appendChild(task_content_el1);
        list_el1.appendChild(task_el1);
    })

    form2.addEventListener('submit', (e) => {
        e.preventDefault();

        const task2 = input2.value;

        //need add input alert later (notification if there's no input from user)
        const task_el2 = document.createElement("div");
        task_el2.classList.add("task");

        const task_content_el2 = document.createElement("div");
        task_content_el2.classList.add("content");
        task_content_el2.innerText = task2;

        task_el2.appendChild(task_content_el2);
        list_el2.appendChild(task_el2);
    })

    form3.addEventListener('submit', (e) => {
        e.preventDefault();

        const task3 = input3.value;

        //need add input alert later (notification if there's no input from user)
        const task_el3 = document.createElement("div");
        task_el3.classList.add("task");

        const task_content_el3 = document.createElement("div");
        task_content_el3.classList.add("content");
        task_content_el3.innerText = task3;

        task_el3.appendChild(task_content_el3);
        list_el3.appendChild(task_el3);
    })

    form4.addEventListener('submit', (e) => {
        e.preventDefault();

        const task4 = input4.value;

        //need add input alert later (notification if there's no input from user)
        const task_el4 = document.createElement("div");
        task_el4.classList.add("task");

        const task_content_el4 = document.createElement("div");
        task_content_el4.classList.add("content");
        

        task_el4.appendChild(task_content_el4);

        const task_input_el4 = document.createElement("input");
        task_input_el4.classList.add("text");
        task_input_el4.type = "text";
        task_input_el4.value = task4;
        task_input_el4.setAttribute("readonly", "readonly");

        task_content_el4.appendChild(task_input_el4);

        const task_actions_el4 = document.createElement("div");
        task_actions_el4.classList.add("actions");

        const task_delete_el4 = document.createElement("button");
        task_delete_el4.classList.add("delete");
        task_delete_el4.innerHTML = "Delete";

        task_actions_el4.appendChild(task_delete_el4);

        task_el4.appendChild(task_actions_el4);
        list_el4.appendChild(task_el4);

        input4.value = "";

        task_delete_el4.addEventListener('click', (e) => {
			list_el4.removeChild(task_el4);
		});
    })


})