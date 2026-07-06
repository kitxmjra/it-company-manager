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

let taskForExp = ((team) => team.filter((developer) => developer.exp !== "Junior" && developer.status === "free"))

let busyTasks = (task) => {
  if (task.status === 'busy') {
    return true;
  } else {
    return false;
  }
};
//console.log(busyTasks(Tasks[0]));

let checkDeveloper = ((developer) => { if(developer.status === 'busy') {
  return `${developer.name} is busy`;
}
else {
  return `${developer.name} is ${developer.status}`;
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
    if (developer.freeTime === 0) {
      developer.status = 'totally exhausted';
    }

    if (developer.freeTime >= task.timeForTask) {
      developer.freeTime -= task.timeForTask;
      setTimeout(() => {
        developer.status = 'free';
      }, 2900);
    }

    return `${developer.name} performs the task ${task.taskName} and he had an ${developer.freeTime} left`;
  }


})
/*console.log(checkDeveloper(ITcompany[0]))
console.log(dataChange(ITcompany[0], Tasks[0]))
setTimeout(() => {
  console.log(checkDeveloper(ITcompany[0]));
}, 3000) */


let addDeveloper = ((team, name, exp, id) =>  {
  if(typeof name !== 'string' || name.trim() === '' || !isNaN(name)) {
    return `Invalid name`
  }
   const validExp = ['Junior', 'Middle', 'Senior', 'junior', 'middle', 'senior'];
  if(validExp.includes(exp)) {
    let newDev = {
      name: name,
      id: id,
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

//console.log(addDeveloper(ITcompany, "Dmitry", 'Junior', 4));


let deleteDeveloper = (team, id) =>
  team.filter((developer) => developer.id !== id);

//console.log(deleteDeveloper(ITcompany, 4));

let showBusyTask = ((tasks) => tasks.filter((task) => task.status === 'busy'))


//console.log(showBusyTask(Tasks))

