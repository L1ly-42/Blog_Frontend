import './ExpandedBlog.css'
import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import { useState } from 'react';
import ReactModal from 'react-modal';
const ExpandedBlog = ({postPost, deletePost}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [mediaURL, setMediaURL] = useState("");

    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    const blog = useLoaderData();

    const mappedPosts = (blog.posts.map((post) => {
        return  <Post className="post" key={post.id} post={post} deletePost={deletePost}/>
    }));

    const handleSubmit = (event) => {
        event.preventDefault();
        const date = Date.now();
        let currentDate = new Date(date);

        let newPost = {
            blogId: blog.id,
            title,
            content,
            mediaURL,
            dateOfCreation: `${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
        }
        postPost(newPost);
        setTitle("");
        setContent("");
        setMediaURL("");
        toggleModal();
    }

    return (
        <>
        <h2>{blog.name}</h2>
        <div id="createPostButtonContainer">
            <button id="createPostButton" onClick={toggleModal}>Create Post</button>
        </div>
        
        <ReactModal
            portalClassName="modal"
            isOpen={modalIsOpen}
            onRequestClose={toggleModal}
            contentLabel="Add Post Popup Box"
            style={
                {content:{
                    height: "300px",
                    width: "50%",
                    margin: "auto",
                    textAlign: 'center',
                    backgroundColor: 'white',
                    border: '2px solid black',
                    borderRadius: '7px'
                }}
            }
        >

            <div className='createPostContainer'>
                <h3 id="addNewPostTitle">Create Post Here:</h3>
                <form className='createPostForm' onSubmit={handleSubmit}>
                    <label htmlFor="postTitle">Post Title: </label>
                    <input
                        type="text"
                        name='title'
                        id='postTitle'
                        required
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <label htmlFor="postURL"> Post Image (URL only please): </label>
                    <input
                        type="text"
                        name='url'
                        id='postURL'
                        value={mediaURL}
                        onChange={(event) => setMediaURL(event.target.value)}
                    />

                    <label htmlFor="postContent"> Content: </label>
                    <input
                        type="text"
                        name="content"
                        id="postContent" 
                        value={content}
                        onChange={(event) => setContent(event.target.value)}
                    />
                    
                    <input type= "submit" id="submit"/>
                </form>
                <button onClick={toggleModal}>Close</button>
            </div>
        </ReactModal>

        <div className='BlogPostContainer'>
            <div className='postlist'>
            {mappedPosts}
            </div>
        </div>

        </>

    );
}
export default ExpandedBlog;