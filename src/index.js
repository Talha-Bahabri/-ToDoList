import _ from 'lodash';
import createTask from './modules/task';
    
const btnTest = document.getElementById('testButton');
btnTest.addEventListener("click" , function(e) {
    createTask();
    console.log(`the   btn clicked`)
 
})