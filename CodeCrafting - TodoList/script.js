document.querySelector('.add-task-btn').addEventListener('click', function(){
    const taskInput = document.getElementById('task-input');
    const taskText  = taskInput.value.trim();

    if(taskText !== ''){
        const taskList = document.getElementById('task-list');

        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        listItem.appendChild(removeBtn);

        taskList.appendChild(listItem);
        taskInput.value = '';
        removeBtn.addEventListener('click', function(){
            taskList.removeChild(listItem);
        });
    }
});