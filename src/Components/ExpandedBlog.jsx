import './ExpandedBlog.css'
import { useLoaderData } from 'react-router-dom';
import Post from './Post';
const ExpandedBlog = () => {
    const blog = useLoaderData();


    const mappedPosts = (blog.posts.map((post) => {
        return  <Post className="post" key={post.id} post={post}/>
    }))

    return (
        <>
        <div className='createPostContainer'>
            <h3>Create Post Here:</h3>
            <form className='createPostForm' >
                <label htmlFor="postTitle">Post Title: </label>
                <input type="text" name='title' id='postTitle' required/>

                <label htmlFor="postURL"> Post Image (URL only please)? </label>
                <input type="text" name='url' id='postURL'/>

                <label htmlFor="postContent"> Content: </label>
                <input type="text" name="content" id="postContent" />
                
                <input type= "submit" />
            </form>
        </div>
        <div className='BlogPostContainer'>
        <h2>{blog.name}</h2>
            <div className='postlist'>
            {mappedPosts}
            </div>
        </div>

        </>

    );
}
export default ExpandedBlog;