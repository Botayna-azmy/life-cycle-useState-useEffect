import {useState } from "react"
import User from "./User"
import UserContext from "./UserContext"

export default function Context ()  {
    const[userOne, setUserOne] = useState('Bothaina')

  return (
    <UserContext.Provider value={{userOne}}>
        <User />
    </UserContext.Provider>
  )
}
