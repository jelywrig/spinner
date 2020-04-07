let delay = 100;
let spinnerChars = ['|', '/', '-','\\','|','\n'];

for(const char of spinnerChars){
  setTimeout(()=> {
    process.stdout.write('\r' + char);
  }, delay += 200);
}