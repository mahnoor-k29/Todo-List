
import inquirer from"inquirer"
import chalk from"chalk";
let todoList=[];
let conditions=true;
console.log(chalk.green("\n \t Wellcome to myWorld - Todo-List Application\n"));
while (conditions){
let addTask =await inquirer.prompt([
    {
name:"task",
type:"input",
message:"Enter your New Task",
    }
])
todoList.push(addTask.task);
console.log(`${addTask.task} Task added successfully`)

let addMoreTask =await inquirer.prompt([
    {
        name:"addMore",
        type:"confirm",
        message:"Do you want to add more task?",
        default:"False"

    }
]);

conditions = addMoreTask.addMore
}
console.log("Your updated Todo-list:",todoList);


// let main =async () => {
// while (conditions){
//     let option=await inquirer.prompt([
//         {
//             name:"choice",
//             type:"list",
//             message:"Select an option you want to do :",
//             choices:["Add Task ", "Delete Task", "Update Task", "view Todo-List","Exit"],
            
//         }
//     ]);
//     if(option.choice === "Add Task"){
//         await addTask()

//     }
//     else if (option.choice === "view Todo-List"){
//      await viewTask()
//     }

// }}
// let addTask= async () =>{
//     let newTask = await inquirer.prompt([
//         {
//             name :"task",
//             type:" input",
//             message:"Enter your new task:",
//         }
//     ]);
//     todoList.push(newTask.task);
//     console.log(`\n${newTask.task} task added successfully in Todo-List `);
// }
// let viewTask = () =>{
//     console.log(`\n Your Todo-List :\n`);
//     todoList.forEach((task,index)=>{
//         console.log(`${index} : ${task}`)
//     }
// )

// }

// main();