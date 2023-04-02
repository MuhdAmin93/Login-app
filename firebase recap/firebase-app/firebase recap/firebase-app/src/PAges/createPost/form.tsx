import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
// addDoc is a function you call when you want to add a document to your database
import {addDoc, collection} from "firebase/firestore"
import {auth, database} from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import {useNavigate} from "react-router-dom"

interface createFormData {
  title: string,
  description: string
}


export const Form = () => {
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  const schema = yup.object().shape({
    title: yup.string().required("The title field needs to be filled"),
    description: yup.string().required("Description field needs to be filled")
  })
  const {register, handleSubmit, formState: { errors }} = useForm<createFormData>({
    resolver: yupResolver(schema)
  })
  
  // This just define the collection we are referencing to:
  const postRef = collection(database, "posts")

  const onCreatePost = async (data: createFormData) =>{
    await addDoc(postRef, {
      // title: data.title,
      // description: data.description,
      // Instead of calling the data in both title and description we can just simple do:
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    })
    navigate("/")
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onCreatePost)}>
        <input placeholder="Title..." {...register("title")}/>
        <p style={{color: "red"}}>{errors.title?.message}</p>
        <textarea placeholder="Description" {...register("description")}/>
        <p style={{color: "red"}}> {errors.description?.message}</p>
        <input type="submit" />

      </form>
    </div>
  )
}