import React,{useEffect, useState} from "react"
import { useSelector } from "react-redux"
import ParNews from "../ParNews/ParNews"
export default function News() {
    const [data, setData] = useState([])
    const text = useSelector(state=>state.data.value)
    useEffect (()=> {
        let url = `https://newsapi.org/v2/everything?q=${text}&from=2021-07-22&sortBy=publishedAt&language=en&apiKey=80048bb1a8e145ab95b95a288e9e8e72`
        fetch(url)
        .then((response)=>response.json())
        .then((news)=> {setData(news.articles)})
    },[text])
    return (
        <>
            {data.map((item,index) => <ParNews key={index} data={item}/>)}
        </>
    )
}