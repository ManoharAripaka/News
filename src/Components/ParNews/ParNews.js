import "./parnews.css"
export default function ParNews(props) {
    return (
        <div className="news">
            <img id="newsImage" src={props.data.urlToImage} alt=""/> 
            <div className="newsData">
                <p id="newsTitle">{props.data.title}</p>
                <p id="newsAuthor">{props.data.author}</p>
                <p id="newsContent">{props.data.content}</p>
                <a id="newsMore" href={props.data.url}>View More..</a>
            </div>
        </div>
    )
}