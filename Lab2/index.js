import { writeFile, readFile, appendFile } from "fs/promises";

// await writeFile("stud.txt", "Ravikant Singh\nRollNo:82");
// console.log("file written");
// const data = await readFile("stud.txt", "utf-8");
// console.log("file contents: ${data}");

const addContent = async (fname, content) => {
  await writeFile(fname, content);
  console.log("file written");
};
const readContent = async (fname) => {
  const data = await readFile(fname, "utf-8");
  return data;
};
const appendData = async (fname, content) => {
  await appendFile(fname, "\n" + content);
  console.log("file appended");
};
await addContent("notes.txt", "FS is easy in JS");
console.log("content\n", await readContent("notes.txt"));
await appendData("notes.txt", "it can read and write files");
console.log("content\n", await readContent("notes.txt"));
