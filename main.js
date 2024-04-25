let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 30; 

if (runnersAge >= 18 && registeredEarly){
  raceNumber += 1000;
  console.log(`Race Number : ${raceNumber} your race starts at 9:30 am`);
} else if (runnersAge >= 18 && !registeredEarly){
  console.log(`Race Number : ${raceNumber} your race starts at 11:00 am`)
} else if (runnersAge < 18){
  console.log(`Race Number : ${raceNumber} your race starts at 12:30 pm `);
}
