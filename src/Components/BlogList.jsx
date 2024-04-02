import Blog from './Blog';
import './BlogList.css'
const BlogList = ({filterBlogs, filteredBlogs}) => {

    const blogComponents = filteredBlogs.map((blog) => {
        return <Blog class="blog" key={blog.id} blog={blog} />
    });

    return (
        <>
            <input type="text" onChange={filterBlogs}></input>
            <p>Here is your blogs:</p>
            <div id="blogs_list">
                {blogComponents}
            </div>
        </>
    );
}
export default BlogList;