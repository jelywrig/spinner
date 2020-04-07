// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// // ... fill in the rest yourself ...
// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r \n');
// }, 1100);

let delay = 100;
let spinnerChars = ['|', '/', '-','\\','|','\n'];

for(const char of spinnerChars){
  setTimeout(()=> {
    process.stdout.write('\r' + char);
  }, delay += 200);
}