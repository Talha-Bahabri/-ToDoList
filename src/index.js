import _ from 'lodash';
import createTask from './modules/task';
import defaultProject from './modules/defaultAddedProjects'
import createProject from './modules/project'
    
    let ggTask
const taskBtn = document.getElementById('createTaskButton');
taskBtn.addEventListener("click" , function(e) {
    ggTask=createTask();
    console.log(`the   btn clicked`)
 
})

const projectsDiv = document.getElementById('projectsDiv')
projectsDiv.appendChild(defaultProject()) 




// function overlayON() {
//     console.log(`###############overlay is on `)
//     document.querySelector(".overlay").style.display = "block";
//   }

//   function overlayOFF() { 
 
//     document.querySelector(".overlay").style.display = "none";
//   } 

  const addProjectBtn = document.querySelector('.addProjectBtn')
  addProjectBtn.addEventListener('click' , function(e) {
    
      console.log(`add is clicked`)
      createProject(ggTask)

  })