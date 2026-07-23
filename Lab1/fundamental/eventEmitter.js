import { EventEmitter} from "node:events";

const task = new EventEmitter();

const sayHi = (name) => {
    console.log(Logged in, ${name}!);
};

task.on('greet',sayHi);

task.on('greet', () => {
    console.log("Logged out")
});

task.once("greet", () => {
    console.log("system started...")
});

task.off("exit", () => {
    console.log(System is shutting down by ${name});
})

task.emit('greet','Astha Shukla');
//task.emit('greet','khushi');
//task.emit('greet','Diu');