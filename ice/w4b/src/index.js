import Component from "./Component.js";
<<<<<<< HEAD:ice/w4/src/index.js
import Task from "./task.js";
=======
import Task from "./Task.js";
>>>>>>> 331e79c6f14e2fb803807a9a5574f9290a96ee52:ice/w4b/src/index.js
function runOnLoad()
{
    
    let element = document.createElement("div");
    element.id = "Test";
    document.body.appendChild(element);
    // console.log(x);
    var comp = new Component(document.getElementById("addTask"));
    let element2 = document.createElement("div");
    element2.innerHTML = comp.render();
    console.log("Hello World truly");
    let firstTask= new Task(
        {
            done:false,
            content:"This is a task"
        }
    )
    let container = document.getElementById("container")
    let task = document.createElement("div");
    task.innerHTML =firstTask.render();
    //element2.innerHTML = comp.render();
}


window.addEventListener("DOMContentLoaded", runOnLoad);