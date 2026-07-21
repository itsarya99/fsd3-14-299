import { EventEmitter } from "node:events";
const sayHi = (name) => {
  console.log(`${name} logged in`);
};
const task = new EventEmitter();
task.once("greet",()=>{
    console.log("System Started");
});
task.on("greet", sayHi);
task.on("greet", (name) => {
  console.log(`${name} starts working`);
});
task.on("greet",(name)=>{
    console.log(`${name} stopped working`);
});
task.emit("greet", "Rahul Singh");
console.log();
task.off("greet",sayHi);//must hae function name
task.emit("greet", "Arya Shukla");
console.log();//gap
task.emit("greet", "snehit");
task.once("exit",(name)=>{
    console.log(`system shut down by ${name}`);//execute only once
});
console.log();
task.emit("exit","Manager");//once
console.log("total listener",task.listenerCount("greet"));//total listener count krta task.off ke baad
task.removeAllListeners("greet");