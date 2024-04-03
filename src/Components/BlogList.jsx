import Blog from './Blog';
import './BlogList.css'
const BlogList = ({filterBlogs, filteredBlogs, blogsToFilter}) => {

    const blogComponents = filteredBlogs.map((blog) => {
        return <Blog class="blog" key={blog.id} blog={blog} />
    });

    const handleChange = ((event) => {
        filterBlogs(event, blogsToFilter);
    });

    return (
        <>
            <input type="text" onChange={handleChange}></input>
            <p>Here is your blogs:</p>
            <div id="blogs_list">
                {blogComponents}
            </div>
        </>
    );
}
export default BlogList;