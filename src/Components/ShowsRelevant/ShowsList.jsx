import { useState, useEffect } from "react"

function ShowsList(){

    const [allShows, setAllShows] = useState([])
console.log("State of all Shows: ", allShows)

    useEffect(()=>{
        fetch("http://localhost:3333/api/shows")
        .then(r => r.json() )
        .then(arr => setAllShows(arr))

    } 
    ,[])

    const showsToRender = allShows.map((eachShow) =>
    <div>
        <h4> {eachShow.title}</h4>
    </div>

    )
    return(
        <div>
        <h2>{showsToRender}</h2>
        </div>
    )
}

export default ShowsList

2;29