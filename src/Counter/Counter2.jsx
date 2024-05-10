import { useState } from "react"

export default function Counter (){
        const [counter, setcounter] = useState(0)

        const handleClick = () => {
            setcounter (counter+ 1)
        }

        const handleReset = () => {
                setcounter(0)
        }

    return <>
            <button onClick={handleClick}>Click to increment !! </button>
            <button onClick={handleReset}>Reset !! </button>
            Il y a {counter} secondes

    </>
}