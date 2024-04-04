import ReactModal from 'react-modal';
import './Post.css'
import { useState } from 'react';

const Post = ({post, deletePost}) => {

    const [modalIsOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!modalIsOpen)
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
                {post.mediaURL ? <img className="postImage" src={post.mediaURL} alt="post picture"/> : <></>}
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

                    <button>Edit Post</button>
                    <button onClick={handleDelete}>Delete Post</button>
                </div>
            </div>
        </div>
     );
}
 
export default Post;