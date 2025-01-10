import React , {useState, useEffect, useRef} from "react"

function TrafficLights(){
    const possibleColors = [{ timer: 2000, color:"green"}, {timer: 2000, color:"yellow"}, {timer: 3000, color:"red"}]
    const [color, setColor] = useState(possibleColors[0].color)
    
    let index = useRef(0)



    const changeColor = (color)=>{
        setColor(color)
    }



    useEffect(()=>{
        console.log(" useffect called", index.current)

        if(index.current > possibleColors.length-1){
            index.current = possibleColors.length
            index.current--;          
        }

        if(index.current < 0){
            index.current = 1
            index.current++;          
        }
        if(index.current > possibleColors.length-1){
            index.current = 0
        } 
        // else{
            // console.log(" inside else")
            // index++
           
            // if(index == possibleColors.length-1){
            //     index = 0
            // }
            
            let timer = setTimeout(()=>{
                
                
                changeColor(possibleColors[index.current].color)
            }, possibleColors[index.current].timer)
    
            return (()=>{
                clearTimeout(timer)
            })
        // }
    }, [color] )

    return <div style={{backgroundColor: color, height: "50px", width: "50px", borderRadius: "50px"}}>

    </div>

}

export default TrafficLights