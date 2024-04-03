import { Link } from 'react-router-dom';
import './Blog.css';
const Blog = ({blog, blogEditable, deleteBlog}) => {

    const handleDeleteButton = () => {
        deleteBlog(blog.id);
    }

    return (
        <div className="blog">
            <h3>{blog.name}</h3>
            {blogEditable ? <></> : <p>Blog Creator: {blog.user.name}</p>}
            <button>View Blog</button>
            {blogEditable ? <button><Link to={`/1/my_blogs/${blog.id}/edit`}>Edit Blog</Link></button> : <></>}
            {blogEditable ? <button onClick={handleDeleteButton}>Delete Blog</button> : <></>}
        </div>
     );
}
export default Blog;