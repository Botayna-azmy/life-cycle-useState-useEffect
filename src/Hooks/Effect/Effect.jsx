import { useEffect, useState } from "react"

export default function Effect(){
    const [counter,setCounter] = useState(0)

    useEffect(()=>{
        console.log("mount")
      },[])
    const update = () => {
       return setCounter(prev=> prev +1)
    }
  return (
    <div>
       <h1>il y a {counter}</h1> 
        <button onClick={update}>Click</button>
    </div>
  )
}

