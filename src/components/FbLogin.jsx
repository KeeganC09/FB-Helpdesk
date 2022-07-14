import React, {useState} from 'react'
import Button from '@mui/material/Button';
import FacebookLogin from 'react-facebook-login'


function FbLogin() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userID, setUserID] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [picture, setPicture] = useState("")

    const responseFacebook = response => {
        console.log(response);
        setIsLoggedIn(true)
        setUserID(response.userID)
        setName(response.name)
        setEmail(response.email)
        setPicture(response.picture.data.url)
    }

    const componentClicked = () => {
        console.log('clicked');
    }

     let fbContent;

     if(isLoggedIn){
        fbContent = (
        <div>
            <h3 style={{margin:"5px"}}>Integrated Page: {name}</h3>
            <div><Button style={{backgroundColor:"red", margin:"5px", width:"97%"}} variant="contained">Delete Integration</Button></div>
            <div> <Button style={{backgroundColor:"blue", margin:"5px", width:"97%"}} variant="contained">Reply to Messages</Button> </div>
        </div>
        );
     }

     else{
        fbContent = (<FacebookLogin
            appId="758107332175037"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook} />)
     }


  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"#004D95", height:"100vh"}}>
        <div style={{height: "30vh", width:"50vh", backgroundColor:"white", borderRadius:"4%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <h3>Facebook Page Integration</h3>
            {fbContent}
        </div>
    </div>
  )
}

export default FbLogin