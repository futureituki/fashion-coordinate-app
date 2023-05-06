//expressモジュールを使えるように設定
const express = require('express')
const app = express()
const session = require('express-session')
const cors = require('cors')
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
app.use(session({ 
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    maxAge: 1000 * 60 * 60 * 24,
})) 
app.use(passport.initialize())
app.use(passport.session())
app.use(cors({
  origin: 'http://localhost:3002', //アクセス許可するオリジン
  credentials: true, //レスポンスヘッダーにAccess-Control-Allow-Credentials追加
  optionsSuccessStatus: 200 //レスポンスstatusを200に設定
}))
app.engine('.hbs', engine({defaultLayout:'main', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(auth)
app.use(user)

app.get('/', (req, res) => console.log(req.session))

//サーバーを起動したら、リクエストを8080番ポートで待ち受ける設定。
app.listen(8000, () => console.log('Example app listening on port'))