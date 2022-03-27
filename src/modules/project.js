
const project = (name) => {
    let projectName = name ;
    let tasksOfProject = []; 
    const addTaskToProject = (task) => tasksOfProject.push(task);
    // const getTask = (location) => console.log(`${}`)
    return { tasksOfProject, addTaskToProject, projectName};
}

export default function createProject() { 
    const newProject = project() ;
     
    return newProject
 }