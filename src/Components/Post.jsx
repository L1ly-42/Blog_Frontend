import './Post.css'

const Post = ({post}) => {
    const mappedComments = (post.comments.map((comment) => {
        return   <li>{JSON.stringify(comment.text)}</li>
    }))
    return ( 
        <>
        <h3>{post.title}</h3>
        {post.mediaURL ? <img src={post.mediaURL} alt="post picture"/> : <></>}
        <p>{post.content}</p>
        <p>Likes: {post.numberOfLikes}</p>
        <div className='commentsList'>
            <h4 id='commentsTitle'>Comments:</h4>
            <ul className='comments'>   
                {mappedComments}
            </ul>
        </div>
        <button>Edit Post</button>
        <button>Delete Post</button>
        </>
     );
}
 
export default Post;