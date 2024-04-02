import './Blog.css';
const Blog = ({blog}) => {
    return (
        <div className="blog">
            <h3>{blog.name}</h3>
            <p>Blog Creator: {blog.user.name}</p>
            <button>View Blog</button>
        </div>
     );
}
export default Blog;