import data from "../data.json";
import { Link } from "react-router-dom";
function Articles() {
  return (
    <>
      <div>
        <h3>Welcome to Articles Page</h3>
        <ul>
          {data.map((article) => (
            <>
              <li>
                <Link to={"/articles/" + article.slug}>
                  <h3>{article.title}</h3>
                </Link>
                <small>{article.author}</small>
              </li>
            </>
          ))}
        </ul>
        );
      </div>
    </>
  );
}
export default Articles;
