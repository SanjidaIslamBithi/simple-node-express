const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())


const port = 5000;

app.get('/', (req, res) => {
  res.send('helo from my second node server,wow,now what to dohelo');
});

const users = [
  { id: 0, name: 'sanjida', email: 'sanjida@gmail.com', phone: '017888888888' },
  { id: 1, name: 'sam', email: 'sanjida@gmail.com', phone: '017888888888' },
  { id: 2, name: 'silsila', email: 'sanjida@gmail.com', phone: '017888888888' },
  { id: 3, name: 'sany', email: 'sanjida@gmail.com', phone: '017888888888' },
  { id: 4, name: 'siky', email: 'sanjida@gmail.com', phone: '017888888888' },
];

app.get('/users', (req, res) => {
  const search = req.query.search;
  //use query parameter
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});
// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

//dynamic api
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
  // console.log(req.params.id);
});
app.get('/fruits', (req, res) => {
  res.send(['mango', 'orange', 'bannana', 'apple']);
});
app.get('/fruits/mangoes/fazli', (req, res) => {
  res.send('yemmy yemmy tok amm');
});

app.listen(port, () => {
  console.log('listening to port', port);
});
