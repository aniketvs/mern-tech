import { Button, Card, Divider} from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import {BsEyeSlash,BsEye} from 'react-icons/bs'

export default function LoginForm() {
    const [flag,setFlag]=useState(false);
  return (
   <>
    <Box className="loginbg loginDiv">
       <Card  className='formCard'>
          
            <Box className="header">
                <span className='member-text'>ALREADY MEMBERS</span>
                <span className='needHelpText'> Need Help?</span>
            </Box>
             <Divider/>
             <Box className="formDiv">
               <input type='text' name='text' placeholder='Enter Your Email'  className='textfiled'/>
                <Box>
                 <input type={flag?'text':'password'} name='password' placeholder='Enter Your Password' className='textfiled parent'/>
                 <span className='eye'>{
                    flag?<BsEye onClick={()=>{setFlag(!flag)}}/>:
                    <BsEyeSlash onClick={()=>{setFlag(!flag)}}/>
                    }</span>
               </Box>
             </Box>
               
             <Box className="handelButton">
             <Button variant="contained" className='button'>SIGN IN</Button>
             </Box>
         
       </Card>


       <Box className="textdiv">
        <span className='account-text'>Don't have an account yet?</span>
        <br></br>
        <span className='create-text'>Create an account</span>
       </Box>
    </Box>

   </>
  )
}
