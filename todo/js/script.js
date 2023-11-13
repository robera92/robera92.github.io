(function () {

    const storageKey = 'todo_items';

    load_tasks();

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
                mark_task_completed(element);
            });
        }



    // functions
    function add_new_task(){
        
            const formData = new FormData(document.getElementById("addTaskForm"));
      
            let taskObj = crete_task_obj(formData);
            save_task(taskObj);
            append_task(taskObj);
       
    }

    function save_task(task){

        let all_tasks = JSON.parse(localStorage.getItem(storageKey));
        if(all_tasks === null){
            all_tasks = [];
        }
        all_tasks.push(JSON.stringify(task));
   
        localStorage.setItem(storageKey, JSON.stringify(all_tasks));

    }

    function crete_task_obj(task, shouldUpdate = false){

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
                    percent: 0,
                    modified: Date.now()
                };

            return taskObj;
    

    }


    function load_tasks(){

        let all_tasks = JSON.parse(localStorage.getItem(storageKey));
        
        if(all_tasks === null){
            return [];
        }

        for (const task of all_tasks) {
            append_task(task);
        }

    }



    function append_task(task){
       
        let tableBody = document.querySelector('.app tbody');
        let trItem = document.querySelector('.app tbody tr');

        if(typeof task !== 'object'){
            task = JSON.parse(task);
        }
        let newTrItem = trItem.cloneNode();
        newTrItem.classList.remove('d-none');
        newTrItem.setAttribute('data-id', task.task_id);

        newTrItem.innerHTML = trItem.innerHTML;

        for (const node of newTrItem.childNodes) {
            if(node.classList != null){
                if(node.classList.contains('subject') ){
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
                      
                 }
            }
        }

        tableBody.appendChild(newTrItem);

    }


    function remove_task(node){

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

    function mark_task_completed(node){

        let parentNode = node.parentNode.parentNode;
        let itemId = parentNode.getAttribute("data-id");

        let all_tasks = JSON.parse(localStorage.getItem(storageKey));

        for (let i = 0; i < all_tasks.length; i++) {
            
            let taskObj = JSON.parse(all_tasks[i]);
            if(taskObj.task_id == itemId){
                taskObj.status = 'Complete';
                all_tasks[i] = JSON.stringify(taskObj);
            }

          }

          localStorage.setItem(storageKey, JSON.stringify(all_tasks));



    }




  })();