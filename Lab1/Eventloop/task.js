const f1 = () => {
  console.log("f1 starts");
  f2();
  console.log("f1 running");
  console.log("f1 end");
};
const f2 = () => {
  console.log("f2 starts");
  f3();
  console.log("f2 running");
  console.log("f2 ends");
};
const f3 = () => {
  console.log("f3 starts");
  console.log("f3 running");
  console.log("f3 ends");
};
function main() {
  console.log("main");
  f1();

  console.log("end main");
}
main();
//synchronous call
//java script is synchronous and single threaded
//in asynchronous we use event loop to manage the call stack

/*
asynchronous using timers
set time out
set immediate
process.nectTick
setInternal
*/
