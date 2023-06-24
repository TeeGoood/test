import BlogList from "./BlogList";
import useFetch from './useFetch.js';

const Home = () => {
    const {data:blogs, onPending , error } = useFetch('http://localhost:8000/blogs');
 
    return (
        <div className="Home">
            {error && <div>{error}</div>}
            {onPending && <div>loading.....</div>}
            {blogs && < BlogList blogs={blogs} title="All Blog" />}
        </div>
    );
}
 
export default Home;