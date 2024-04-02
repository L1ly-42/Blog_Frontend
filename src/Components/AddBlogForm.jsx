import { useEffect, useState } from 'react';
import './AddBlogForm.css'

const AddBlogForm = () => {
const [blogs, setBlogs] = useState([]);

const [name, setName] = useState("");
const [userId, setUserId] = useState(1);


const [blog, setBlog] = useState({})

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
    // setBlogs([...blogs,savedBlog]);
    
}

const handleSubmit = (event) => {
    event.preventDefault();
    const date = Date.now();
    let currentDate = new Date(date)
    const copiedBlog = {...blog};
    copiedBlog["dateOfCreation"] = `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`;
    copiedBlog["timeOfCreation"] = `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}`;
    copiedBlog["name"] = "Dont worry about it";
    copiedBlog["userId"] = userId;
    setBlog(...copiedBlog);

    console.log(blog);


    




    // const newBlog = {
    //     name : "Dont worry about it", 
    //     dateOfCreation : "now",
    //     timeOfCreation : "nowww",
    //     userId: 1
    // };
    // postBlogs(newBlog);
}

useEffect(() =>{
    loadBlogs();
},[])

    
    return (
        <>

        <button onClick={handleSubmit}>Add Blog</button>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="name"> New Blog Name:</label>
                <input 
                type= "text" 
                id="newBlogName" 
                name='name' ></input> */}
{/* 
                <label htmlFor="date"> Date Created:</label>
                <input type= "text" id="newBlogDate" name='date'></input>

                <label htmlFor="time"> Time Created:</label>
                <input type= "text" id="newBlogTime" name='time'></input> */}
{/* 
                <input type="submit" value='Add Blog'/> */}
            {/* </form> */}
        </>

    );
}
 
export default AddBlogForm;