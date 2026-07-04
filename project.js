let ITcompany = [
  { name: 'Andrey', id: 0, exp: 'Middle', freeTime: 6, status: 'busy' },
  { name: 'Egor', id: 1, exp: 'Senior', freeTime: 7, status: 'free' },
  { name: 'Christian', id: 2, exp: 'Junior', freeTime: 7, status: 'free' },
  { name: 'Mia', id: 3, exp: 'Junior', freeTime: 1, status: 'busy' },
];

let Tasks = [
  { taskName: '"code-review"', timeForTask: 4, status: 'get ready' },
  { taskName: '"bug fix"', timeForTask: 2, status: 'busy' },
];
let taskForExp = ((company) => company.filter((developer) => developer.exp !== "Junior" && developer.status === "free"))

let busyTasks = (task) => {
  if (task.status === 'in progress') {
    return true;
  } else {
    return false;
  }
};
//console.log(busyTasks(Tasks[0]));

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
let dataChange = ((developer, task) => {
   if(busyTasks(task)) {
     return `Tasks not available`;
  }
  else {
    developer.status = 'busy';


    developer.freeTime -= task.timeForTask


     return `${developer.name} performs the task ${task.taskName} and he had an ${developer.freeTime} left`
  }


})
 //console.log(dataChange(ITcompany[2], Tasks[0]))


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

//console.log(addDeveloper(ITcompany, "Dmitry", 'Junior'));


let deleteDeveloper = (team, id) =>
  team.filter((developer) => developer.id !== id);

//console.log(deleteDeveloper(ITcompany, 3));

let showBusyTask = ((tasks) => tasks.filter((task) => task.status === 'busy'))


//console.log(showBusyTask(Tasks))

