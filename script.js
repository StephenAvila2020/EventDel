document.querySelector("#Home").addEventListener("click", function () {
    document.querySelector("#page-content").innerHTML = `<h1>Home</h1><p>"Lewis Capaldi Loves This"</p>`
})

document.querySelector("#page-content").addEventListener("click", function (){
    if (event.target.id === "new-task-submit-btn") {
        console.log("You sent a message");
        const taskValue = document.querySelector("#new-task-submit-btn").value;
        console.log("this should be the value of the input", taskValue);
        // print task value to the DOM
        document.querySelector("#page-content").innerHTML += buildSingleTask(taskValue)
    }
})

document.querySelector("#Contact-Me").addEventListener("click", function () {
    const pageContentContainer = document.querySelector("#page-content");
    document.querySelector("#page-content").innerHTML = `<h1>Contact Me</h1> <p>"Lewis Capaldi Loves This"</p>`;
    pageContentContainer.innerHTML += buildTaskForm();
})

document.querySelector("#About-Me").addEventListener("click", function () {
    document.querySelector("#page-content").innerHTML = `<h1>About Me</h1><p>"Lewis Capaldi Loves This"</p>`
})

document.querySelector("#Projects").addEventListener("click", function () {
    document.querySelector("#page-content").innerHTML = `<h1>Projects</h1><p>"Lewis Capaldi Loves This"</p>`
})