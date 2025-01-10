import React, { useState } from "react";
import Restaurants from "./app/pages/Restaurants";
import TrafficLights from "./app/components/Component";
import MyComponent from "./app/components/MyComponent";
import Counter from "./app/components/TestComponent";

function App() {

  const fetchAPI=async(url, numberOfTimes)=>{

   console.log('called api')

    try{
      let data  = await fetch(url)
      console.log(data, "data")
      let res = await data.json()
      console.log(res, "result")
      return res
    }catch(error){
      numberOfTimes--;
      if(numberOfTimes >=0){
        fetchAPI(url, numberOfTimes)
        return error
      }
    }

  }

  const a = {
    b: {c: 5}
  }


  const createDeepCopy = (a)=>{
 
    if(typeof(a) !== "object" || a == [] || a == {} || a == null || a == undefined){
      return a
    }

    let copiedObj = Array.isArray(a) ? [] : {}

   for (const key in a){
      // if(a.hasOwnProperty(key)){
        copiedObj[key] = createDeepCopy(a[key])
      // }
  }

 

   return copiedObj
  }



  return (
    <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
      {/* <Restaurants/> */}
{/* <TrafficLights/> */}

{/* <MyComponent boolean={true}/> */}
{/* <Counter/> */}
    <button onClick={async()=>{

      console.log(createDeepCopy(a))

      const obj = createDeepCopy(a)

      console.log(obj, "object")
      // let data = await fetchAPI("https://jsonplaeholder.typicode.com/todos/1", 3)
      // console.log(data, "final data")
    }}>Call</button>
    </div>
  );
}

export default App;

// Create one function which will take a URL, number of times we want to call it
// The function has to call the URL with numbers times passed to fn
