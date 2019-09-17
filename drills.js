function repeat(fn, n) {
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