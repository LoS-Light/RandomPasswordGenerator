import express from 'express';
import { engine } from 'express-handlebars';
import { PasswordGeneratorRouter } from './routers/password-generator.router.js';

const port = process.env.PORT || 3000;
const staticRes = 'web';
const app = express();

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static(staticRes));
app.use(express.urlencoded({ extended: true }));
app.use(PasswordGeneratorRouter);

app.listen(port, () => console.log(`-> Listening on ${port}`));