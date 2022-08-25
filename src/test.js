import { useState } from "react"

export default function Test() {

    const [check, setCheck] = useState();
    const course = [
        {
            id:1,
            title: "Html,css"
        },
        {
            id:2,
            title: "JavaScript"
        },
        {
            id:3,
            title: "ReactJs"
        }
    ]


    // console.log(check)
    console.log("ff")
    return (
        < >
        {
            course.map( coure =>(
                <div style={{padding:21}} key={coure.id}>
                    <input 
                    style={{marginRight:20}} 
                    type={"radio"}
                    onChange={()=> setCheck(coure.id)}
                    checked ={check === coure.id}
                    
                    />
                    {coure.title}                

                </div>
            ))
        }
        </>
    )
}