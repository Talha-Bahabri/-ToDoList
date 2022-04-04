import _ from 'lodash';
import createTask from './modules/task';
import defaultProject from './modules/defaultAddedProjects'
import createProject from './modules/project'
    
// var tasksArray = []
    var project1 = createProject("nameIsgiven") ; 
    var selectedProject = project1;
    
const taskBtn = document.getElementById('createTaskButton');
taskBtn.addEventListener("click" , function(e) {
    let newTask=createTask(); 
    console.log(`project name: ${project1.projectName} .`); 
    console.log(`project1 Array before adding is : ${project1.tasksOfProject}`)
    project1.addTaskToProject(newTask)
     console.log(`project1 Array AFTER adding is : ${JSON.stringify(project1.tasksOfProject)}`)

    const newTaskP = document.createElement('p')
    newTaskP.textContent = `${JSON.stringify(newTask.titleOfTask)}`
    newTaskP.classList.add('taskStyle')
     
    printTaskInBox(newTaskP); 
})



const projectsDiv = document.getElementById('projectsDiv')
projectsDiv.appendChild(defaultProject())  
// projectsDiv.appendChild(defaultProject())  
 
const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener("click" , function(e) {

        let projectNameInput = prompt("project name ?")
        console.log(`adProject ispressed and it's name  `)
        
        const newProjectP = document.createElement('p')
        newProjectP.textContent = `${JSON.stringify(projectNameInput)}`
        newProjectP.classList.add('taskStyle')

        printProjectInBox(newProjectP)

})

function printTaskInBox(task) {
    const tasksDiv = document.getElementById('tasks-div')
    
    tasksDiv.appendChild(task)
}

function printProjectInBox(project) {
    const projectsDiv = document.getElementById('projectsDiv')
    
    projectsDiv.appendChild(project)
}