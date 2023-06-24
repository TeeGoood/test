import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="notfound">
            <h2>Sorry</h2>
            <p>That page cannot found</p>
            <Link to="/">Go back to Home page</Link>
        </div>
    );
}
 
export default NotFound;