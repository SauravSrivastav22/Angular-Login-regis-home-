const express = require('express');
const mysql = require('mysql2')

const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json())
const db = mysql.createConnection({
    host:'localhost',
    password:"2206",
    database:"finally",
    user:"root"
})
db.connect((err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('Connect');
    }
})


app.post('/api/postData' , (req,res)=>{
    const {name ,email ,pass} = req.body;
    db.query("INSERT INTO users (name, email , pass) values (?,?,?)",[name,email,pass] , (err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send("Registered")
        }
    })
})
app.post('/api/login' , (req,res)=>{
    const { email ,pass} = req.body;
    db.query("SELECT * FROM users where email = ?",[email] , (err,result)=>{
        if(err){
            console.log(err);
        }else{
            if(result.length === 0){
                return res.send("User not found");
            }else{
                if(pass === result[0].pass){
                    return res.send("Success");
                }else{
                    return res.send("Password incorrect")
                }
            }
        }
    })
})

app.post('/api/login' , (req,res)=>{
    const { email ,pass} = req.body;
    db.query("SELECT * FROM users where pass = ?",[pass] , (err,result)=>{
        if(err){
            console.log(err);
        }else{
            if(result.length === 0){
                return res.send("Incorrect Password");
            }else{
                if(email === result[0].email){
                    return res.send("Success");
                }else{
                    return res.send("Incorrect Password")
                }
            }
        }
    })
})



app.listen(4600 , ()=>{
    console.log('Server is running on Port 4600');
})