import { useEffect, useState } from 'react';
import './AddBlogForm.css'

const AddBlogForm = () => {
const [blogs, setBlogs] = useState([]);



const [blog, setBlog] = useState({
    name : "Dont worry about it", 
    dateOfCreation :"02/04/2014",
    timeOfCreation : "16:00", 
    userId : 3
})

const loadBlogs = async () => {
    const response = await fetch("http://localhost:8080/blogs");
    const jsonData = await response.json();
    console.log(jsonData);
    setBlogs(jsonData);
}

const postBlogs = async (blog) => {
    const response = await fetch("http://localhost:8080/blogs", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    })
    const savedBlog = await response.json();
    setBlogs([...blogs,savedBlog]);
    
}

const handleSubmit = () => {
    postBlogs(blog);
}

useEffect(() =>{
    loadBlogs();
},[])

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> New Blog Name:</label>
                <input type= "text" id="newBlogName" name='name'></input>

                <label htmlFor="date"> Date Created:</label>
                <input type= "text" id="newBlogDate" name='date'></input>

                <label htmlFor="time"> Time Created:</label>
                <input type= "text" id="newBlogTime" name='time'></input>

                <input type="submit" value='Add Blog'/>
            </form>
        </>

    );
}
 
export default AddBlogForm;