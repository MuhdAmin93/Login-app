import {getDocs, collection} from "firebase/firestore"
import { useEffect, useState } from "react"
import { database } from "../../config/firebase"
import { Post } from "./post"

export interface postData {
  title: string,
  description: string,
  id: string,
  userId: string,
  username: string
}

export const Home = () => {
  const [postsList, setPostsList] = useState<postData[] | null >(null)

  const postRef = collection(database, "posts")

  const getPosts = async () => {
    const data = await getDocs(postRef)
    setPostsList(data.docs.map((doc) => ({...doc.data(), id: doc.id})) as postData[])
  }

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div>
      <h1> THis is the Home page</h1>
      <p> {postsList?.map((postList) => (<Post post={postList} />))}</p>
    </div>
  )
}