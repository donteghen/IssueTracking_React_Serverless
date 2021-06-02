import React, { useEffect, useState } from 'react'
import {NavDropdown, MenuItem, Modal, Nav} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {googleClientId, SIGNIN_URI, SIGNOUT_URI, USER_URI }from '../env'


export default function AuthNav (){
    const [disabled, setDisabled] = useState(true)
    const [user, setUser] = useState({})
    const [showing, setShowing] = useState(false)

    const signOut = ()=>{
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
        return fetch(SIGNOUT_URI, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          })
    })
    .then(() => setUser({}))
    }
    const signIn = ()=>{ 

        const auth2 = gapi.auth2.getAuthInstance()
        auth2.signIn()
        .then(googleUSer => {
            return googleUSer.getAuthResponse().id_token
        })
        .then(googleToken => {
            console.log(googleToken)
           return fetch(SIGNIN_URI, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ google_token: googleToken })
              })
        })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(result => {
            console.log(result)
            setUser(result)
        })
        .catch (error => console.log(`Error signing into the app: ${error}`))
    }
         
    
    useEffect(()=>{
        
        gapi.load('auth2', () =>{
            if(!gapi.auth2.getAuthInstance()){
                gapi.auth2.init({client_id:googleClientId})
                .then(() => {
                    return fetch(USER_URI, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                      })
                })
                .then(response => response.json())
                .then(result => {
                    console.log(result)
                    setUser(result)
                })
            }
        })
    }, [user])
    //const {user} = user
    if(user.signedIn){
       
        return (
            <NavDropdown title={user.name} id="basic-nav-dropdown">
                <NavDropdown.Item>
                    <span onClick={signOut} >SignOut</span>
                </NavDropdown.Item>
          </NavDropdown>
        )
    }
    return (<>
            <Modal show ={showing} onHide={() => setShowing(false)} size='sm'>
                  <Modal.Header closeButton><h3>Sign In</h3></Modal.Header>
                    <Modal.Body>
                    <div className='container text-center' >
                    {/* <div className="g-signin2" data-onsuccess="onSignIn"></div> */}
                    <button className='btn btn-primary' onClick={signIn}>
                        <img src='https://developers.google.com/identity/images/btn_google_signin_light_normal_web.png' />
                    </button>
                  </div>
                  </Modal.Body>
            </Modal>
          <span style={{color:'#0275d8', cursor:'pointer'}} disabled={disabled} onClick={()=> setShowing(true)}>SignIn <FontAwesomeIcon icon='sign-in-alt' /></span>
        </>
    )

}

                