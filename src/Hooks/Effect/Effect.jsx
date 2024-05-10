import { useEffect, useState } from "react"

export default function Effect(){
    const [users,setUsers] = useState([])
    const [inputValues, setInputValues] = useState('')
    const [filteredUsers, setFilteredUsers] = useState([])
     useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(res =>res.json())
            .then(data => setUsers(data))   
           return () => {
            return false
           }
          },[])
          
          useEffect(()=>{
            if(users.length > 0){
                console.log(users)
            }
          },[users])
          useEffect (()=>{
            setFilteredUsers(users)
          },[users])

          useEffect((e)=>{
            const filter = users.filter(
            user => user.name.toLowerCase().includes(inputValues)
                 )
                setFilteredUsers(filter)
          },[inputValues])

  return (
    <div>
        <input type="text" id="" onInput={e=>setInputValues(e.target.value)} />
       {filteredUsers.map (
        user => <h2 key={user.id}>{user.name}</h2>
       )}
       
    </div>
  )
}

