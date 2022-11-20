var express = require('express')
var app = express();
var bodyParser = require("body-parser");
const fs = require("fs");
app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine', 'ejs')




// takes us to start of url 



 // post route to add a task 
 app.post('/addtask', async (req,res) => {
   var newTask = req.body.newtask //gets new task
    console.log("newTask")     

    const listFile = fs.readFileSync('./listdata.json', 'utf-8')  // reads existing file 
    const list = JSON.parse(listFile) 
    list.push(newTask) // adds new task to array 
   
    fs.writeFile('./listdata.json', JSON.stringify(list), err =>{ 
        if (err) {
            console.log("error")
        }
    }) // pushes array and writes it to file 


    
   res.redirect("/");

 })

 app.post('/removetask' ,(req,res) => {
    var completeTask = req.body.check // gets task/tasks to remove 
    

    const listFile = fs.readFileSync('./listdata.json', 'utf-8') // reads file 
    const list = JSON.parse(listFile) 
// finds task/tasks in array to remove then removes them
    if (typeof completeTask === "string"){
        list.splice(list.indexOf(completeTask),1)
    } else if (typeof completeTask === "object"){
        for (var i = 0; i <completeTask.length; i++){
            list.splice(list.indexOf(completeTask))
        }
    }
//writes new array to the file 
    fs.writeFile('./listdata.json', JSON.stringify(list), err =>{
        if (err) {
            console.log("error")
        }
    })
    
    
    res.redirect("/");
 })


// displays all tasks and completed tasks. 
app.get('/',  async (req, res) =>{
    console.log("Hello index")
  // ReadData() this works but is this the best way.... 

  const listFile = fs.readFileSync('./listdata.json', 'utf-8')
  const list = JSON.parse(listFile)
  
   
    res.render("index" ,{list: list});
 }) 


// listens at whatever port designated to show what is built of application 
app.listen(5600);


// Lessons I learned
// do all package installations from the jump
// all ejs files ( aka pages in simpler terms will be put in views)
// to install packages you need to stop running ?? 
// easier to do less files and more in each to be honest, the more files made it more 
// youtube is sometimes your best friend, documentation lowkey is easier to decioher sometimes
// break it up into parts, routes, ejs templates, reading/writing, then combine it all 
// little steps and jumps help make sure there's no errors on the way 
