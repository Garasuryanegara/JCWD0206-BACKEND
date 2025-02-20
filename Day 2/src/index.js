const express = require('express'); // init express
const dotenv = require('dotenv'); // init dotenv
const app = express(); //function express createServer
dotenv.config(); //untuk memanggil env
const PORT = process.env.PORT;
const routes = require('./routes/index');
const verify = require('./middlewares/verify');
const log = require('./middlewares/write-log');
//agar routes dapat membaca req.body json
app.use(express.json());

app.use(log, verify);

app.use('/users', routes.userRoutes);

app.use('/', (req, res) => res.send('EXPRESS API'));

app.listen(PORT, () => {
 console.log(`server is running on PORT ${PORT}`);
});
