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

    const listFile = fs.readFileSync('./listdata.json', 'utf-8')
    const list = JSON.parse(listFile) 
    list.push(newTask)
   
    fs.writeFile('./listdata.json', JSON.stringify(list), err =>{
        if (err) {
            console.log("error")
        }
    })


    
   res.redirect("/");

 })

 app.post('/removetask' ,(req,res) => {
    var completeTask = req.body.check
    // any task checked is uploaded into completetask 
    // if it is one, then it pushs to complete array and removes from task array
    // does the same in a forloop condition for multiple
    // then redirects back to home display 

    const listFile = fs.readFileSync('./listdata.json', 'utf-8')
    const list = JSON.parse(listFile) 

    if (typeof completeTask === "string"){
        list.splice(list.indexOf(completeTask),1)
    } else if (typeof completeTask === "object"){
        for (var i = 0; i <completeTask.length; i++){
            list.splice(list.indexOf(completeTask))
        }
    }

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


// things to note for the future 
// do all package installations from the jump
// all ejs files ( aka pages in simpler terms will be put in views)
// to install packages you need to stop running ?? 