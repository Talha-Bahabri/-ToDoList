
const project = () => {
    
    let tasksOfProject = []; 
    const addTaskToProject = (task) => tasksOfProject.push(task);
    const getTask = (location) => console.log(`${}`)
    return { tasksOfProject, addTaskToProject};
}

export default function createProject() { 
    const newProject = project() ;
     
    return newProject
 }