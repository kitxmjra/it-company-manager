let ITcompany = [
  { name: 'Andrey', id: 0, exp: 'Middle', freeTime: 6, status: 'busy' },
  { name: 'Egor', id: 1, exp: 'Senior', freeTime: 7, status: 'free' },
  { name: 'Christian', id: 2, exp: 'Junior', freeTime: 7, status: 'free' },
  { name: 'Mia', id: 3, exp: 'Junior', freeTime: 0, status: 'busy' },
];

let Tasks = [
  { taskName: '"code-review"', timeForTask: 4, status: 'get ready' },
  { taskName: '"bug fix"', timeForTask: 2, status: 'busy' },
];

let taskForExp = ((team) => team.filter((developer) => developer.exp !== "Junior" && developer.status === "free"))

let busyTasks = ((task) => task.status === 'busy');

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
  if (developer.freeTime === 0) {
    developer.status = 'totally exhausted';
    return `${developer.name} is totally exhausted`;
  }
    if (busyTasks(task)) {
      return `Tasks not available`;
    } else {
      developer.status = 'busy';
      task.status = 'busy';

      if (developer.freeTime >= task.timeForTask) {
        developer.freeTime -= task.timeForTask;
        setTimeout(() => {
          if(developer.freeTime === 0) {
            developer.status = 'totally exhausted'
          }
          else {
          developer.status = 'free';
          }
          task.status = 'free';
        }, 2900);
      }
    }
  return `${developer.name} performs the task ${task.taskName} and he has ${developer.freeTime} left`;


})

/*console.log(checkDeveloper(ITcompany[1]))
console.log(dataChange(ITcompany[1], Tasks[0]))
setTimeout(() => {
  console.log(checkDeveloper(ITcompany[1]));
}, 3000)*/


let addDeveloper = ((team, name, exp) =>  {
  if(typeof name !== 'string' || name.trim() === '' || !isNaN(name)) {
    return `Invalid name`
  }
   const validExp = ['Junior', 'Middle', 'Senior', 'junior', 'middle', 'senior'];
  if(validExp.includes(exp)) {
    let newDev = {
      name: name,
      id: team.length,
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
//console.log(addDeveloper(ITcompany, 'Vika', 'Senior'));


let deleteDeveloper = (team, id) =>
  team.filter((developer) => developer.id !== id);
ITcompany = deleteDeveloper(ITcompany, 4)

//console.log(ITcompany);

let checkEachDeveloper = (team, id) =>
  team.find((developer) => developer.id === id)

//console.log(checkEachDeveloper(ITcompany, 4));

let showBusyTask = ((tasks) => tasks.filter((task) => task.status === 'busy'))

//console.log(showBusyTask(Tasks))
