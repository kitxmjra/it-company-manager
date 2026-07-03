let ITcompany = [
  { name: "Andrey", exp: 'Middle', freeTime: 6, status: 'busy' },
  { name: "Egor", exp: 'Senior', freeTime: 4, status: 'free' },
  { name: "Christian", exp: 'Junior', freeTime: 7, status: 'free' },
  { name: "Mia", exp: 'Junior', freeTime: 1, status: 'busy' }
];

let Tasks = [
  { taskName: "code-review", timeForTask: 4, status: 'get ready' },
  { taskName: "bug fix", timeForTask: 2, status: 'in progress' }
];
let taskForExp = ((company) => company.filter((developer) => developer.exp !== "Junior" && developer.status === "free"))

let busyTasks = (task) => {
  if (task.status === 'in progress') {
    return `Sorry, the task ${task.taskName} is already in progress!`;
  } else {
    return `Task ${task.taskName} is free to take`;
  }
};
// console.log(busyTasks(Tasks[1]));

let checkDeveloper = ((developer) => { if(developer.status === 'busy') {
  return `${developer.name} is in progress`;
}
else {
  return `${developer.name} is not in progress`;
}
})

// console.log(checkDeveloper(ITcompany[1]));

let salaryForDeveloper = ((developer) => { if (developer.freeTime <= 3) {
  return `${developer.name} good job, salary coming soon`
}
else {
  return `${developer.name} great, but you still need to work a little bit more`
  }
})
// console.log(salaryForDeveloper(ITcompany[3]));

// TODO: add task checking using 'busyTasks' before execution
let dataChange = ((developer, task) => {
  if(developer.freeTime >= task.timeForTask && developer.status === 'free') {
    developer.status = 'busy';


    developer.freeTime -= task.timeForTask;


    return `${developer.name} performs the task ${task.taskName} and he had an ${developer.freeTime} left`;

  }
  else {
    return `${developer.name} busy`
  }


})
//  console.log(dataChange(ITcompany[1], Tasks[1]))


let addDeveloper = ((team, name, exp) =>  {
  if(typeof name !== 'string' || name.trim() === '' || !isNaN(name)) {
    return `Invalid name`
  }
   const validExp = ['Junior', 'Middle', 'Senior', 'junior', 'middle', 'senior'];
  if(validExp.includes(exp)) {
    let newDev = {
      name: name,
      exp: exp,
      status: 'free',
      freeTime: 8
    };
    team.push(newDev);
    return `Welcome, ${name}!`
  }
  else {
    return `Employee must be Junior, Middle or Senior`
  }

})

console.log(addDeveloper(ITcompany, "Dmitry", 'Junior'));

