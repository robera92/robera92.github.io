(function () {

        const storageKey = 'todo_items'; // localStorage key

        load_tasks(); // load tasks on window load.
        
        // events
        document.querySelector('#addTaskForm').addEventListener('submit', (e)=>{
            e.preventDefault();
            add_new_task();
        });

        for(const element of document.querySelectorAll('.removeItem button')){
            element.addEventListener('click', (e)=> {
                remove_task(element);
             });
        }

  
        for(const element of document.querySelectorAll('.status-icon button')){
            element.addEventListener('click', (e)=> {
                update_task(element, 'completed');
            });
        }

    

    // functions
    function update_task(task, element = null, action = null){

        // define table items
        let tableBody = document.querySelector('.app tbody');
        let trItem = document.querySelector('.app tbody tr'); 
        let newTrItem = trItem.cloneNode();// clone first tr element

        if(typeof task !== 'object'){ // json, parse to object
            task = JSON.parse(task);
        }

        if(element == null){ // if element is not passed, append to table, used onload or when creating new element.
            newTrItem.classList.remove('d-none');
            newTrItem.setAttribute('data-id', task.task_id);
            newTrItem.innerHTML = trItem.innerHTML;
            tableBody.append(newTrItem);
        }

        // check if we are modifying object
        if(action == 'new-task'){
            let all_tasks = JSON.parse(localStorage.getItem(storageKey));
            if(all_tasks === null){
                all_tasks = [];
             }
            // now save object to storage
            all_tasks.push(task);
            localStorage.setItem(storageKey, JSON.stringify(all_tasks));

        } // object modidying end
    
           
        console.log(localStorage.getItem(storageKey));

    }



    function append_task(task){
       
        for (const node of newTrItem.childNodes) {
            if(node.classList != null){
                if(node.classList.contains('subject') ){
                    if(task.status == 'Complete'){
                        node.style.textDecoration = 'line-through';
                    }
                    node.textContent = task.subject;
                 }else if(node.classList.contains('dueDate') ){
                    node.textContent = task.dueDate;
                 }else if(node.classList.contains('priority') ){
                    let priorityNode = node.childNodes[1];
                    let priorityValue = parseInt(task.priority);
                    switch (priorityValue) {
                        case 1:
                            priorityNode.classList.add('text-bg-success');
                            priorityNode.textContent = 'Low'
                            break;
                        case 2:
                            priorityNode.classList.add('text-bg-primary');
                            priorityNode.textContent = 'Normal'
                            break;
                        default:
                            priorityNode.classList.add('text-bg-danger');
                            priorityNode.textContent = 'High'
                            break;
                      }
                      
                 }else if(node.classList.contains('status') ){
                    node.textContent = task.status;
                 }else if(node.classList.contains('progressItem') ){
                    node.childNodes[1].childNodes[1].style.width=task.percent+'%';
                    node.childNodes[1].childNodes[1].textContent=task.percent+'%';
                 }else if(node.classList.contains('modified') ){
                    let modifiedDate = new Date(task.modified);
                    node.textContent =  modifiedDate.toISOString();
                 }
            }
        }

    }

        function add_new_task(){
                const formData = new FormData(document.getElementById("addTaskForm"));
                let taskObj = crete_task_obj(formData);
                update_task(taskObj, null, 'new-task');
        }


        function load_tasks(){
            let all_tasks = JSON.parse(localStorage.getItem(storageKey));
            if(all_tasks != null){
                for (const task of all_tasks) {
                    update_task(task);
                }
            }
        }

        function remove_task(node){ // remove the task from dom and from storage.
            let parentNode = node.parentNode.parentNode;
            let itemId = parentNode.getAttribute("data-id");
            let all_tasks = JSON.parse(localStorage.getItem(storageKey));

            for (let i = 0; i < all_tasks.length; i++) {
                let taskObj = JSON.parse(all_tasks[i]);
                if(taskObj.task_id == itemId){
                    all_tasks.splice(i, 1);
                }
            }

            localStorage.setItem(storageKey, JSON.stringify(all_tasks));
            parentNode.remove();
        }

        function crete_task_obj(task){ // create task object from form data

            let all_tasks = JSON.parse(localStorage.getItem(storageKey));
            if(all_tasks === null){
                all_tasks = [];
            }

            let isFormData = task instanceof FormData ? true : false;
            let subject = '';
            let priority = 2;
            let dueDate = '';
            let taskId = (all_tasks.length) + 1;

            if(isFormData == true){
                subject = task.get("subject");
                priority = task.get("priority");
                dueDate = task.get("due-date");
            }

            let taskObj = 
                {
                    task_id: taskId,
                    subject: subject,
                    priority: priority,
                    dueDate: dueDate,
                    status: 'New',
                    percent: 50,
                    modified: Date.now()
                };

            return taskObj;

        }


  })();