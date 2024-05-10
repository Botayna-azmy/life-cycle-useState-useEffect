import { useContext } from "react"
import  UserContext  from "./UserContext"

export default function CurrentUser() {

    const {userOne} = useContext(UserContext)
  return (
    <div>
        {userOne}
    </div>
  )
}

