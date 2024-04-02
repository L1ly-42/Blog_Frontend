import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import BlogList from "../Components/BlogList";
import AddBlogForm from "../Components/AddBlogForm";
import EditBlogForm from "../Components/EditBlogForm";
import ExpandedBlog from "../Components/ExpandedBlog";
import './BlogContainer.css';

const BlogContainer = () => {

    const [blogs, setBlogs] = useState([]);
    const [myBlogs, setMyBlogs] = useState([]);
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const fetchBlogs = async () => {
        const response = await fetch("http://localhost:8080/blogs");
        const data = await response.json();
        setBlogs(data);
        setFilteredBlogs(data);
    }

    const postBlogs = async (blog) => {
        const response = await fetch("http://localhost:8080/blogs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        })
        const savedBlog = await response.json();
        setBlogs([...blogs,savedBlog]);
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    const filterBlogs = ((event) => {
        const filteredList = blogs.filter((blog) => blog.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredBlogs(filteredList);
    });

    const blog_id = 1;
    const BlogRoutes = createBrowserRouter([
        {
            path: "/",
            element: <></>,
        },
        {
            path: "/1",
            element: <NavBar />,
            children:[
                {
                    path:"/1/all_blogs",
                    element: <BlogList filteredBlogs={filteredBlogs} filterBlogs={filterBlogs} />
                },
                {
                    path: "/1/my_blogs",
                    element: <BlogList />
                },
                {
                    path: `/1/blogs/${blog_id}`,
                    element: <ExpandedBlog />
                },
                {
                    path: "/1/my_blogs/new",
                    element: <AddBlogForm postBlogs={postBlogs} />
                },
                {
                    path: `/1/my_blogs/${blog_id}/edit`,
                    element: <EditBlogForm />
                }
            ]
        }
    ])
    
    
    return ( 

        <>
        <h1> Hello from BlogContainer!</h1>
        <RouterProvider router={BlogRoutes}/>
        </>

    );
}
 
export default BlogContainer;