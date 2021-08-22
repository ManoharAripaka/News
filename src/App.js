import "./app.css"
import Topbar from "./Components/Topbar/Topbar"
import News from "./Components/News/News"
import { Provider } from "react-redux"
import store from "./Components/Store/ConfigStore"
export default function App(){
  return(
    <div className="main">
      <Provider store={store}>
        <Topbar/>
        <News/>
      </Provider>
     
    </div>
  )
}
