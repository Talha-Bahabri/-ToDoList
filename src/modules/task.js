
const title = (titleName)  => {  
    return {titleName}
}

const description = (descriptionName)  => { 
    return {descriptionName }
}
const date = (dateName)  => { 
    return {dateName }
}
const priority = (priorityName)  => { 
    return {priorityName };
}

// const dinner = title(`dinner`);
// console.log(dinner.titleName)


const task = (titlePut,descriptionPut,datePut,priorityPut) => {
    // const assginInfos = (titlePut) => {
        
    // let titleOfTask = title(titlePut);
    // return titleOfTask
    // }

    let titleOfTask = title(titlePut);
    let descriptionOfTask = description(descriptionPut)
    let dateOfTask = date(datePut)
    let priorityOfTask = priority(priorityPut)

    return { titleOfTask, descriptionOfTask, dateOfTask, priorityOfTask}
}


let test = prompt("title");
let test2 = prompt("desc");
let test3 = prompt("date");
let test4 = prompt("priority");
const testTask = task(test,test2,test3,test4) ;

console.log(testTask)
console.log(testTask.titleOfTask)
console.log(testTask.descriptionOfTask)
console.log(testTask.dateOfTask)
console.log(testTask.priorityOfTask)

export default function createTask() {
    return testTask;
}


