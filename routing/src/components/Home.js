import {Link, NavLink} from "react-router-dom";
function Home() {
    return (
        <>
        <div>
        <h3>Welcome to Home Page</h3>
        <nav>
            <ul className="flex space-evenly">
              <Link  className="home-links" to="/articles">
                <li>Articles</li>
              </Link>
              <Link className="home-links" to="/help">
                <li>Help</li>
              </Link>
              </ul>
              </nav>
        </div>
        </>
    )
}
export default Home;