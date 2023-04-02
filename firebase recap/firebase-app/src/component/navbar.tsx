import {auth} from "../config/firebase"
import {useAuthState} from "react-firebase-hooks/auth"
import {Link} from "react-router-dom"
import { signOut } from "firebase/auth"


export const Navbar = () => {
  const [user] = useAuthState(auth)

  const logOut = async () => {
    await signOut(auth)
  }
    return (
      <div>
        <Link to="/">Home</Link>
        {!user ? <Link to="/login">  Login</Link> : <Link to="/createpost"> Create Post</Link>}

        <div>
          {user && (
            <>
          <p> {user?.displayName}</p>
          <img src={user?.photoURL || ""}  width="100" height="100" alt=""/>
          <button onClick={logOut}> Log Out</button>
          </>
          )}
        </div>
       </div> 
    )
}