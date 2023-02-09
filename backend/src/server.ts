import express from 'express';
import * as dotenv from 'dotenv' 
dotenv.config()
import routes from './routes/index';
const app = express();
const bodyparser = require('body-parser')
const PORT = process.env.PORT;

app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.get('/',(req,res)=>{
    res.send('Hello Node Js')
})


app.use('/', routes)

app.listen(PORT,() => {
console.info(`server running on port ${PORT}`)
})

