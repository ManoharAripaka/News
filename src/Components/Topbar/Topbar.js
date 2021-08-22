import { useState } from "react"
import { useDispatch } from "react-redux"
import { update } from "../Store/DataSlice"
import "./topbar.css"

export default function Topbar() {
    const [text, setText] = useState("all")
    const dispatch = useDispatch()
    const handleChange = (e) => {
        e.preventDefault()
        dispatch(update({text}))
    }
    return (
        <div className="topbar">
            <input onChange={(event)=>setText(event.target.value)} type="text" name="searchBar" placeholder="Search for News" id="searchBar"/>
            <button id="searchButton" onClick={handleChange}>Search</button>
        </div>
    )
}