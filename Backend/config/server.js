//expressモジュールを使えるように設定
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express')
const mongoose = require('mongoose')
//expressモジュールを利用しアプリケーションオブジェクトappを作成
const app = express()
const user = require('../routers/userRoutes')
app.use(user)
// データベース接続 //
// DB接続設定
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@fashion-db.n9wpwxr.mongodb.net/?retryWrites=true&w=majority`).then(()=>{
  console.log('DB connected')
})
// HTTPgetメソッドでアクセスしたら、'Hello World!'と表示される設定。
app.get('/', (req, res) => console.log('Hello World!'))

//サーバーを起動したら、リクエストを8080番ポートで待ち受ける設定。
app.listen(8000, () => console.log('Example app listening on port'))