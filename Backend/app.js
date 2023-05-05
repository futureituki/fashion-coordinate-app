//expressモジュールを使えるように設定
const express = require('express')
const app = express()
const session = require('express-session')
const  { engine } = require ('express-handlebars');
const passport = require('passport')
require('./config/passport') (passport)
const user = require('./routers/userRoutes')
const auth = require('./routers/authRoutes');
const connectDB = require('./config/db')

connectDB()
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
app.use(passport.initialize())
app.use(session({ 
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  cookie: { secure: true }
})) 
app.use(passport.session())
app.engine('.hbs', engine({defaultLayout:'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(user)
app.use(auth)

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
cookie: { secure: true }
}) ) 

app.get('/', (req, res) => console.log('Hello World!'))

//サーバーを起動したら、リクエストを8080番ポートで待ち受ける設定。
app.listen(8000, () => console.log('Example app listening on port'))