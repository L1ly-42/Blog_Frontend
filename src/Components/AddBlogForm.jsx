import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import './AddBlogForm.css'

const AddBlogForm = ({postBlogs}) => {

const [blog, setBlog] = useState(null);
const navigate = useNavigate();
const params = useParams();
const id = params.currUserId;

const handleSubmit = (event) => {
    event.preventDefault();
    const date = Date.now();
    let currentDate = new Date(date)
    let blogNow = {
        name : event.target[0].value, 
        dateOfCreation : `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`,
        timeOfCreation : `${currentDate.getUTCHours()}:${currentDate.getUTCMinutes()}`,
        userId : id
    }
    setBlog({...blogNow});
}

useEffect(()=>{
    if(blog !== null){
        postBlogs(blog);
        navigate(`/${id}/my_blogs`);
    }
}, [blog])
    
    return (
        <>
        <h2>Create Blog</h2>

        <div className="createAddForm">

            <form onSubmit={handleSubmit}>
                <label htmlFor="newBlogName"> New Blog Name: </label>
                <input 
                type= "text" 
                id="newBlogName" 
                name='name' 
                required></input>
                <input id="addBlogButton"type="submit" value='Add Blog'/>
            </form>
        </div>
        </>

    );
}
 
export default AddBlogForm;