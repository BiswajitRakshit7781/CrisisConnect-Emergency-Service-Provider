import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser';
import registered_users from './model/Schema_RegisteredUsers.js';
import transporter from './model/mail.js';
import mailOptions from './model/mailOptions.js';
import admin from './model/admin_schema.js';
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())
app.use(express.json());
app.use(bodyParser.json())
const client=mongoose.connect('mongodb://0.0.0.0:27017/CrisisConnect').then((val)=>{
    console.log('connected')
})  
app.get('/',(req,res)=>{
res.send("hello world!!")
})
const log_stat={email:false,password:false,name:null}
const admin_log_stat={email:false,password:false}

const set_logout=(obj)=>{
  obj.email=false
  obj.password=false
  obj.name=null
}
const set_logout_adm=(obj)=>{
  obj.email=false
  obj.password=false
}
app.post('/createAccount', async (req, res) => {
  let u_fullname=req.body.name
  let u_sex=req.body.sex
  let u_height=req.body.height
  let u_weight=req.body.weight
  let u_bloodgroup=req.body.bloodgroup
  let u_dob=req.body.dob
  let u_email=req.body.email
  let u_phoneno=req.body.phone
  let u_adharno=req.body.aadhar
  let u_homeaddress=req.body.address
  let u_password=req.body.password
  let new_user
  let sign_in_stat={email:false,email_unique:false,password:false}
  let existed_user= await registered_users.findOne({email:u_email})
  try{
  new_user=await new registered_users({fullname:u_fullname,sex:u_sex,height:u_height,weight:u_weight,bloodgroup:u_bloodgroup,dob:u_dob,email:u_email,phoneno:u_phoneno,adharno:u_adharno,homeaddress:u_homeaddress,password:u_password})
  await new_user.save()
  sign_in_stat.email=true
  sign_in_stat.email_unique=true
  sign_in_stat.password=true
  }
  catch(error){
    res.send(sign_in_stat)
  }
  if(existed_user==null){
  mailOptions['to']=u_email
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      res.send("error")
    }
    else
    console.log("sent successfully")
  })
  console.log(`${u_fullname} have been created`)
  res.send(sign_in_stat)
}
});
app.post("/login",async (req,res)=>{
  set_logout(log_stat)
  let log_email=req.body.email
  let log_pass=req.body.password
  let db_email= await registered_users.findOne({email:log_email})
  if(db_email!==null){
    log_stat.email=true
  if(db_email.password === log_pass){
    log_stat.password=true
    log_stat.name=db_email.fullname
  }
  else
    log_stat.password=false
  }
  res.send(log_stat)
})
app.get('/dashboard',(req,res)=>{
  res.send(log_stat)
})
app.get('/logout',(req,res)=>{
  set_logout(log_stat)
  res.send(log_stat)
})
app.post("/admin-login",async (req,res)=>{
  set_logout_adm(admin_log_stat)
  let a_email=req.body.email
  let a_password=req.body.password
  let admin_val=await admin.findOne({})
  if(admin_val!==null){
  if(a_email===admin_val.email){
    admin_log_stat.email=true
    if(a_password===admin_val.password){
      admin_log_stat.password=true
    }
  }
}
  res.send(admin_log_stat)
})
app.get("/admin-logout",(req,res)=>{
  set_logout_adm(admin_log_stat)
  res.send(log_stat)
})
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
