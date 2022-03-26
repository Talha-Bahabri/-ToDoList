import _ from 'lodash';
import createTask from './modules/task';
import defaultProject from './modules/defaultAddedProjects'
    
const taskBtn = document.getElementById('createTaskButton');
taskBtn.addEventListener("click" , function(e) {
    createTask();
    console.log(`the   btn clicked`)
 
})

const projectsDiv = document.getElementById('projectsDiv')
projectsDiv.appendChild(defaultProject()) 