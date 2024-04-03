import './Blog.css';
const Blog = ({blog, blogEditable}) => {
    return (
        <div className="blog">
            <h3>{blog.name}</h3>
            <p>Blog Creator: {blog.user.name}</p>
            <button>View Blog</button>
            {blogEditable ? <button>Edit Blog</button> : <></>}
        </div>
     );
}
export default Blog;