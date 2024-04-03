import Blog from './Blog';
import './BlogList.css'
const BlogList = ({filterFunction, filteredBlogs, blogsToFilter, title, displayMyBlogs, deleteBlog}) => {

    const blogComponents = filteredBlogs.map((blog) => {
        return <Blog class="blog" key={blog.id} blog={blog} blogEditable={displayMyBlogs} deleteBlog={deleteBlog} />
    });

    const handleChange = ((event) => {
        filterFunction(event, blogsToFilter);
    });

    return (
        <>
            <h2>{title}</h2>
            <label htmlFor="filterBlogs">Search: </label>
            <input type="text" name="Search" id="filterBlogs" onChange={handleChange}></input>
            <div id="blogs_list">
                {blogComponents}
            </div>
        </>
    );
}
export default BlogList;