import _ from 'lodash';
import createTask from './modules/task';
    
const taskBtn = document.getElementById('createTaskButton');
taskBtn.addEventListener("click" , function(e) {
    createTask();
    console.log(`the   btn clicked`)
 
})