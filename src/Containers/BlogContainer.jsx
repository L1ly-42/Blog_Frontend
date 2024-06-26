import { RouterProvider, createBrowserRouter, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import BlogList from "../Components/BlogList";
import AddBlogForm from "../Components/AddBlogForm";
import ExpandedBlog from "../Components/ExpandedBlog";
import Logo from "../Images/Logo.png"
import './BlogContainer.css';
import LandingPage from "../Components/LandingPage";

const BlogContainer = () => {

    // UseStates
    const [blogs, setBlogs] = useState([]);
    const [myBlogs, setMyBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);
    const [filteredMyBlogs, setFilteredMyBlogs] = useState([]);
    const [currUserId, setCurrUserId] = useState(null);
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);

    // Fetch requests
    const fetchUsers = async() => {
        const response = await fetch("http://localhost:8080/users");
        const data = await response.json();
        setUsers(data);
    }
 
    const fetchBlogs = async () => {
        const response = await fetch("http://localhost:8080/blogs");
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data);
    }

    const fetchPosts = async () => {
        const response = await fetch("http://localhost:8080/posts");
        const data = await response.json();
        setPosts(data);
    }

    const postBlogs = async (blog) => {
        const response = await fetch("http://localhost:8080/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        });
        const savedBlog = await response.json();
        setBlogs([...blogs,savedBlog]);
    }

    const updateBlog = async (blog) => {
        await fetch(`http://localhost:8080/blogs/${blog.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        await fetchBlogs();
    };
    
    const deleteBlog = async (blogId) => {
        await fetch(`http://localhost:8080/blogs/${blogId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });
        setBlogs(blogs.filter((blog) => blog.id !== blogId));
    }

    const updatePost = async (updatedPost, post) => {
        await fetch(`http://localhost:8080/posts/${post.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedPost)
        });
        await fetchPosts();
    }

    const deletePost = async (postId) => {
        await fetch(`http://localhost:8080/posts/${postId}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });
        setPosts(posts.filter((post) => post.id !== postId));
    }

    const postPost = async (post) => {
        const response = await fetch(`http://localhost:8080/posts`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(post)
        });
        const savedPost = await response.json();
        setPosts([...posts, savedPost]);
    }

    // Use Effects

    useEffect(() => {
        fetchBlogs();
        fetchUsers();
        fetchPosts();
    }, []);

    useEffect(() => {
            setFilteredBlogs([...blogs]);
            setMyBlogs(blogs.filter(blogs => blogs.user.id === currUserId));
    }, [blogs, currUserId]);

    useEffect(()=>{
        fetchBlogs();
    }, [posts]);


    useEffect(() => {
        setFilteredMyBlogs([...myBlogs]);
    }, [myBlogs]);

    // Other Functions 

    const handleNewUser = (userId) => {
        setCurrUserId(userId);
    }

    const filterBlogs = ((event, blogsToFilter) => {
        const filteredList = blogsToFilter.filter((blog) => blog.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredBlogs(filteredList);
    });

    const filterMyBlogs = ((event, blogsToFilter) => {
        const filteredList = blogsToFilter.filter((blog) => blog.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredMyBlogs(filteredList);
    });
  
    const viewBlogLoader = ({params}) => {
        return blogs.find(blog =>{
            return blog.id === parseInt(params.blog_id);
        });
    };

    // Routes
    const BlogRoutes = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage handleNewUser={handleNewUser} users={users}/>,
        },
        {
            path: `/:currUserId`,
            element: <NavBar />,
            children:[
                {
                    path:`/:currUserId/all_blogs`,
                    element: <BlogList
                                title="All Blogs"
                                filteredBlogs={filteredBlogs}
                                filterFunction={filterBlogs}
                                blogsToFilter={blogs}
                                displayMyBlogs={false}
                                updateBlog={updateBlog}
                            />
                },
                {
                    path: `/:currUserId/my_blogs`,
                    element: <BlogList
                                title="My Blogs"
                                filteredBlogs={filteredMyBlogs}
                                filterFunction={filterMyBlogs}
                                blogsToFilter={myBlogs}
                                displayMyBlogs={true}
                                deleteBlog={deleteBlog}
                                updateBlog={updateBlog}
                            />
                },
                {
                    path: `/:currUserId/blogs/:blog_id`,
                    loader: viewBlogLoader,
                    element: <ExpandedBlog
                                postPost={postPost}
                                deletePost={deletePost}
                                updatePost={updatePost}
                            />
                },
                {
                    path: `/:currUserId/my_blogs/new`,
                    element: <AddBlogForm postBlogs={postBlogs} />
                }
            ]
        }
    ])
    
    
    return ( 
        <>
            <header>
                <h1> Blogtopia! </h1>
                <img src={Logo} id="logo"/>
            </header>

            <main>
                <RouterProvider router={BlogRoutes}/>
            </main>
            
            <footer>
                <hr />
                 <section id="footer-section">
                    <div id="contact">
                        <h3 id="contactTitle">Contact Us:</h3>
                        <p>Email:</p>
                        <a href="admin@blogtopia.com">admin@blogtopia.com</a>
                        <p>Phone number: </p>
                        <a href="tel:0207 197 9902">+44 (5182) 797 9825</a>
                    </div>

                    <div id="copyright">
                        <p id="copyrightText"> &copy; Blogtopia 2024</p>
                        <img src={Logo} id="footerLogo"/>
                    </div>

                </section>
            </footer> 
        </>

    );
}
 
export default BlogContainer;
