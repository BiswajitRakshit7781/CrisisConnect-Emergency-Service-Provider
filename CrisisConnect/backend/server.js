import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser';
import registered_users from './model/Schema_RegisteredUsers.js';
import transporter from './model/mail.js';
import mailOptions from './model/mailOptions.js';
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
  let new_user=await new registered_users({fullname:u_fullname,sex:u_sex,height:u_height,weight:u_weight,bloodgroup:u_bloodgroup,dob:u_dob,email:u_email,phoneno:u_phoneno,adharno:u_adharno,homeaddress:u_homeaddress,password:u_password})
  await new_user.save()
  mailOptions['to']=u_email
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){

      console.log("error")
    }
    else
    console.log("sent successfully")
  })
  console.log(`${u_fullname} have been created`)
  res.send(`${u_fullname} have been created`)
});


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
