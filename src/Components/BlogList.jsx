import { useEffect, useState } from "react";
import Blog from './Blog';
import './BlogList.css'
const BlogList = () => {

    const [blogs, setBlogs] = useState([]);
    const [myBlogs, setMyBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await fetch("http://localhost:8080/blogs");
        const data = await response.json();
        console.log(data);
        setBlogs(data);
        setFilteredBlogs(data);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    const filterBlogs = ((event) => {
        const filteredBlogs = blogs.filter((blog) => blog.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredBlogs(filteredBlogs);
    });

    const blogComponents = filteredBlogs.map((blog) => {
        return <Blog key={blog.id} blog={blog} />
    });

    return (
        <>
            <input type="text" onChange={filterBlogs}></input>
            <p>Here is your blogs:</p>
            {blogComponents}
        </>
    );
}
export default BlogList;