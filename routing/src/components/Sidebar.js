import React from "react";
import {Link, NavLink} from "react-router-dom";
class Sidebar extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <div className="flex-16 sidebar">
          <nav>
            <ul>
              <NavLink activeClassName="active" className="links" exact to="/">
                  <span><i className="fa fa-house"></i></span>
                <li>Home</li>
              </NavLink>
              <NavLink activeClassName="active" className="links" to="/articles">
                <li>Articles</li>
              </NavLink>
              <NavLink activeClassName="active" className="links" to="/Help">
                <li>Help</li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Sidebar;
