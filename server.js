//Application Programming Interface//
//지금 화면에 띄우는 건 HTTP 통신//
const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false,}))
app.set('view engine','html')
nunjucks.configure('views',{
    express:app,
})

app.get('/',(req,res)=>{
    res.render('index')
})


app.get('/send2',(req,res)=>{
    res.render('send2',{
        address2:req.query.address2
    })
})


app.post('/send',(req,res)=>{

    let addressNumber = req.body.addressNumber
    let address1 = req.body.address1
    let address2 = req.body.address2
    res.render('send',{
        addressNumber:addressNumber,
        address1:address1,
        address2:address2

    })
})


app.get('/login', (req,res) => {
    
    let {userid,userpw} = req.query
    console.log(userid,userpw)

    
    res.setTimeout(1000,()=>{
        res.send(`GET OK ${userid}/${userpw}`)
    })
        
})

app.post('/login', (req,res) => {
    
    let {userid,userpw} = req.body
    console.log(userid,userpw)
    res.send(`POST OK ${userid}/${userpw}`)
    
})

app.listen(3000,()=>{
    console.log('server start port 3000')
})

