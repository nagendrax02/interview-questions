import React, { useState } from "react"

function MyComponent(props){

    const [name, setName] = useState("Nagendra")

    const {boolean} = props

    const handleChangeNameBtn=()=>{
        console.log(" invoked")
        setName("Rawat")
    }

    console.log('re rendered')
    
    return <>
        {boolean ? <div>{name}</div> : <></>}
        <button onClick={handleChangeNameBtn}>change name</button>
    </>

}


export default MyComponent