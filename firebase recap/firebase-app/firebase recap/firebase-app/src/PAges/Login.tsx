import {auth, provider} from "../config/firebase"
import {signInWithPopup} from "firebase/auth"
import {useNavigate} from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate()

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider)
    console.log(result)
    // whatever we put inside the navigate variable is the route to the page we want to go 
    navigate("/")
  }
  return (
    <div>
      <h1>Sign in with Google to continue</h1>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  )
}