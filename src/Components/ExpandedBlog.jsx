import './ExpandedBlog.css'
import { useLoaderData } from 'react-router-dom';
import Post from './Post';
import { useState } from 'react';
import ReactModal from 'react-modal';
const ExpandedBlog = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    const blog = useLoaderData();

    const mappedPosts = (blog.posts.map((post) => {
        return  <Post className="post" key={post.id} post={post}/>
    }))

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

            <div className='createPostContainer'>
                <h3>Create Post Here:</h3>
                <form className='createPostForm' >
                    <label htmlFor="postTitle">Post Title: </label>
                    <input type="text" name='title' id='postTitle' required/>

                    <label htmlFor="postURL"> Post Image (URL only please): </label>
                    <input type="text" name='url' id='postURL'/>

                    <label htmlFor="postContent"> Content: </label>
                    <input type="text" name="content" id="postContent" />
                    
                    <input type= "submit" />
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