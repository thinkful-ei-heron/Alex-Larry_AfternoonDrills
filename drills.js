/*function repeat(fn, n) {
  for(i=0; i < n; i++) {
    fn();
  }
}
function hello() {
  console.log('Hello World');
}
function goodbye() {
  console.log('Goodbye World');
}

function filter(myNames, fn) {
  let newNames = [];
  let i = 0;
  myNames.forEach(function(data) {
    if(fn(data.charAt(0)) === true) {
      newNames[i] = data;
      i++;
    }
  })
  return newNames;
}

function hazardWarningCreator (typeOfWarning) {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const snowWarning = hazardWarningCreator('Lots of Snow');
const tsunamiWarning = hazardWarningCreator('Big Huge Waves');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
rocksWarning('14th Ave and Crescent');

tsunamiWarning('Right behind you');
tsunamiWarning('On your left');
tsunamiWarning('A few feet in front of you');

snowWarning('Cold Lane and Snow Place');
snowWarning('Forest Blvd and Mountainview');
snowWarning('All over the place');


function noNegatives(steps) {
  return steps.concat.apply([], steps).filter(el => el >= 0);
}

function totalSteps(mySteps) {
  let newArray;
  let total = 0;
  allSteps = mySteps.concat.apply([], steps);
  newArray = allSteps.map(x => Math.abs(x));
  newArray.forEach(function(step){
    total += step;
  });
  return total;
}

function totalMovement(mySteps) {
  let numberOfSteps = 0;
  let i = 1;
  mySteps.forEach(function(step){
    numberOfSteps = Math.abs(step[0]) + Math.abs(step[1]);
    console.log(`Movement #${i}: ${numberOfSteps} steps`);
    i++;
  });
}
*/


/*function secretMessage(code) {
  let codeArray = code.split(" ");
  let newArray = '';
  codeArray.forEach(function(word){
    if(word.length === 3){
      newArray += ' ';
    }
    else{
      newArray += word.charAt(word.length-1).toUpperCase();
    }
  });
  console.log(newArray);
}*/

function secretMessage(code) {
  let codeArray = code.split(' ');
  //let finalCode = '';
  //let word = '';
  let finalCode = codeArray.reduce(function(acc, e){
    if(e.length === 3){
      return acc += ' ';
    }
    else{
      return acc += e.charAt(e.length-1).toUpperCase();
    }
  }, (str =''));
  console.log(finalCode);
}
let code = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
secretMessage(code);