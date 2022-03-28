import _ from 'lodash';
import createTask from './modules/task';
import defaultProject from './modules/defaultAddedProjects'
import createProject from './modules/project'
    
    
const taskBtn = document.getElementById('createTaskButton');
taskBtn.addEventListener("click" , function(e) {
    let newTask=createTask();
    console.log(newTask)
    printTaskInBox(newTask);
 
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