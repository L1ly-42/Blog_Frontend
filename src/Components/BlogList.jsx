import Blog from './Blog';
import './BlogList.css'

const BlogList = ({filterFunction, filteredBlogs, blogsToFilter, title, displayMyBlogs, deleteBlog, updateBlog}) => {

    const blogComponents = filteredBlogs.map((blog) => {
        return <Blog class="blog" key={blog.id} blog={blog} blogEditable={displayMyBlogs} deleteBlog={deleteBlog} updateBlog={updateBlog}/>
    });

    const handleChange = ((event) => {
        filterFunction(event, blogsToFilter);
    });

    return (
        <div id="blogsDiv">
            <h2>{title}</h2>
            <div id="searchBar">
                <label htmlFor="filterBlogs">Search: </label>
                <input type="text" name="Search" id="filterBlogs" onChange={handleChange}></input>
            </div>
            <div id="blogs_list">
                {blogComponents}
            </div>
        </div>
    );
}
export default BlogList;