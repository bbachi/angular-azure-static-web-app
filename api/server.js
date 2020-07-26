const express = require('express');
const app = express(),
      randomId = require('random-id'),
      bodyParser = require("body-parser");
      port = 3080;

let tasks = [];

const idlen = 10;

app.use(bodyParser.json());
// app.use(express.static(process.cwd()+"/my-app/dist/angular-nodejs-example/"));

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/task', (req, res) => {
  const task = req.body.task;
  const id = randomId(idlen);
  task.id = id;
  tasks.push(task);
  res.json({status:true, message: `task ${task.id} addedd`});
});

app.delete('/api/task/:id', (req, res) => {
  console.log('deleting task:::', req.params.id);
  const id = req.params.id;
  tasks = tasks.filter(tsk => tsk.id !== id)
  res.json({status:true, message: `task ${id} deleted`});
});

app.put('/api/task', (req, res) => {
  const task = req.body.task;
  tasks = tasks.map(tsk => {
      if(tsk.id === task.id) tsk = task;
      return tsk;
  });
  res.json({status:true, message: `task ${task.id} edited`});
});

app.get('/', (req,res) => {
  // res.sendFile(process.cwd()+"/my-app/dist/angular-nodejs-example/index.html")
  res.send('API Works !!!')
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});