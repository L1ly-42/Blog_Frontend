import { useEffect, useState } from 'react';
import './AddBlogForm.css'

const AddBlogForm = ({postBlogs}) => {

const [userId, setUserId] = useState(1);
const [blog, setBlog] = useState(null);

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