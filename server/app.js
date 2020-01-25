const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const apiRouter = express.Router();
const datos = require('./data/db.json');

apiRouter.route('/estudiantes')
  .get((req, res) => {
    res.json(datos);
});

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
