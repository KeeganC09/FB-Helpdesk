import React, {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {useUserAuth} from '../context/UserAuthContext'
import {useNavigate} from 'react-router-dom'

function Signin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {login, user} = useUserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault();

        try{
            await login(email, password)
            navigate('/fblogin')
        }
        catch(err){
            alert(err);
            console.error(err)
        }
        console.log({
            email: email,
            password: password
        });
    };


  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#004D95", height:"100vh"}}>
        <div style={{height: "45vh", width:"50vh", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
        
        <Box
       
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
            <h3>Log In</h3>
        </div>
      <TextField id="outlined-basic" 
                label="Email" 
                type="email" 
                variant="outlined" 
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                /><br />
      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => {
            setPassword(e.target.value)
        }}
        />
        <br />
        <p style={{fontSize:"12px"}}>New to MyApp? 
        <Link href="/"> Signup</Link></p>
        <Button type="submit" variant="contained">Login</Button>
    </Box>
    </div>
    </div>
  )
}

export default Signin