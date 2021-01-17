import React, { useEffect } from "react"
import axios from "axios"

export default function Home2() {

    useEffect(() => {
        callApi()
    })
    const callApi = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/statistics",
                { headers: { "authorization": localStorage.getItem("token") || "token" } })
            console.log(data)
        } catch (ex) {
            alert(ex.message)
        }
    }

    return <div className="container">
        <h1> Home2 </h1>
    </div>
}

