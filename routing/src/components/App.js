import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
function App(params) {
    
    return (
        <>
        <div>
        <Header/>
        <div className="flex">
        <Sidebar/>
        <Home/>
        </div>
        </div>
        </>
    )
}

export default App;