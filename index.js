var express = require('express')
var app = express();
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')

var task = ["go fishing", "ace netcentric"]
var complete = ["Finish project 1"]

// takes us to start of url 



 // post route to add a task 
 app.post('/addtask', (req,res) => {
   var newTask = req.body.newtask
    //adds new task to array stored on server side
   task.push(newTask);
    //redirects back to home page 
   res.redirect("/");

 })

 app.post('/removetask' ,(req,res) => {
    var completeTask = req.body.check
    // any task checked is uploaded into completetask 
    // if it is one, then it pushs to complete array and removes from task array
    // does the same in a forloop condition for multiple
    // then redirects back to home display 
    if (typeof completeTask === "string") {
        complete.push(completeTask);

        task.splice(task.indexOf(completeTask),1)
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++){
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]),1);
        }
    }
    res.redirect("/");
 })


// displays all tasks and completed tasks. 
app.get('/', (req, res) =>{
    res.render("index",{task: task, complete: complete});
 }) 


// listens at whatever port designated to show what is built of application 
app.listen(5600);


// things to note for the future 
// do all package installations from the jump
// all ejs files ( aka pages in simpler terms will be put in views)
// to install packages you need to stop running ?? 