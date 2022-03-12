import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'
function App(params) {
    
    return (
        <>
        <div>
        <Header/>
        <div className="flex">
        <Sidebar/>
        <Main/>
        </div>
        </div>
        </>
    )
}

export default App;