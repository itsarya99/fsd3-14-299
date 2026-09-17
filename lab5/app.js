import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Hello, World!");
});
app.get(`/about`, (req, res) => {
  res.send("We are btech students");
});

app.post(`/login`,(req,res)=>{
  res.send({msg:'user login'})
});

app.put('/user/update/1',(req,res)=>{
  res.send({msg:'user updated'})
  
  });
app.delete('/users/1',(req,res)=>{
  res.send({msg:'user deleted'})

});
app.use((req, res)=>{
  res.status(404).send("Page not found");
});
app.listen(3000, () => console.log("Server is running on port 3000"));
