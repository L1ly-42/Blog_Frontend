import { Link } from 'react-router-dom';
import './Blog.css';
import { useState } from 'react';
import ReactModal from 'react-modal';

const Blog = ({blog, blogEditable, deleteBlog, updateBlog}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
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
        toggleModal();
    }

    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    const handleDeleteButton = () => {
        deleteBlog(blog.id);
    }

    return (
        <div className="blog">
            <h3>{blog.name}</h3>
            {blogEditable ? <></> : <p>Blog Creator: {blog.user.name}</p>}
            <button>
                <Link to={`/1/blogs/${blog.id}`}>
                View Blog
                </Link>
            </button>
            {/* {blogEditable ? <button><Link to={`/1/my_blogs/${blog.id}/edit`}>Edit Blog</Link></button> : <></>} */}
            {blogEditable ? <button onClick={toggleModal}>Edit Blog</button> : <></>}

            <ReactModal
                portalClassName="modal"
                isOpen={modalIsOpen}
                onRequestClose={toggleModal}
                contentLabel="Edit Blog Popup Box"
                style={
                    {content:{
                        height: "20%",
                        width: "30%",
                        margin: "auto",
                        textAlign: 'center',
                        backgroundColor: 'white',
                        border: '2px solid black',
                        borderRadius: '7px'
                    }}
            }
            >
            <h3 id= "editBlogTitle">Edit Blog Here:</h3>
            <form onSubmit={handleFormSubmit}>
                <label htmlFor="newBlogName"> New Blog Name: </label>
                <input 
                type= "text" 
                id="newBlogName" 
                name='name' 
                onChange={handleChange}
                value={stateBlog.name}
                ></input>
                <input id='editBlogButton' type="submit" value='Edit Blog'/>
            </form>
        
            <button id='closeButton' onClick={toggleModal}>Close</button>
            </ReactModal>

            {blogEditable ? <button onClick={handleDeleteButton}>Delete Blog</button> : <></>}
        </div>
     );
}
export default Blog;