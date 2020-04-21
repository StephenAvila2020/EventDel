// In the "Contact Me" section, the user should see a form with two inputs: one for the user's name and one for their message. They should also see a button that says "Send".

function buildTaskForm(){
    return ` <form>
    <input type="text" placeholder="UserName" />
    <input type="text" placeholder="Message" />
</form>
<button id="new-task-submit-btn">Send</button>
`
    
   
}

function buildSingleTask(nameOfTask) {
    return `<section>
    <p>Your message has been sent.F-U</p>
    <p>${nameOfTask}</p>
    </section>`
}