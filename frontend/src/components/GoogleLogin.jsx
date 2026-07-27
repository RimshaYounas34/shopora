import React from 'react'
import{Button} from './ui/Button'
import {fcGoogle} from "react"
import { signInWithPopup } from 'firebase/auth'
import { provider } from '../helpers/firebase'

export const GoogleLogin = () => {
    const handlelogin = () => {
        // Handle Google login logic here
        const googleResponse = await signInWithPopup(auth, provider);
        console.log(googleResponse);
    }
  return (
    <Button onclick={handlelogin}>
        <fcGoogle/>
        Continue with Google
    </Button>
  )
}
