const express = require('express');
const app = express();
const router = require('./routes/routing');
// const errorLogger = require('./utilities/errorLogger');
// const requestLogger = require('./utilities/requestLogger');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const dotenv = require('dotenv');
// dotenv.config();


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
// app.use(requestLogger);
app.use('/',router);
// app.use(errorLogger);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ ok: true });
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`App listening on ${PORT}`));
