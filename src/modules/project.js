const project= (task) => {
    
    let titleOfTask = title(titlePut);
    // let descriptionOfTask = description(descriptionPut)
    // let dateOfTask = date(datePut)
    // let priorityOfTask = priority(priorityPut)

    // return { titleOfTask, descriptionOfTask, dateOfTask, priorityOfTask}
}

export default function createProject() {
    let test = prompt("title");
    let test2 = prompt("desc");
    let test3 = prompt("date");
    let test4 = prompt("priority");
    const testTask = task(test,test2,test3,test4) ;
    
    console.log(testTask) 
    
    return testTask
 }