import { useEffect, useState } from 'react';
import './AddBlogForm.css'

const AddBlogForm = () => {
const [blogs, setBlogs] = useState([]);

const [name, setName] = useState("");
const [userId, setUserId] = useState(1);


const [blog, setBlog] = useState(null)

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
    console.log(savedBlog);    
}

const handleSubmit = (event) => {
    console.log(event)
    event.preventDefault();
    const date = Date.now();
    let currentDate = new Date(date)
    let blogNow = {
        name : event.target[0].value, 
        dateOfCreation : `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`,
        timeOfCreation : `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}`,
        userId : userId
    }
    setBlog({...blogNow});
}

useEffect(()=>{
    if(blog !== null){
        postBlogs(blog);
    }
}, [blog])

useEffect(() =>{
    loadBlogs();
},[])

    
    return (
        <>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name"> New Blog Name:</label>
                <input 
                type= "text" 
                id="newBlogName" 
                name='name' ></input>
                <input type="submit" value='Add Blog'/>
            </form>
        </>

    );
}
 
export default AddBlogForm;