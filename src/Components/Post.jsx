import ReactModal from 'react-modal';
import './Post.css'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = ({post, deletePost, updatePost, blogCreator}) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [editModalIsOpen, setEditModalIsOpen] = useState(false);

    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);
    const [mediaURL, setMediaURL] = useState(post.mediaURL);


    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedPost = {
            title,
            content,
            mediaURL
        }
        updatePost(updatedPost, post);
        toggleEditModal();
    }

    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
    }

    const toggleEditModal = () => {
        setEditModalIsOpen(!editModalIsOpen);
    }

    const mappedComments = (post.comments.map((comment) => {
        return   <li><b>{comment.userName}</b><br/>{comment.text}<br/><hr/></li>
    }));

    const handleDelete = () => {
        deletePost(post.id);
    }


    return ( 
        <div className="postDiv">
            <div className="postContent">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
                {post.mediaURL ? <img id="postImage" src={post.mediaURL} alt="post picture"/> : <></>}
            </div>

            <div className="postActions">
                <p>{post.numberOfLikes} 👍</p>

                <div className="postActionsRight">
                    <button onClick={toggleModal}>Open Comments</button>

                    <ReactModal
                        portalClassName="modal"
                        isOpen={modalIsOpen}
                        onRequestClose={toggleModal}
                        contentLabel="Comments Popup Box"
                        style={
                            {content:{
                                height: "20%",
                                width: "30%",
                                margin: "auto"
                            }}
                        }
                    >

                        <div className='commentsList'>
                            <h4 id='commentsTitle'>Comments:</h4>
                            <ul className='comments'>   
                                {mappedComments}
                            </ul>
                            <button id="closeCommentsButton" onClick={toggleModal}>Close</button>
                        </div>
                    
                    </ReactModal>

                    {blogCreator ? <button onClick={toggleEditModal}>Edit Post</button> : <></>}

                    <ReactModal
                        portalClassName="modal"
                        isOpen={editModalIsOpen}
                        onRequestClose={toggleEditModal}
                        contentLabel="Edit Post Popup Box"
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

                    <div className='editPostContainer'>
                        <h3 id="editPostTitle">Edit Post Here:</h3>
                        <form className="editPostForm" onSubmit={handleSubmit}>

                            <label htmlFor="postTitle">New Post Title: </label>
                            <input
                                type="text"
                                name='title'
                                id='postTitle'
                                required
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />

                            <label htmlFor="postURL"> New Post Image (URL only please): </label>
                            <input
                                type="text"
                                name='url'
                                id='postURL'
                                value={mediaURL}
                                onChange={(event) => setMediaURL(event.target.value)}
                            />

                            <label htmlFor="postContent"> New Content: </label>
                            <input
                                type="text"
                                name="content"
                                id="postContent" 
                                value={content}
                                onChange={(event) => setContent(event.target.value)}
                            />
                            
                            <input type= "submit" id="submit"/>

                        </form>
                    </div>
                    </ReactModal>

                    {blogCreator ? <button onClick={handleDelete}>Delete Post</button> : <></>} 
                </div>
            </div>
        </div>
     );
}
 
export default Post;