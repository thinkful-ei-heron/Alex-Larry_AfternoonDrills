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