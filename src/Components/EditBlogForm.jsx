import { useLoaderData, useNavigate } from 'react-router-dom';
import './EditBlogForm.css'
import { useState } from 'react';

const EditBlogForm = ({updateBlog}) => {

    const blog = useLoaderData();
    const navigate = useNavigate();

    const [stateBlog, setStateBlog] = useState({
        name : blog.name, 
        dateOfCreation : blog.dateOfCreation,
        timeOfCreation : blog.timeOfCreation,
        userId : blog.userId
    });

    const handleChange = (event) => {
        const newName = event.target.value;
        const blogCopy = {...blog};
        blogCopy["name"] = newName;
        setStateBlog(blogCopy);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        updateBlog(stateBlog);
        navigate("/1/my_blogs");
    }

    return (
        <>
            <p>Edit Blog Here:</p>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="newBlogName"> New Blog Name:</label>
                <input 
                type= "text" 
                id="newBlogName" 
                name='name' 
                onChange={handleChange}
                value={stateBlog.name}
                ></input>
                <input type="submit" value='Edit Blog'/>
            </form>
        </>
    );
}
 
export default EditBlogForm;