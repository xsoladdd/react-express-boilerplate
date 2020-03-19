const express = require('express');
const app = express();
const port = 5000;

app.get('/api/customers', (req,res) => {
    const customers = [
      {
        id:1,
        firstName: 'john',
        lastName: 'doe'
      },
      {
        id:2,
        firstName: 'foo',
        lastName: 'bar'
      },
      {
        id:3,
        firstName: 'Hello',
        lastName: 'World'
      },
      {
        id:4,
        firstName: 'mik',
        lastName: 'mak'
      },
    ];
  res.json(customers);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
