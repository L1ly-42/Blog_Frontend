import { useEffect, useState } from 'react';
import './AddBlogForm.css'

const AddBlogForm = () => {
const [blogs, setBlogs] = useState([]);

const loadBlogs = async () => {
    const response = await fetch("http://localhost:8080/blogs");
    const jsonData = await response.json();
    console.log(jsonData);
    setBlogs(jsonData);
}

const postBlogs = async () => {
    const response = await fetch()
}

useEffect(() =>{
    loadBlogs();
},[])

    
    return (
        <p>Blog creation form!</p>
    );
}
 
export default AddBlogForm;