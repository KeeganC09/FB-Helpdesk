import React, {useState} from 'react'
import FacebookLogin from 'react-facebook-login'

function Facebook() {

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
            <h3 style={{margin:"0px"}}>Integrated Page: {name}</h3>
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
    <div>{fbContent}</div>
  )
}

export default Facebook