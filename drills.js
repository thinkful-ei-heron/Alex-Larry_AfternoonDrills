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
}*/

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


