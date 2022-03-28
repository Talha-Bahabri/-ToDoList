import _ from 'lodash';
import createTask from './modules/task';
import defaultProject from './modules/defaultAddedProjects'
import createProject from './modules/project'
    
var tasksArray = []
    
const taskBtn = document.getElementById('createTaskButton');
taskBtn.addEventListener("click" , function(e) {
    let newTask=createTask();
    
    const newTaskP = document.createElement('p')
    newTaskP.textContent = `${JSON.stringify(newTask.titleOfTask)}`
    newTaskP.classList.add('taskStyle')
    
    console.log(newTask.titleOfTask)
    printTaskInBox(newTaskP);
 
})

function printTaskInBox(task) {
    const tasksDiv = document.getElementById('tasks-div')
    
    tasksDiv.appendChild(task)
}

const projectsDiv = document.getElementById('projectsDiv')
projectsDiv.appendChild(defaultProject())  
// projectsDiv.appendChild(defaultProject())  
 


// function overlayON() {
//     console.log(`###############overlay is on `)
//     document.querySelector(".overlay").style.display = "block";
//   }

//   function overlayOFF() { 
 
//     document.querySelector(".overlay").style.display = "none";
//   } 



// let projectsArray = [];

//   const addProjectBtn = document.querySelector('.addProjectBtn')
//   addProjectBtn.addEventListener('click' , function(e) {

//       let projectName = prompt("project name");
//       projectsArray.push(createProject())
//       console.log(`add is clicked`)
//     //   ggProject = createProject()
//     //   ggProject.addTaskToProject(ggTask)
//       console.log(`here is the ggProject =`)
//       console.log(`${projectsArray[0]}`)
//     //   console.log(ggProject)
//   })